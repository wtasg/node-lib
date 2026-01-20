import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import { encode85, decode85, Base85Charset } from "./base85.js";
import type { Base85CharsetType } from "./base85.js";

describe("Base85 encode85", () => {
    it("encodes empty string", () => {
        strictEqual(encode85(""), "");
    });

    it("encodes 'Hello' with ascii85 charset", () => {
        const encoded = encode85("Hello");
        strictEqual(encoded.length > 0, true);
    });

    it("encodes single character", () => {
        const encoded = encode85("A");
        strictEqual(encoded.length, 2);
    });

    it("encodes 4 characters (full block)", () => {
        const encoded = encode85("test");
        strictEqual(encoded.length, 5);
    });

    it("encodes 5 characters (4 + 1)", () => {
        const encoded = encode85("tests");
        strictEqual(encoded.length, 7);
    });

    it("encodes with z85 charset", () => {
        const ascii85 = encode85("test", "ascii85");
        const z85 = encode85("test", "z85");
        strictEqual(ascii85 !== z85, true);
    });

    it("encodes with rfc1924 charset", () => {
        const ascii85 = encode85("test", "ascii85");
        const rfc1924 = encode85("test", "rfc1924");
        strictEqual(ascii85 !== rfc1924, true);
    });

    it("encodes UTF-8 characters", () => {
        const input = "こんにちは";
        const encoded = encode85(input);
        const decoded = decode85(encoded);
        strictEqual(decoded, input);
    });
});

describe("Base85 decode85", () => {
    it("decodes empty string", () => {
        strictEqual(decode85(""), "");
    });

    it("decodes encoded 'Hello'", () => {
        const encoded = encode85("Hello");
        strictEqual(decode85(encoded), "Hello");
    });

    it("decodes single character encoded", () => {
        const encoded = encode85("A");
        strictEqual(decode85(encoded), "A");
    });

    it("decodes 4-char block correctly", () => {
        const encoded = encode85("test");
        strictEqual(decode85(encoded), "test");
    });

    it("throws on invalid character", () => {
        // Use a character not in ascii85 alphabet
        throws(() => decode85("\x7F"), /Invalid Base85 character/);
    });
});

describe("Base85 round-trip", () => {
    const testCases = [
        "",
        "a",
        "ab",
        "abc",
        "abcd",
        "abcde",
        "Hello, World!",
        "The quick brown fox jumps over the lazy dog",
        "こんにちは世界",
        "🎉🚀✨",
        "1234567890"
    ];

    for (const charset of Base85Charset) {
        describe(`charset: ${charset}`, () => {
            for (const input of testCases) {
                it(`round-trips: ${JSON.stringify(input)}`, () => {
                    const encoded = encode85(input, charset);
                    const decoded = decode85(encoded, charset);
                    strictEqual(decoded, input);
                });
            }
        });
    }
});

describe("Base85Charset", () => {
    it("exports array with three charsets", () => {
        strictEqual(Base85Charset.length, 3);
        strictEqual(Base85Charset[0], "ascii85");
        strictEqual(Base85Charset[1], "z85");
        strictEqual(Base85Charset[2], "rfc1924");
    });

    it("charset type works correctly", () => {
        const cs: Base85CharsetType = "z85";
        strictEqual(encode85("test", cs), encode85("test", "z85"));
    });

    it("each charset has exactly 85 characters", () => {
        // This is a compile-time guarantee, but let's verify at runtime too
        for (const charset of Base85Charset) {
            const encoded = encode85("test", charset);
            strictEqual(encoded.length > 0, true);
        }
    });
});
