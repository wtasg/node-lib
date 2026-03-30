/**
 * Recursively search an object for keys whose values match a target.
 *
 * @module find-value
 */
/**
 * Result produced when a matching value is found.
 */
interface FindValueMatch {
    /** Dot-separated key path to the matched value. */
    loc: string;
    /** The value that was matched. */
    val: unknown;
}
/**
 * Comparator function used to decide whether two values match.
 */
type FindValueCompare = (target: unknown, candidate: unknown) => boolean;
/**
 * Callback invoked for every match.
 */
type FindValueCallback = (match: FindValueMatch) => void;
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
declare function findValue(obj: Record<string, unknown>, target: unknown, compare?: FindValueCompare, whenFound?: FindValueCallback): void;
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
declare function findValues(obj: Record<string, unknown>, targets: unknown | unknown[], compare?: FindValueCompare, whenFound?: FindValueCallback): void;
export { findValue, findValues, };
export type { FindValueMatch, FindValueCompare, FindValueCallback, };
//# sourceMappingURL=find-value.d.ts.map