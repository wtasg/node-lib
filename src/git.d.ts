/**
 * Detect whether a directory is inside a Git repository.
 *
 * @module git
 */
/**
 * Filesystem dependency for `isGitInit`, allowing test mocking.
 */
interface GitFsDependency {
    existsSync: (path: string) => boolean;
}
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
declare function isGitInit(dirPath?: string, fs?: GitFsDependency): boolean;
export { isGitInit, };
export type { GitFsDependency, };
//# sourceMappingURL=git.d.ts.map