/**
 * Base58 encoding/decoding with multiple charset variants.
 * Base58 excludes visually ambiguous characters (0, O, I, l).
 * @module base58
 */

/**
 * Available Base58 charset variants.
 * - `bitcoin`: Bitcoin/IPFS alphabet (default)
 * - `flickr`: Flickr short URLs (swaps case)
 * - `ripple`: Ripple addresses
 */
const Base58Charset = ["bitcoin", "flickr", "ripple"] as const;

/**
 * Base58 charset type.
 */
type Base58CharsetType = (typeof Base58Charset)[number];

/**
 * Charset alphabets for Base58 variants.
 */
const CHARSETS: Record<Base58CharsetType, string> = {
    bitcoin: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    flickr: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    ripple: "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"
};

/**
 * Build a reverse lookup table for decoding.
 * @param alphabet - The 58-character alphabet string.
 * @returns Map of character to index.
 */
function buildDecodeTable(alphabet: string): Map<string, number> {
    const table = new Map<string, number>();
    for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
        if (char !== undefined) {
            table.set(char, i);
        }
    }
    return table;
}

/**
 * Pre-built decode tables for each charset.
 */
const DECODE_TABLES: Record<Base58CharsetType, Map<string, number>> = {
    bitcoin: buildDecodeTable(CHARSETS.bitcoin),
    flickr: buildDecodeTable(CHARSETS.flickr),
    ripple: buildDecodeTable(CHARSETS.ripple)
};

/**
 * Encode a string to Base58.
 *
 * @example
 * ```typescript
 * import { encode58 } from "./base58.js";
 *
 * encode58("Hello World");
 * // => "JxF12TrwUP45BMd"
 *
 * encode58("Hello World", "flickr");
 * // => "jXf12sRWto45bmD"
 * ```
 *
 * @param input - The string to encode.
 * @param charset - The charset variant to use (default: "bitcoin").
 * @returns The Base58 encoded string.
 */
function encode58(input: string, charset: Base58CharsetType = "bitcoin"): string {
    if (input === "") {
        return "";
    }

    const alphabet = CHARSETS[charset];
    const bytes = new TextEncoder().encode(input);

    // Count leading zeros
    let leadingZeros = 0;
    for (const byte of bytes) {
        if (byte === 0) {
            leadingZeros++;
        } else {
            break;
        }
    }

    // Convert bytes to a big integer
    let num = 0n;
    for (const byte of bytes) {
        num = num * 256n + BigInt(byte);
    }

    // Convert to Base58
    let result = "";
    while (num > 0n) {
        const remainder = Number(num % 58n);
        num = num / 58n;
        result = alphabet[remainder] + result;
    }

    // Add leading '1's for leading zero bytes
    const leadChar = alphabet[0];
    for (let i = 0; i < leadingZeros; i++) {
        result = leadChar + result;
    }

    return result;
}

/**
 * Decode a Base58 string.
 *
 * @example
 * ```typescript
 * import { decode58 } from "./base58.js";
 *
 * decode58("JxF12TrwUP45BMd");
 * // => "Hello World"
 *
 * decode58("jXf12sRWto45bmD", "flickr");
 * // => "Hello World"
 * ```
 *
 * @param input - The Base58 encoded string.
 * @param charset - The charset variant to use (default: "bitcoin").
 * @returns The decoded string.
 * @throws Error if the input contains invalid characters.
 */
function decode58(input: string, charset: Base58CharsetType = "bitcoin"): string {
    if (input === "") {
        return "";
    }

    const alphabet = CHARSETS[charset];
    const decodeTable = DECODE_TABLES[charset];
    const leadChar = alphabet[0];

    // Count leading '1's (or equivalent)
    let leadingOnes = 0;
    for (const char of input) {
        if (char === leadChar) {
            leadingOnes++;
        } else {
            break;
        }
    }

    // Convert from Base58 to big integer
    let num = 0n;
    for (const char of input) {
        const value = decodeTable.get(char);
        if (value === undefined) {
            throw new Error(`Invalid Base58 character: ${char}`);
        }
        num = num * 58n + BigInt(value);
    }

    // Convert big integer to bytes
    const bytes: number[] = [];
    while (num > 0n) {
        bytes.unshift(Number(num % 256n));
        num = num / 256n;
    }

    // Add leading zeros
    for (let i = 0; i < leadingOnes; i++) {
        bytes.unshift(0);
    }

    return new TextDecoder().decode(new Uint8Array(bytes));
}

export { encode58, decode58, Base58Charset };
export type { Base58CharsetType };
