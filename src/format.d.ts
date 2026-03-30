/**
 * Lightweight string template formatting using `{key}` placeholders.
 *
 * @module format
 */
/**
 * Replace `{key}` placeholders in `fmt` with values from `obj`.
 * Keys that do not exist in `obj` are replaced with `undefined`.
 *
 * @param fmt - Format string containing `{key}` placeholders.
 * @param obj - Object whose property values are substituted.
 * @returns The formatted string.
 *
 * @example
 * ```ts
 * format("Hello, {name}!", { name: "World" });
 * // "Hello, World!"
 * ```
 *
 * @example
 * ```ts
 * format("{a} + {b} = {c}", { a: 1, b: 2, c: 3 });
 * // "1 + 2 = 3"
 * ```
 */
declare function format(fmt: string, obj: Record<string, unknown>): string;
export { format, };
//# sourceMappingURL=format.d.ts.map