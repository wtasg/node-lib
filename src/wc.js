/**
 * Word, line, and letter counting.
 *
 * @module wc
 */
const RE_WORDS = /[a-zA-Z0-9]+/g;
/**
 * Count lines, words, and letters in a string, similar to the Unix `wc` utility.
 *
 * Words are defined as sequences of alphanumeric characters (`[a-zA-Z0-9]+`).
 *
 * @param data - The text to analyse.
 * @param rowSplitter - Delimiter used to split lines (default `"\n"`).
 * @returns An object with `lines`, `words`, and `letters` counts.
 *
 * @example
 * ```ts
 * wc("hello world\ngoodbye");
 * // { lines: 2, words: 3, letters: 19 }
 * ```
 */
function wc(data, rowSplitter = "\n") {
    const rows = data.split(rowSplitter);
    const lines = rows.length;
    const words = rows.reduce((acc, row) => {
        const matches = row.match(RE_WORDS);
        return acc + (matches ? matches.length : 0);
    }, 0);
    const letters = data.length;
    return { lines, words, letters };
}
export { wc, };
//# sourceMappingURL=wc.js.map