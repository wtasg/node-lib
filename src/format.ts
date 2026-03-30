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
function format(fmt: string, obj: Record<string, unknown>): string {
    const keys = fmt.match(/\{[^}]*/g);
    if (!keys) {
        return fmt;
    }

    const keyNames = keys.map((x) =>
        x.split("{").pop()?.split("}").shift() ?? ""
    );

    let result = fmt;
    for (const key of keyNames) {
        const pattern = new RegExp(
            "\\{" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\}",
            "g",
        );
        result = result.replace(pattern, String(obj[key]));
    }
    return result;
}

export {
    format,
};
