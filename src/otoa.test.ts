import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert";
import { objectToArray } from "./otoa.js";

describe("objectToArray", () => {
    it("converts object values to array", () => {
        deepStrictEqual(objectToArray({ a: 1, b: 2, c: 3 }), [1, 2, 3]);
    });

    it("filters by key prefix", () => {
        deepStrictEqual(
            objectToArray({ col_name: "Alice", col_age: 30, id: 1 }, "col_"),
            ["Alice", 30],
        );
    });

    it("returns empty array for null", () => {
        deepStrictEqual(objectToArray(null as unknown as Record<string, unknown>), []);
    });

    it("returns empty array for non-object", () => {
        deepStrictEqual(objectToArray(42 as unknown as Record<string, unknown>), []);
    });

    it("returns all values when prefix is empty string", () => {
        deepStrictEqual(objectToArray({ x: 10, y: 20 }, ""), [10, 20]);
    });

    it("returns empty array when no keys match prefix", () => {
        deepStrictEqual(objectToArray({ a: 1, b: 2 }, "z_"), []);
    });
});
