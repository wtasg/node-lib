import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { format } from "./format.js";
describe("format", () => {
    it("replaces a single placeholder", () => {
        strictEqual(format("Hello, {name}!", { name: "World" }), "Hello, World!");
    });
    it("replaces multiple different placeholders", () => {
        strictEqual(format("{a} + {b} = {c}", { a: 1, b: 2, c: 3 }), "1 + 2 = 3");
    });
    it("replaces repeated placeholders", () => {
        strictEqual(format("{x} and {x}", { x: "same" }), "same and same");
    });
    it("returns original string when no placeholders exist", () => {
        strictEqual(format("no placeholders", {}), "no placeholders");
    });
    it("replaces missing keys with 'undefined'", () => {
        strictEqual(format("{missing}", {}), "undefined");
    });
    it("handles empty format string", () => {
        strictEqual(format("", { a: 1 }), "");
    });
    it("handles numeric values", () => {
        strictEqual(format("count: {n}", { n: 42 }), "count: 42");
    });
});
//# sourceMappingURL=format.test.js.map