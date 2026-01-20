import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { hello } from "./hello.js";
describe("hello", () => {
    it("returns a string that has the word 'hello' in it", async () => {
        const expected = true;
        const actual = await hello();
        strictEqual(actual.includes("hello"), expected);
    });
    it("returns exact string", async () => {
        const expected = "hello from @wtasnorg/node-lib";
        const actual = await hello();
        strictEqual(actual, expected);
    });
    it("logs message when console is provided", async () => {
        const spyConsole = {
            logCalledWith: "",
            log(message) {
                this.logCalledWith = message;
            }
        };
        const expectedMessage = "hello from @wtasnorg/node-lib";
        await hello(spyConsole);
        strictEqual(spyConsole.logCalledWith, expectedMessage);
    });
});
//# sourceMappingURL=hello.test.js.map