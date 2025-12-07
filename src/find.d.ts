interface FileSystemDependencies {
    readdir: (path: string, opts: {
        withFileTypes: true;
    }) => Promise<{
        name: string;
        isDirectory(): boolean;
    }[]>;
    stat: (path: string) => Promise<{
        isDirectory(): boolean;
    }>;
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
declare function createFindDirectories(deps: FileSystemDependencies): (root: string, options?: FindDirectoriesOptions) => Promise<string[]>;
export { createFindDirectories, };
export type { FileSystemDependencies, FindDirectoriesOptions, };
//# sourceMappingURL=find.d.ts.map