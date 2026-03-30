import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { isPrimitive, isPrimitiveArray } from "./primitive.js";

describe("isPrimitive", () => {
    it("returns true for null", () => {
        strictEqual(isPrimitive(null), true);
    });

    it("returns true for undefined", () => {
        strictEqual(isPrimitive(undefined), true);
    });

    it("returns true for number", () => {
        strictEqual(isPrimitive(42), true);
    });

    it("returns true for string", () => {
        strictEqual(isPrimitive("hello"), true);
    });

    it("returns true for boolean", () => {
        strictEqual(isPrimitive(true), true);
    });

    it("returns true for bigint", () => {
        strictEqual(isPrimitive(42n), true);
    });

    it("returns true for symbol", () => {
        strictEqual(isPrimitive(Symbol("s")), true);
    });

    it("returns false for object", () => {
        strictEqual(isPrimitive({}), false);
    });

    it("returns false for array", () => {
        strictEqual(isPrimitive([]), false);
    });

    it("returns false for function", () => {
        strictEqual(isPrimitive(() => undefined), false);
    });
});

describe("isPrimitiveArray", () => {
    it("returns true for array of primitives", () => {
        strictEqual(isPrimitiveArray([1, "two", null, true]), true);
    });

    it("returns false when array contains objects", () => {
        strictEqual(isPrimitiveArray([1, { a: 2 }]), false);
    });

    it("returns false for non-array", () => {
        strictEqual(isPrimitiveArray("not-array"), false);
    });

    it("returns true for empty array", () => {
        strictEqual(isPrimitiveArray([]), true);
    });
});
