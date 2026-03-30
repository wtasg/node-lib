/**
 * Braille encoding/decoding for ASCII characters.
 *
 * Maps printable ASCII characters (code points 32–127) to/from
 * Unicode Braille Patterns block (U+2800–U+28FF).
 *
 * @module braille
 */
/**
 * Check whether a character code is within printable ASCII range (32–127).
 *
 * @param charCode - The character code to check.
 * @returns `true` when the code is in the printable ASCII range.
 */
declare function isAscii(charCode: number): boolean;
/**
 * Check whether a single character is a Braille pattern that maps
 * back to a printable ASCII character.
 *
 * @param ch - A single character to test.
 * @returns `true` when `ch` is a Braille character mapping to ASCII 0–127.
 */
declare function isBraille(ch: string): boolean;
/**
 * Encode a single ASCII character into its Braille equivalent.
 * Non-ASCII characters are returned unchanged.
 *
 * @param ch - A single character.
 * @returns The Braille-encoded character, or the original if not ASCII.
 *
 * @example
 * ```ts
 * brailleEncodeChar("A"); // "⡁"
 * brailleEncodeChar("€"); // "€"
 * ```
 */
declare function brailleEncodeChar(ch: string): string;
/**
 * Encode a string by converting every ASCII character to its Braille equivalent.
 * Non-ASCII characters are passed through unchanged.
 *
 * @param input - The string to encode.
 * @param separator - Optional separator inserted between encoded characters.
 * @returns The Braille-encoded string.
 *
 * @example
 * ```ts
 * brailleEncode("Hi"); // "⡈⡩"
 * ```
 */
declare function brailleEncode(input: string, separator?: string): string;
/**
 * Decode a single Braille character back to ASCII.
 * Non-Braille characters are returned unchanged.
 *
 * @param ch - A single character.
 * @returns The decoded ASCII character, or the original if not Braille.
 *
 * @example
 * ```ts
 * brailleDecodeChar("⡁"); // "A"
 * ```
 */
declare function brailleDecodeChar(ch: string): string;
/**
 * Decode a Braille-encoded string back to ASCII.
 *
 * @param input - The Braille string to decode.
 * @param separator - Optional separator used during encoding.
 * @returns The decoded string.
 *
 * @example
 * ```ts
 * brailleDecode("⡈⡩"); // "Hi"
 * ```
 */
declare function brailleDecode(input: string, separator?: string): string;
/**
 * Encode an ASCII character code to its Braille character.
 * Returns `undefined` when the code is outside printable ASCII range 32–127.
 *
 * @param charCode - ASCII character code.
 * @returns The Braille character, or `undefined`.
 */
declare function brailleEncodeCharCode(charCode: number): string | undefined;
/**
 * Decode a Braille character code back to an ASCII character.
 * Returns `undefined` when the code does not map to ASCII 0–127.
 *
 * @param charCode - Braille character code.
 * @returns The ASCII character, or `undefined`.
 */
declare function brailleDecodeCharCode(charCode: number): string | undefined;
/**
 * Entry in a Braille ↔ ASCII lookup table.
 */
interface BrailleMapEntry {
    /** Numeric character code. */
    code: number;
    /** The ASCII character. */
    ascii: string;
    /** The Braille character. */
    braille: string;
}
/**
 * Entry mapping a single letter to its Braille equivalent.
 */
interface BrailleAlphabetEntry {
    /** The ASCII letter. */
    ascii: string;
    /** The Braille letter. */
    braille: string;
}
/**
 * The lowercase + uppercase ASCII alphabet.
 */
declare const ASCII_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * Pre-computed Braille encoding of {@link ASCII_ALPHABET}.
 */
declare const BRAILLE_ALPHABET: string;
/**
 * Pre-computed lookup table mapping printable ASCII codes (32–127)
 * to their Braille equivalents.
 */
declare const ASCII_MAP: readonly BrailleMapEntry[];
/**
 * Pre-computed lookup table mapping Braille codes back to ASCII.
 */
declare const BRAILLE_MAP: readonly BrailleMapEntry[];
/**
 * Pre-computed letter-by-letter mapping of ASCII alphabet to Braille.
 */
declare const ALPHABET_MAP: readonly BrailleAlphabetEntry[];
export { brailleEncode, brailleDecode, brailleEncodeChar, brailleDecodeChar, brailleEncodeCharCode, brailleDecodeCharCode, isBraille, isAscii, ASCII_ALPHABET, BRAILLE_ALPHABET, ASCII_MAP, BRAILLE_MAP, ALPHABET_MAP, };
export type { BrailleMapEntry, BrailleAlphabetEntry, };
//# sourceMappingURL=braille.d.ts.map