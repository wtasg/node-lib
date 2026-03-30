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
declare function isPrimitive(val: unknown): boolean;
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
declare function isPrimitiveArray(input: unknown): boolean;
export { isPrimitive, isPrimitiveArray, };
//# sourceMappingURL=primitive.d.ts.map