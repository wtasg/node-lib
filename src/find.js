import { resolve, join } from "node:path";
/**
 * Factory that produces an async findDirectories function with
 * injected filesystem dependencies for full testability.
 */
function createFindDirectories(deps) {
    const { readdir } = deps;
    return async function findDirectories(root, options = {}) {
        const { maxDepth = 1, allowlist, blocklist } = options;
        const absRoot = resolve(root);
        const results = [];
        function isAllowed(absPath, name) {
            if (allowlist) {
                if (Array.isArray(allowlist)) {
                    if (!allowlist.includes(name))
                        return false;
                }
                else if (!allowlist(absPath, name)) {
                    return false;
                }
            }
            return true;
        }
        function isBlocked(absPath, name) {
            if (blocklist) {
                if (Array.isArray(blocklist)) {
                    if (blocklist.includes(name))
                        return true;
                }
                else if (blocklist(absPath, name)) {
                    return true;
                }
            }
            return false;
        }
        async function walk(currentPath, depth) {
            if (depth > maxDepth)
                return;
            const entries = await readdir(currentPath, { withFileTypes: true });
            for (const entry of entries) {
                const childPath = resolve(join(currentPath, entry.name));
                const isDirectory = entry.isDirectory();
                if (!isDirectory)
                    continue;
                if (isBlocked(childPath, entry.name))
                    continue;
                if (!isAllowed(childPath, entry.name))
                    continue;
                results.push(childPath);
                if (depth < maxDepth) {
                    await walk(childPath, depth + 1);
                }
            }
        }
        // match find(1): root is always included
        results.push(absRoot);
        await walk(absRoot, 1);
        return results;
    };
}
export { createFindDirectories, };
//# sourceMappingURL=find.js.map