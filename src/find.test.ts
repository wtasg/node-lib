import test from "node:test";
import assert from "node:assert/strict";

import { createFindDirectories } from "./find.js";

import type { FileSystemDependencies } from "./find.js";

// Helper to build Dirent-like objects
function dir(name: string): { name: string; isDirectory(): boolean } {
    return { name, isDirectory: () => true };
}
function file(name: string): { name: string; isDirectory(): boolean } {
    return { name, isDirectory: () => false };
}

test("find: findDirectories success", async () => {

    // Minimal mock FS: /root contains one directory "a" and one file "b"
    const mockFS = {
        readdir: async (path: string) => {
            if (path === "/root") {
                return [
                    { name: "a", isDirectory: () => true },
                    { name: "b", isDirectory: () => false },
                ];
            }
            return [];
        },

        stat: async (path: string) => ({
            isDirectory: () => path === "/root" || path === "/root/a"
        }),
    };

    const findDirectories = createFindDirectories(mockFS);

    const result = await findDirectories("/root", { maxDepth: 1 });

    assert.deepEqual(result, [
        "/root",
        "/root/a"
    ]);
});

test("find: findDirectories symlink is NOT treated as a directory", async () => {

    const mockFS = {
        readdir: async (path: string) => {
            if (path === "/root") {
                return [
                    {
                        name: "linkToA",
                        isDirectory: () => false
                    }
                ];
            }
            return [];
        },

        stat: async (path: string) => ({
            isDirectory: () => path === "/root" // only root is a directory
        }),

        readlink: async () => {
            throw new Error("readlink should not be called when symlink support is removed");
        }
    };

    const findDirectories = createFindDirectories(mockFS);

    const result = await findDirectories("/root", { maxDepth: 1 });

    assert.deepEqual(result, [
        "/root"
    ]);
});


test("find: findDirectories at depth=2", async () => {
    const deps: FileSystemDependencies = {
        readdir: async (path: string): Promise<{ name: string; isDirectory(): boolean }[]> => {
            switch (path) {
                case "/root":
                    return [dir("a"), dir("b"), file("ignore.txt")];
                case "/root/a":
                    return [dir("a1")];
                case "/root/b":
                    return [dir("b1")];
                default:
                    return [];
            }
        },
        stat: async () => ({
            isDirectory: () => false
        })
    };

    const find = createFindDirectories(deps);

    const result = await find("/root", { maxDepth: 2 });

    assert.deepEqual(result.sort(), [
        "/root",
        "/root/a",
        "/root/b",
        "/root/a/a1",
        "/root/b/b1"
    ].sort());
});

test("find: findDirectories at depth=3", async () => {
    const deps: FileSystemDependencies = {
        readdir: async (path: string): Promise<{ name: string; isDirectory(): boolean }[]> => {
            switch (path) {
                case "/root":
                    return [dir("a"), dir("b")];
                case "/root/a":
                    return [dir("a1")];
                case "/root/b":
                    return [dir("b1")];
                case "/root/a/a1":
                case "/root/b/b1":
                    return [dir("c")];
                case "/root/b/b1/c":
                    return [dir("d"), file("fd")];
                default:
                    return [];
            }
        },
        stat: async () => ({
            isDirectory: () => false
        })
    };

    const find = createFindDirectories(deps);

    const result = await find("/root", { maxDepth: 3 });

    assert.deepEqual(result.sort(), [
        "/root",
        "/root/a",
        "/root/b",
        "/root/a/a1",
        "/root/a/a1/c",
        "/root/b/b1",
        "/root/b/b1/c",
    ].sort());
});
