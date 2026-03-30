import { describe, it } from "node:test";
import { strictEqual, ok } from "node:assert";
import { hashString, getAscii } from "./hash.js";

describe("getAscii", () => {
    it("converts characters to code strings", () => {
        strictEqual(getAscii("A"), "65");
        strictEqual(getAscii("AB"), "6566");
    });

    it("handles empty string", () => {
        strictEqual(getAscii(""), "");
    });
});

describe("hashString", () => {
    it("returns a number", () => {
        strictEqual(typeof hashString("hello"), "number");
    });

    it("is deterministic", () => {
        const a = hashString("test");
        const b = hashString("test");
        strictEqual(a, b);
    });

    it("produces different hashes for different inputs", () => {
        const a = hashString("abc");
        const b = hashString("xyz");
        ok(a !== b);
    });

    it("accepts custom salt and size", () => {
        const a = hashString("hello", "xyz", 10);
        strictEqual(typeof a, "number");
    });

    it("handles non-string input by converting to string", () => {
        strictEqual(typeof hashString(12345), "number");
        strictEqual(typeof hashString(null), "number");
    });
});
