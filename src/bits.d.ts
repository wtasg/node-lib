/**
 * Count set bits in an unsigned 32-bit representation of a number.
 *
 * @param {number} value - Number interpreted as uint32.
 * @returns {number} Number of set bits (0-32).
 */
declare function popcount32(value: number): number;
/**
 * Count set bits in the low 64 bits of a number or bigint.
 *
 * @param {number | bigint} value - Input value. For `number`, it must be a non-negative safe integer.
 * @returns {number} Number of set bits (0-64).
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 */
declare function popcount64(value: number | bigint): number;
/**
 * Count set bits in a non-negative integer.
 *
 * @param {number | bigint} value - Input value.
 * @returns {number} Number of set bits.
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 */
declare function countOnes(value: number | bigint): number;
/**
 * Count zero bits within a fixed width, considering only low-order `width` bits.
 *
 * @param {number | bigint} value - Input value.
 * @param {number} width - Bit width to inspect.
 * @returns {number} Number of zero bits in the selected width.
 * @throws {RangeError} If `value` is negative/unsafe or `width` is negative/unsafe.
 */
declare function countZeroesWithWidth(value: number | bigint, width: number): number;
/**
 * Count zero bits from LSB up to and including the highest set bit.
 * For zero input, returns 0.
 *
 * @param {number | bigint} value - Input value.
 * @returns {number} Zero count up to the left-most set bit.
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 */
declare function countZeroes(value: number | bigint): number;
export { popcount32, popcount64, countOnes, countZeroesWithWidth, countZeroes };
//# sourceMappingURL=bits.d.ts.map