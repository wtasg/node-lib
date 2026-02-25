import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import {
    popcount32,
    popcount64,
    countOnes,
    countZeroesWithWidth,
    countZeroes
} from "./bits.js";

describe("popcount32", () => {
    it("counts set bits for simple values", () => {
        strictEqual(popcount32(0), 0);
        strictEqual(popcount32(1), 1);
        strictEqual(popcount32(0b10110100), 4);
    });

    it("uses uint32 semantics", () => {
        strictEqual(popcount32(-1), 32);
        strictEqual(popcount32(0xffffffff), 32);
    });
});

describe("popcount64", () => {
    it("counts set bits for bigint values", () => {
        strictEqual(popcount64(0n), 0);
        strictEqual(popcount64((1n << 64n) - 1n), 64);
        strictEqual(popcount64(0b101001n), 3);
    });

    it("counts only low 64 bits", () => {
        const value = (1n << 65n) | 1n;
        strictEqual(popcount64(value), 1);
    });

    it("throws for invalid number input", () => {
        throws(() => popcount64(-1), /must be a non-negative safe integer/);
        throws(() => popcount64(Number.MAX_SAFE_INTEGER + 1), /must be a non-negative safe integer/);
    });
});

describe("countOnes", () => {
    it("counts set bits for number and bigint", () => {
        strictEqual(countOnes(0), 0);
        strictEqual(countOnes(255), 8);
        strictEqual(countOnes(0b10000000000000001n), 2);
    });
});

describe("countZeroesWithWidth", () => {
    it("counts zero bits for a chosen width", () => {
        strictEqual(countZeroesWithWidth(0b10100, 5), 3);
        strictEqual(countZeroesWithWidth(0b10100, 8), 6);
        strictEqual(countZeroesWithWidth(0, 8), 8);
        strictEqual(countZeroesWithWidth(123, 0), 0);
    });

    it("throws for invalid width", () => {
        throws(() => countZeroesWithWidth(1, -1), /width must be a non-negative safe integer/);
        throws(() => countZeroesWithWidth(1, Number.MAX_SAFE_INTEGER + 1), /width must be a non-negative safe integer/);
    });
});

describe("countZeroes", () => {
    it("counts zero bits only up to highest set bit", () => {
        strictEqual(countZeroes(0), 0);
        strictEqual(countZeroes(1), 0);
        strictEqual(countZeroes(0b10100), 3);
        strictEqual(countZeroes(0b1000), 3);
        strictEqual(countZeroes(0b1111), 0);
    });

    it("throws for invalid inputs", () => {
        throws(() => countZeroes(-1), /must be a non-negative safe integer/);
        throws(() => countOnes(-1n), /must be non-negative/);
    });
});
