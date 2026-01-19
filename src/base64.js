/**
 * Base64 encoding/decoding with multiple charset variants.
 * @module base64
 */
/**
 * Available Base64 charset variants.
 * - `standard`: RFC 4648 standard alphabet (A-Z, a-z, 0-9, +, /)
 * - `urlsafe`: URL and filename safe (A-Z, a-z, 0-9, -, _)
 * - `imap`: Modified Base64 for IMAP mailbox names (A-Z, a-z, 0-9, +, ,)
 * - `radix64`: Base64 variant used in OpenPGP (A-Z, a-z, 0-9, +, /)
 */
const Base64Charset = ["standard", "urlsafe", "imap", "radix64"];
/**
 * Charset alphabets for Base64 variants.
 */
const CHARSETS = {
    standard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    urlsafe: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    imap: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+,",
    radix64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
};
/**
 * Padding character for Base64 encoding.
 */
const PAD = "=";
/**
 * Build a reverse lookup table for decoding.
 * @param alphabet - The 64-character alphabet string.
 * @returns Map of character to index.
 */
function buildDecodeTable(alphabet) {
    const table = new Map();
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
const DECODE_TABLES = {
    standard: buildDecodeTable(CHARSETS.standard),
    urlsafe: buildDecodeTable(CHARSETS.urlsafe),
    imap: buildDecodeTable(CHARSETS.imap),
    radix64: buildDecodeTable(CHARSETS.radix64)
};
/**
 * Encode a string to Base64.
 *
 * @example
 * ```typescript
 * import { encode } from "./base64.js";
 *
 * encode("Hello, World!");
 * // => "SGVsbG8sIFdvcmxkIQ=="
 *
 * encode("Hello, World!", "urlsafe");
 * // => "SGVsbG8sIFdvcmxkIQ=="
 * ```
 *
 * @param input - The string to encode.
 * @param charset - The charset variant to use (default: "standard").
 * @returns The Base64 encoded string.
 */
function encode(input, charset = "standard") {
    const alphabet = CHARSETS[charset];
    const bytes = new TextEncoder().encode(input);
    let result = "";
    for (let i = 0; i < bytes.length; i += 3) {
        const b0 = bytes[i] ?? 0;
        const b1 = i + 1 < bytes.length ? (bytes[i + 1] ?? 0) : 0;
        const b2 = i + 2 < bytes.length ? (bytes[i + 2] ?? 0) : 0;
        const triple = (b0 << 16) | (b1 << 8) | b2;
        result += alphabet[(triple >> 18) & 0x3f];
        result += alphabet[(triple >> 12) & 0x3f];
        result += i + 1 < bytes.length ? alphabet[(triple >> 6) & 0x3f] : PAD;
        result += i + 2 < bytes.length ? alphabet[triple & 0x3f] : PAD;
    }
    return result;
}
/**
 * Decode a Base64 string.
 *
 * @example
 * ```typescript
 * import { decode } from "./base64.js";
 *
 * decode("SGVsbG8sIFdvcmxkIQ==");
 * // => "Hello, World!"
 *
 * decode("SGVsbG8sIFdvcmxkIQ==", "standard");
 * // => "Hello, World!"
 * ```
 *
 * @param input - The Base64 encoded string.
 * @param charset - The charset variant to use (default: "standard").
 * @returns The decoded string.
 * @throws Error if the input contains invalid characters.
 */
function decode(input, charset = "standard") {
    const decodeTable = DECODE_TABLES[charset];
    // Remove padding
    const cleanInput = input.replace(/=+$/, "");
    const bytes = [];
    for (let i = 0; i < cleanInput.length; i += 4) {
        const c0 = cleanInput[i];
        const c1 = cleanInput[i + 1];
        const c2 = cleanInput[i + 2];
        const c3 = cleanInput[i + 3];
        if (c0 === undefined) {
            break;
        }
        const v0 = decodeTable.get(c0);
        const v1 = c1 !== undefined ? decodeTable.get(c1) : 0;
        const v2 = c2 !== undefined ? decodeTable.get(c2) : 0;
        const v3 = c3 !== undefined ? decodeTable.get(c3) : 0;
        if (v0 === undefined) {
            throw new Error(`Invalid Base64 character: ${c0}`);
        }
        if (c1 !== undefined && v1 === undefined) {
            throw new Error(`Invalid Base64 character: ${c1}`);
        }
        const triple = ((v0 ?? 0) << 18) | ((v1 ?? 0) << 12) | ((v2 ?? 0) << 6) | (v3 ?? 0);
        bytes.push((triple >> 16) & 0xff);
        if (c2 !== undefined) {
            bytes.push((triple >> 8) & 0xff);
        }
        if (c3 !== undefined) {
            bytes.push(triple & 0xff);
        }
    }
    return new TextDecoder().decode(new Uint8Array(bytes));
}
export { encode, decode, Base64Charset };
//# sourceMappingURL=base64.js.map