/**
 * Base85 encoding/decoding with multiple charset variants.
 * Base85 provides ~25% better efficiency than Base64 (4:5 vs 3:4 ratio).
 * @module base85
 */

/**
 * Available Base85 charset variants.
 * - `ascii85`: Adobe Ascii85 (btoa format)
 * - `z85`: ZeroMQ Base85 (no quotes or backslash)
 * - `rfc1924`: RFC 1924 IPv6 encoding
 */
const Base85Charset = ["ascii85", "z85", "rfc1924"] as const;

/**
 * Base85 charset type.
 */
type Base85CharsetType = (typeof Base85Charset)[number];

/**
 * Charset alphabets for Base85 variants.
 * Each has exactly 85 printable ASCII characters.
 */
const CHARSETS: Record<Base85CharsetType, string> = {
    ascii85: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu",
    z85: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#",
    rfc1924: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~"
};

/**
 * Build a reverse lookup table for decoding.
 * @param alphabet - The 85-character alphabet string.
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
const DECODE_TABLES: Record<Base85CharsetType, Map<string, number>> = {
    ascii85: buildDecodeTable(CHARSETS.ascii85),
    z85: buildDecodeTable(CHARSETS.z85),
    rfc1924: buildDecodeTable(CHARSETS.rfc1924)
};

/**
 * Encode a string to Base85.
 *
 * @example
 * ```typescript
 * import { encode85 } from "./base85.js";
 *
 * encode85("Hello");
 * // => "87cURDZ"
 *
 * encode85("test", "z85");
 * // => "wrx.P"
 * ```
 *
 * @param input - The string to encode.
 * @param charset - The charset variant to use (default: "ascii85").
 * @returns The Base85 encoded string.
 */
function encode85(input: string, charset: Base85CharsetType = "ascii85"): string {
    if (input === "") {
        return "";
    }

    const alphabet = CHARSETS[charset];
    const bytes = new TextEncoder().encode(input);
    let result = "";

    // Process 4 bytes at a time
    for (let i = 0; i < bytes.length; i += 4) {
        const chunkSize = Math.min(4, bytes.length - i);

        // Pack up to 4 bytes into a value using multiplication to avoid
        // 32-bit signed integer overflow from bitwise operations
        let value = 0;
        for (let j = 0; j < chunkSize; j++) {
            value = value * 256 + (bytes[i + j] ?? 0);
        }
        // Pad with zeros for incomplete chunks
        for (let j = chunkSize; j < 4; j++) {
            value = value * 256;
        }

        // Convert to 5 base-85 digits
        const encoded: string[] = [];
        for (let j = 0; j < 5; j++) {
            encoded.unshift(alphabet[value % 85] ?? "");
            value = Math.floor(value / 85);
        }

        // For the last chunk, only output as many characters as needed
        // (chunkSize bytes -> chunkSize + 1 characters)
        if (i + 4 > bytes.length) {
            result += encoded.slice(0, chunkSize + 1).join("");
        } else {
            result += encoded.join("");
        }
    }

    return result;
}

/**
 * Decode a Base85 string.
 *
 * @example
 * ```typescript
 * import { decode85 } from "./base85.js";
 *
 * decode85("87cURDZ");
 * // => "Hello"
 *
 * decode85("wrx.P", "z85");
 * // => "test"
 * ```
 *
 * @param input - The Base85 encoded string.
 * @param charset - The charset variant to use (default: "ascii85").
 * @returns The decoded string.
 * @throws Error if the input contains invalid characters.
 */
function decode85(input: string, charset: Base85CharsetType = "ascii85"): string {
    if (input === "") {
        return "";
    }

    const decodeTable = DECODE_TABLES[charset];
    const bytes: number[] = [];
    const inputLen = input.length;

    // Calculate expected output length
    // Full groups of 5 chars -> 4 bytes each
    // Partial group: n chars -> n-1 bytes
    const fullGroups = Math.floor(inputLen / 5);
    const remainder = inputLen % 5;
    const totalBytes = fullGroups * 4 + (remainder > 0 ? remainder - 1 : 0);

    // Process 5 characters at a time
    let byteCount = 0;
    for (let i = 0; i < inputLen; i += 5) {
        const chunkSize = Math.min(5, inputLen - i);

        // Decode up to 5 characters into a 32-bit value
        let value = 0;
        for (let j = 0; j < chunkSize; j++) {
            const char = input[i + j];
            if (char === undefined) {
                break;
            }
            const digit = decodeTable.get(char);
            if (digit === undefined) {
                throw new Error(`Invalid Base85 character: ${char}`);
            }
            value = value * 85 + digit;
        }

        // Pad with 84 (highest digit) for incomplete chunks
        for (let j = chunkSize; j < 5; j++) {
            value = value * 85 + 84;
        }

        // Calculate how many bytes this chunk should produce
        const bytesToExtract = chunkSize === 5 ? 4 : chunkSize - 1;

        // Extract bytes from high to low
        const extracted: number[] = [];
        for (let j = 0; j < 4; j++) {
            extracted.unshift(value & 0xff);
            value = value >>> 8;
        }

        // Only push the bytes we need
        for (let j = 0; j < bytesToExtract && byteCount < totalBytes; j++) {
            const byte = extracted[j];
            if (byte !== undefined) {
                bytes.push(byte);
                byteCount++;
            }
        }
    }

    return new TextDecoder().decode(new Uint8Array(bytes));
}

export { encode85, decode85, Base85Charset };
export type { Base85CharsetType };
