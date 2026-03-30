/**
 * Detect whether a directory is inside a Git repository.
 *
 * @module git
 */
import { existsSync } from "node:fs";
import { resolve } from "node:path";
/**
 * Check whether a `.git` directory exists at the given path,
 * indicating the directory is (or is inside) a Git repository.
 *
 * @param dirPath - Directory to check (defaults to `process.cwd()`).
 * @param fs - Injectable filesystem dependency (defaults to Node `fs.existsSync`).
 * @returns `true` when a `.git` entry exists.
 *
 * @example
 * ```ts
 * import { isGitInit } from "@wtasnorg/node-lib/git";
 *
 * isGitInit("/my/project"); // true or false
 * ```
 */
function isGitInit(dirPath, fs) {
    const check = fs?.existsSync ?? existsSync;
    return check(resolve(dirPath ?? process.cwd(), ".git"));
}
export { isGitInit, };
//# sourceMappingURL=git.js.map