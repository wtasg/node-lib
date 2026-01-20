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
declare const Base58Charset: readonly ["bitcoin", "flickr", "ripple"];
/**
 * Base58 charset type.
 */
type Base58CharsetType = (typeof Base58Charset)[number];
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
declare function encode58(input: string, charset?: Base58CharsetType): string;
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
declare function decode58(input: string, charset?: Base58CharsetType): string;
export { encode58, decode58, Base58Charset };
export type { Base58CharsetType };
//# sourceMappingURL=base58.d.ts.map