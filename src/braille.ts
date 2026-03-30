/**
 * Braille encoding/decoding for ASCII characters.
 *
 * Maps printable ASCII characters (code points 32–127) to/from
 * Unicode Braille Patterns block (U+2800–U+28FF).
 *
 * @module braille
 */

const BRAILLE_OFFSET = 0x2800;

/**
 * Check whether a character code is within printable ASCII range (32–127).
 *
 * @param charCode - The character code to check.
 * @returns `true` when the code is in the printable ASCII range.
 */
function isAscii(charCode: number): boolean {
    return charCode >= 32 && charCode <= 127;
}

/**
 * Check whether a single character is a Braille pattern that maps
 * back to a printable ASCII character.
 *
 * @param ch - A single character to test.
 * @returns `true` when `ch` is a Braille character mapping to ASCII 0–127.
 */
function isBraille(ch: string): boolean {
    const code = ch.charCodeAt(0) - BRAILLE_OFFSET;
    return code >= 0 && code <= 127;
}

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
function brailleEncodeChar(ch: string): string {
    const code = ch.charCodeAt(0);
    return isAscii(code) ? String.fromCharCode(code + BRAILLE_OFFSET) : ch;
}

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
function brailleEncode(input: string, separator?: string): string {
    return input
        .split("")
        .map(brailleEncodeChar)
        .join(separator ?? "");
}

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
function brailleDecodeChar(ch: string): string {
    return isBraille(ch)
        ? String.fromCharCode(ch.charCodeAt(0) - BRAILLE_OFFSET)
        : ch;
}

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
function brailleDecode(input: string, separator?: string): string {
    return input
        .split(separator ?? "")
        .map(brailleDecodeChar)
        .join(separator ?? "");
}

/**
 * Encode an ASCII character code to its Braille character.
 * Returns `undefined` when the code is outside printable ASCII range 32–127.
 *
 * @param charCode - ASCII character code.
 * @returns The Braille character, or `undefined`.
 */
function brailleEncodeCharCode(charCode: number): string | undefined {
    return isAscii(charCode)
        ? String.fromCharCode(charCode + BRAILLE_OFFSET)
        : undefined;
}

/**
 * Decode a Braille character code back to an ASCII character.
 * Returns `undefined` when the code does not map to ASCII 0–127.
 *
 * @param charCode - Braille character code.
 * @returns The ASCII character, or `undefined`.
 */
function brailleDecodeCharCode(charCode: number): string | undefined {
    const ascii = charCode - BRAILLE_OFFSET;
    return ascii >= 0 && ascii <= 127
        ? String.fromCharCode(ascii)
        : undefined;
}

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
const ASCII_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Pre-computed Braille encoding of {@link ASCII_ALPHABET}.
 */
const BRAILLE_ALPHABET: string = ASCII_ALPHABET
    .split("")
    .map(brailleEncodeChar)
    .join("");

function buildAsciiMap(): readonly BrailleMapEntry[] {
    const map: BrailleMapEntry[] = [];
    for (let i = 32; i <= 127; i++) {
        map.push({
            code: i,
            ascii: String.fromCharCode(i),
            braille: String.fromCharCode(i + BRAILLE_OFFSET),
        });
    }
    return Object.freeze(map);
}

/**
 * Pre-computed lookup table mapping printable ASCII codes (32–127)
 * to their Braille equivalents.
 */
const ASCII_MAP: readonly BrailleMapEntry[] = buildAsciiMap();

function buildBrailleMap(): readonly BrailleMapEntry[] {
    const map: BrailleMapEntry[] = [];
    for (let i = 32 + BRAILLE_OFFSET; i <= 127 + BRAILLE_OFFSET; i++) {
        map.push({
            code: i,
            braille: String.fromCharCode(i),
            ascii: String.fromCharCode(i - BRAILLE_OFFSET),
        });
    }
    return Object.freeze(map);
}

/**
 * Pre-computed lookup table mapping Braille codes back to ASCII.
 */
const BRAILLE_MAP: readonly BrailleMapEntry[] = buildBrailleMap();

function buildAlphabetMap(): readonly BrailleAlphabetEntry[] {
    return Object.freeze(
        ASCII_ALPHABET.split("").map((ch) => ({
            ascii: ch,
            braille: brailleEncodeChar(ch),
        }))
    );
}

/**
 * Pre-computed letter-by-letter mapping of ASCII alphabet to Braille.
 */
const ALPHABET_MAP: readonly BrailleAlphabetEntry[] = buildAlphabetMap();

export {
    brailleEncode,
    brailleDecode,
    brailleEncodeChar,
    brailleDecodeChar,
    brailleEncodeCharCode,
    brailleDecodeCharCode,
    isBraille,
    isAscii,
    ASCII_ALPHABET,
    BRAILLE_ALPHABET,
    ASCII_MAP,
    BRAILLE_MAP,
    ALPHABET_MAP,
};

export type {
    BrailleMapEntry,
    BrailleAlphabetEntry,
};
