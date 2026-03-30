import { describe, it } from "node:test";
import { strictEqual, deepStrictEqual } from "node:assert";
import { wc } from "./wc.js";

describe("wc", () => {
    it("counts lines, words, and letters", () => {
        deepStrictEqual(wc("hello world\ngoodbye"), {
            lines: 2,
            words: 3,
            letters: 19,
        });
    });

    it("handles single line", () => {
        const result = wc("one two three");
        strictEqual(result.lines, 1);
        strictEqual(result.words, 3);
        strictEqual(result.letters, 13);
    });

    it("handles empty string", () => {
        const result = wc("");
        strictEqual(result.lines, 1);
        strictEqual(result.words, 0);
        strictEqual(result.letters, 0);
    });

    it("handles string with no words", () => {
        const result = wc("   \n   ");
        strictEqual(result.lines, 2);
        strictEqual(result.words, 0);
    });

    it("supports custom row splitter", () => {
        const result = wc("one;two;three", ";");
        strictEqual(result.lines, 3);
        strictEqual(result.words, 3);
    });

    it("counts only alphanumeric sequences as words", () => {
        const result = wc("hello-world foo_bar");
        strictEqual(result.words, 4); // hello, world, foo, bar
    });
});
