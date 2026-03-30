/**
 * Word, line, and letter counting.
 *
 * @module wc
 */
/**
 * Statistics returned by {@link wc}.
 */
interface WcResult {
    /** Number of lines (rows after splitting). */
    lines: number;
    /** Number of words (sequences of alphanumeric characters). */
    words: number;
    /** Total number of characters (including whitespace). */
    letters: number;
}
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
declare function wc(data: string, rowSplitter?: string): WcResult;
export { wc, };
export type { WcResult, };
//# sourceMappingURL=wc.d.ts.map