/**
 * Simple non-cryptographic string hashing.
 *
 * **Not suitable for security purposes.** Use only for hash maps, checksums,
 * or other non-security-critical applications.
 *
 * @module hash
 */
/**
 * Convert a string to a string of its ASCII character codes.
 *
 * @param input - The string to convert.
 * @returns A string of concatenated character codes.
 *
 * @example
 * ```ts
 * getAscii("AB"); // "6566"
 * ```
 */
declare function getAscii(input: string): string;
/**
 * Compute a simple non-cryptographic hash of a string value.
 *
 * The algorithm converts the input to its ASCII-code string representation,
 * pads it to `size` characters using `salt`, then reduces it to a single
 * numeric hash via a weighted sum of character codes.
 *
 * @param input - The value to hash (converted to string).
 * @param salt - Padding string (defaults to lowercase alphabet).
 * @param size - Target length for the padded intermediate string (defaults to 26).
 * @returns A numeric hash value.
 *
 * @example
 * ```ts
 * hashString("hello"); // deterministic numeric result
 * hashString("hello", "xyz", 10);
 * ```
 */
declare function hashString(input: unknown, salt?: string, size?: number): number;
export { hashString, getAscii, };
//# sourceMappingURL=hash.d.ts.map