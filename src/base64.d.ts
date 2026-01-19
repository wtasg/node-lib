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
declare const Base64Charset: readonly ["standard", "urlsafe", "imap", "radix64"];
/**
 * Base64 charset type.
 */
type Base64CharsetType = (typeof Base64Charset)[number];
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
declare function encode(input: string, charset?: Base64CharsetType): string;
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
declare function decode(input: string, charset?: Base64CharsetType): string;
export { encode, decode, Base64Charset };
export type { Base64CharsetType };
//# sourceMappingURL=base64.d.ts.map