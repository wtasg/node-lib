/**
 * Recursively search an object for keys whose values match a target.
 *
 * @module find-value
 */
/**
 * Internal recursive walker.
 */
function walk(obj, target, compare, whenFound, location) {
    const keys = Object.keys(obj);
    for (const k of keys) {
        location.push(k);
        const val = obj[k];
        if (compare(target, val)) {
            whenFound({ loc: location.join("."), val: target });
        }
        else if (typeof val === "object" && val !== null) {
            walk(val, target, compare, whenFound, location);
        }
        location.pop();
    }
}
/**
 * Search `obj` recursively for entries whose value satisfies `compare(target, value)`.
 * Every match is reported via `whenFound`.
 *
 * @param obj - The object to search.
 * @param target - The value to look for.
 * @param compare - Comparator (defaults to strict equality).
 * @param whenFound - Callback for each match (defaults to `console.log`).
 *
 * @example
 * ```ts
 * const results: FindValueMatch[] = [];
 * findValue({ a: { b: 42 } }, 42, undefined, (m) => results.push(m));
 * // results → [{ loc: "a.b", val: 42 }]
 * ```
 */
function findValue(obj, target, compare, whenFound) {
    walk(obj, target, compare ?? ((a, b) => a === b), whenFound ?? ((m) => { console.log(m); }), []);
}
/**
 * Search `obj` for multiple target values at once.
 *
 * @param obj - The object to search.
 * @param targets - A single value or array of values to look for.
 * @param compare - Comparator (defaults to strict equality).
 * @param whenFound - Callback for each match (defaults to `console.log`).
 *
 * @example
 * ```ts
 * const results: FindValueMatch[] = [];
 * findValues({ a: 1, b: 2, c: 3 }, [1, 3], undefined, (m) => results.push(m));
 * // results → [{ loc: "a", val: 1 }, { loc: "c", val: 3 }]
 * ```
 */
function findValues(obj, targets, compare, whenFound) {
    const list = Array.isArray(targets) ? targets : [targets];
    for (const target of list) {
        findValue(obj, target, compare, whenFound);
    }
}
export { findValue, findValues, };
//# sourceMappingURL=find-value.js.map