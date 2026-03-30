import { describe, it } from "node:test";
import { strictEqual, deepStrictEqual } from "node:assert";
import { findValue, findValues } from "./find-value.js";
describe("findValue", () => {
    it("finds a value at the top level", () => {
        const results = [];
        findValue({ a: 1, b: 2 }, 2, undefined, (m) => results.push(m));
        deepStrictEqual(results, [{ loc: "b", val: 2 }]);
    });
    it("finds a value nested deeply", () => {
        const results = [];
        findValue({ x: { y: { z: 42 } } }, 42, undefined, (m) => results.push(m));
        deepStrictEqual(results, [{ loc: "x.y.z", val: 42 }]);
    });
    it("finds nothing when value is absent", () => {
        const results = [];
        findValue({ a: 1 }, 99, undefined, (m) => results.push(m));
        strictEqual(results.length, 0);
    });
    it("uses custom comparator", () => {
        const results = [];
        findValue({ name: "HELLO" }, "hello", (a, b) => String(a).toLowerCase() === String(b).toLowerCase(), (m) => results.push(m));
        strictEqual(results.length, 1);
        strictEqual(results[0]?.loc, "name");
    });
    it("finds multiple occurrences", () => {
        const results = [];
        findValue({ a: 1, b: { c: 1 } }, 1, undefined, (m) => results.push(m));
        strictEqual(results.length, 2);
    });
});
describe("findValues", () => {
    it("finds multiple target values", () => {
        const results = [];
        findValues({ a: 1, b: 2, c: 3 }, [1, 3], undefined, (m) => results.push(m));
        strictEqual(results.length, 2);
    });
    it("accepts a single non-array target", () => {
        const results = [];
        findValues({ a: "x" }, "x", undefined, (m) => results.push(m));
        strictEqual(results.length, 1);
    });
});
//# sourceMappingURL=find-value.test.js.map