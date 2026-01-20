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
declare const Base85Charset: readonly ["ascii85", "z85", "rfc1924"];
/**
 * Base85 charset type.
 */
type Base85CharsetType = (typeof Base85Charset)[number];
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
declare function encode85(input: string, charset?: Base85CharsetType): string;
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
declare function decode85(input: string, charset?: Base85CharsetType): string;
export { encode85, decode85, Base85Charset };
export type { Base85CharsetType };
//# sourceMappingURL=base85.d.ts.map