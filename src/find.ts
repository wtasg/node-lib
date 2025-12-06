import { resolve, join } from "node:path";

interface FileSystemDependencies {
    readdir: (path: string, opts: { withFileTypes: true }) => Promise<{ name: string; isDirectory(): boolean; }[]>;
    stat: (path: string) => Promise<{ isDirectory(): boolean }>;
}

interface FindDirectoriesOptions {
    maxDepth?: number;
    followSymlinks?: boolean;
    allowlist?: string[] | ((absPath: string, name: string) => boolean);
    blocklist?: string[] | ((absPath: string, name: string) => boolean);
}

/**
 * Factory that produces an async findDirectories function with
 * injected filesystem dependencies for full testability.
 */
function createFindDirectories(deps: FileSystemDependencies) {

    const { readdir } = deps;

    return async function findDirectories(
        root: string,
        options: FindDirectoriesOptions = {}
    ): Promise<string[]> {

        const {
            maxDepth = 1,
            allowlist,
            blocklist
        } = options;

        const absRoot = resolve(root);
        const results: string[] = [];


        function isAllowed(absPath: string, name: string): boolean {
            if (allowlist) {
                if (Array.isArray(allowlist)) {
                    if (!allowlist.includes(name)) return false;
                } else if (!allowlist(absPath, name)) {
                    return false;
                }
            }
            return true;
        }

        function isBlocked(absPath: string, name: string): boolean {
            if (blocklist) {
                if (Array.isArray(blocklist)) {
                    if (blocklist.includes(name)) return true;
                } else if (blocklist(absPath, name)) {
                    return true;
                }
            }
            return false;
        }

        async function walk(currentPath: string, depth: number): Promise<void> {
            if (depth > maxDepth) return;

            const entries = await readdir(currentPath, { withFileTypes: true });

            for (const entry of entries) {
                const childPath = resolve(join(currentPath, entry.name));

                const isDirectory = entry.isDirectory();

                if (!isDirectory) continue;

                if (isBlocked(childPath, entry.name)) continue;
                if (!isAllowed(childPath, entry.name)) continue;

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

export {
    createFindDirectories,
}

export type {
    FileSystemDependencies,
    FindDirectoriesOptions,
}
