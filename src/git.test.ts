import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { isGitInit } from "./git.js";
import type { GitFsDependency } from "./git.js";

describe("isGitInit", () => {
    it("returns true when .git exists", () => {
        const mockFs: GitFsDependency = {
            existsSync: (path: string) => path.endsWith(".git"),
        };
        strictEqual(isGitInit("/some/project", mockFs), true);
    });

    it("returns false when .git does not exist", () => {
        const mockFs: GitFsDependency = {
            existsSync: () => false,
        };
        strictEqual(isGitInit("/some/project", mockFs), false);
    });

    it("uses cwd when dirPath is omitted", () => {
        let checkedPath = "";
        const mockFs: GitFsDependency = {
            existsSync: (path: string) => {
                checkedPath = path;
                return false;
            },
        };
        isGitInit(undefined, mockFs);
        strictEqual(checkedPath.endsWith(".git"), true);
    });
});
