import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { hello } from "./hello.js";
describe("hello", () => {
    it("returns a string that has the word 'hello' in it", () => {
        const expected = true;
        const actual = hello();
        strictEqual(actual.includes("hello"), expected);
    });
    it("returns exact string", () => {
        const expected = "hello from @wtasnorg/node-lib";
        const actual = hello();
        strictEqual(actual, expected);
    });
});
//# sourceMappingURL=hello.test.js.map