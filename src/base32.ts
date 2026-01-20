/**
 * Base32 encoding/decoding with multiple charset variants.
 * Base32 is case-insensitive and useful for human-readable encoding (TOTP codes).
 * @module base32
 */

/**
 * Available Base32 charset variants.
 * - `rfc4648`: Standard RFC 4648 alphabet (A-Z, 2-7)
 * - `hex`: Extended hex alphabet (0-9, A-V)
 * - `crockford`: Douglas Crockford's alphabet (excludes I, L, O, U)
 */
const Base32Charset = ["rfc4648", "hex", "crockford"] as const;

/**
 * Base32 charset type.
 */
type Base32CharsetType = (typeof Base32Charset)[number];

/**
 * Charset alphabets for Base32 variants.
 */
const CHARSETS: Record<Base32CharsetType, string> = {
    rfc4648: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    hex: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    crockford: "0123456789ABCDEFGHJKMNPQRSTVWXYZ"
};

/**
 * Padding character for Base32 encoding.
 */
const PAD = "=";

/**
 * Build a reverse lookup table for decoding.
 * @param alphabet - The 32-character alphabet string.
 * @param caseInsensitive - Whether to add lowercase mappings.
 * @returns Map of character to index.
 */
function buildDecodeTable(alphabet: string, caseInsensitive = true): Map<string, number> {
    const table = new Map<string, number>();
    for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
        if (char !== undefined) {
            table.set(char, i);
            if (caseInsensitive) {
                table.set(char.toLowerCase(), i);
            }
        }
    }
    return table;
}

/**
 * Pre-built decode tables for each charset.
 */
const DECODE_TABLES: Record<Base32CharsetType, Map<string, number>> = {
    rfc4648: buildDecodeTable(CHARSETS.rfc4648),
    hex: buildDecodeTable(CHARSETS.hex),
    crockford: buildDecodeTable(CHARSETS.crockford)
};

/**
 * Encode a string to Base32.
 *
 * @example
 * ```typescript
 * import { encode32 } from "./base32.js";
 *
 * encode32("Hello");
 * // => "JBSWY3DP"
 *
 * encode32("test", "hex");
 * // => "EHMP6SS="
 * ```
 *
 * @param input - The string to encode.
 * @param charset - The charset variant to use (default: "rfc4648").
 * @returns The Base32 encoded string.
 */
function encode32(input: string, charset: Base32CharsetType = "rfc4648"): string {
    if (input === "") {
        return "";
    }

    const alphabet = CHARSETS[charset];
    const bytes = new TextEncoder().encode(input);
    let result = "";
    let buffer = 0;
    let bitsInBuffer = 0;

    for (const byte of bytes) {
        buffer = (buffer << 8) | byte;
        bitsInBuffer += 8;

        while (bitsInBuffer >= 5) {
            bitsInBuffer -= 5;
            const index = (buffer >> bitsInBuffer) & 0x1f;
            result += alphabet[index];
        }
    }

    // Handle remaining bits
    if (bitsInBuffer > 0) {
        const index = (buffer << (5 - bitsInBuffer)) & 0x1f;
        result += alphabet[index];
    }

    // Add padding to make length a multiple of 8
    while (result.length % 8 !== 0) {
        result += PAD;
    }

    return result;
}

/**
 * Decode a Base32 string.
 *
 * @example
 * ```typescript
 * import { decode32 } from "./base32.js";
 *
 * decode32("JBSWY3DP");
 * // => "Hello"
 *
 * decode32("EHMP6SS=", "hex");
 * // => "test"
 * ```
 *
 * @param input - The Base32 encoded string.
 * @param charset - The charset variant to use (default: "rfc4648").
 * @returns The decoded string.
 * @throws Error if the input contains invalid characters.
 */
function decode32(input: string, charset: Base32CharsetType = "rfc4648"): string {
    if (input === "") {
        return "";
    }

    const decodeTable = DECODE_TABLES[charset];

    // Remove padding
    const cleanInput = input.replace(/=+$/, "");
    const bytes: number[] = [];

    let buffer = 0;
    let bitsInBuffer = 0;

    for (const char of cleanInput) {
        const value = decodeTable.get(char);
        if (value === undefined) {
            throw new Error(`Invalid Base32 character: ${char}`);
        }

        buffer = (buffer << 5) | value;
        bitsInBuffer += 5;

        if (bitsInBuffer >= 8) {
            bitsInBuffer -= 8;
            bytes.push((buffer >> bitsInBuffer) & 0xff);
        }
    }

    return new TextDecoder().decode(new Uint8Array(bytes));
}

export { encode32, decode32, Base32Charset };
export type { Base32CharsetType };
