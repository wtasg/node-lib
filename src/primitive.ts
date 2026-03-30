/**
 * Primitive value and primitive array detection.
 *
 * @module primitive
 */

/**
 * Check whether a value is a JavaScript primitive
 * (`null`, `boolean`, `number`, `string`, `symbol`, `bigint`, or `undefined`).
 *
 * @param val - The value to test.
 * @returns `true` when `val` is a primitive.
 *
 * @example
 * ```ts
 * isPrimitive(42);        // true
 * isPrimitive("hello");   // true
 * isPrimitive({});         // false
 * isPrimitive(null);       // true
 * ```
 */
function isPrimitive(val: unknown): boolean {
    return val === null || (typeof val !== "object" && typeof val !== "function");
}

/**
 * Check whether a value is an array containing only primitive values.
 *
 * @param input - The value to test.
 * @returns `true` when `input` is an array and every element is a primitive.
 *
 * @example
 * ```ts
 * isPrimitiveArray([1, "two", null]); // true
 * isPrimitiveArray([1, { a: 2 }]);    // false
 * isPrimitiveArray("not-array");      // false
 * ```
 */
function isPrimitiveArray(input: unknown): boolean {
    return Array.isArray(input) && input.every((i: unknown) => isPrimitive(i));
}

export {
    isPrimitive,
    isPrimitiveArray,
};
