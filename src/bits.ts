const UINT64_MASK = (1n << 64n) - 1n;

/**
 *
 * @param {number | bigint} value
 * @param {string} fnName
 * @returns {bigint}
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 * @example
 * toNonNegativeBigInt(42, "exampleFunction"); // returns 42n
 * toNonNegativeBigInt(-1, "exampleFunction"); // throws RangeError
 */
function toNonNegativeBigInt(value: number | bigint, fnName: string): bigint {
    if (typeof value === "bigint") {
        if (value < 0n) {
            throw new RangeError(`${fnName}: value must be non-negative`);
        }
        return value;
    }

    if (!Number.isSafeInteger(value) || value < 0) {
        throw new RangeError(`${fnName}: value must be a non-negative safe integer`);
    }

    return BigInt(value);
}

/**
 * Count set bits in a bigint.
 *
 * @param {bigint} value - Input value.
 * @returns {number} Number of set bits.
 * @example
 * popcountBigInt(0b1011n); // returns 3
 */
function popcountBigInt(value: bigint): number {
    let count = 0;
    let bits = value;
    while (bits !== 0n) {
        bits &= bits - 1n;
        count += 1;
    }
    return count;
}

/**
 * Count set bits in an unsigned 32-bit representation of a number.
 *
 * @param {number} value - Number interpreted as uint32.
 * @returns {number} Number of set bits (0-32).
 */
function popcount32(value: number): number {
    let bits = value >>> 0;
    bits -= (bits >>> 1) & 0x55555555;
    bits = (bits & 0x33333333) + ((bits >>> 2) & 0x33333333);
    bits = (bits + (bits >>> 4)) & 0x0f0f0f0f;
    bits += bits >>> 8;
    bits += bits >>> 16;
    return bits & 0x3f;
}

/**
 * Count set bits in the low 64 bits of a number or bigint.
 *
 * @param {number | bigint} value - Input value. For `number`, it must be a non-negative safe integer.
 * @returns {number} Number of set bits (0-64).
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 */
function popcount64(value: number | bigint): number {
    const bits64 = toNonNegativeBigInt(value, "popcount64") & UINT64_MASK;
    return popcountBigInt(bits64);
}

/**
 * Count set bits in a non-negative integer.
 *
 * @param {number | bigint} value - Input value.
 * @returns {number} Number of set bits.
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 */
function countOnes(value: number | bigint): number {
    const bits = toNonNegativeBigInt(value, "countOnes");
    return popcountBigInt(bits);
}

/**
 * Count zero bits within a fixed width, considering only low-order `width` bits.
 *
 * @param {number | bigint} value - Input value.
 * @param {number} width - Bit width to inspect.
 * @returns {number} Number of zero bits in the selected width.
 * @throws {RangeError} If `value` is negative/unsafe or `width` is negative/unsafe.
 */
function countZeroesWithWidth(value: number | bigint, width: number): number {
    if (!Number.isSafeInteger(width) || width < 0) {
        throw new RangeError("countZeroesWithWidth: width must be a non-negative safe integer");
    }

    if (width === 0) {
        return 0;
    }

    const bits = toNonNegativeBigInt(value, "countZeroesWithWidth");
    const widthBigInt = BigInt(width);
    const mask = (1n << widthBigInt) - 1n;
    const ones = popcountBigInt(bits & mask);
    return width - ones;
}

/**
 * Count zero bits from LSB up to and including the highest set bit.
 * For zero input, returns 0.
 *
 * @param {number | bigint} value - Input value.
 * @returns {number} Zero count up to the left-most set bit.
 * @throws {RangeError} If `value` is negative or an unsafe integer.
 */
function countZeroes(value: number | bigint): number {
    const bits = toNonNegativeBigInt(value, "countZeroes");
    if (bits === 0n) {
        return 0;
    }

    const width = bits.toString(2).length;
    const ones = popcountBigInt(bits);
    return width - ones;
}

export {
    popcount32,
    popcount64,
    countOnes,
    countZeroesWithWidth,
    countZeroes
};
