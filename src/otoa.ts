/**
 * Convert an object's values into an array, optionally stripping a key prefix.
 *
 * @module otoa
 */

/**
 * Extract the values of `obj` into an array. When `keyPrefix` is supplied,
 * only keys starting with that prefix are included, and the prefix is
 * stripped from matched keys during processing.
 *
 * Returns an empty array when `obj` is not a non-null object
 * or `keyPrefix` is not a string.
 *
 * @param obj - The source object.
 * @param keyPrefix - Optional prefix to filter/strip from keys (default `""`).
 * @returns Array of values.
 *
 * @example
 * ```ts
 * objectToArray({ a: 1, b: 2, c: 3 });
 * // [1, 2, 3]
 * ```
 *
 * @example
 * ```ts
 * objectToArray({ col_name: "Alice", col_age: 30, id: 1 }, "col_");
 * // ["Alice", 30]
 * ```
 */
function objectToArray(obj: Record<string, unknown>, keyPrefix = ""): unknown[] {
    if (
        typeof obj !== "object" ||
        obj === null ||
        !Array.isArray(Object.keys(obj)) ||
        typeof keyPrefix !== "string"
    ) {
        return [];
    }

    return Object.keys(obj)
        .filter((k) => k.startsWith(keyPrefix))
        .map((k) => obj[k]);
}

export {
    objectToArray,
};
