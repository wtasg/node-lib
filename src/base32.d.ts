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
declare const Base32Charset: readonly ["rfc4648", "hex", "crockford"];
/**
 * Base32 charset type.
 */
type Base32CharsetType = (typeof Base32Charset)[number];
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
declare function encode32(input: string, charset?: Base32CharsetType): string;
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
declare function decode32(input: string, charset?: Base32CharsetType): string;
export { encode32, decode32, Base32Charset };
export type { Base32CharsetType };
//# sourceMappingURL=base32.d.ts.map