import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import { encode58, decode58, Base58Charset } from "./base58.js";
import type { Base58CharsetType } from "./base58.js";

describe("Base58 encode58", () => {
    it("encodes empty string", () => {
        strictEqual(encode58(""), "");
    });

    it("encodes 'Hello World' with bitcoin charset", () => {
        strictEqual(encode58("Hello World"), "JxF12TrwUP45BMd");
    });

    it("encodes single character", () => {
        // Verify round-trip rather than hardcoded value
        const encoded = encode58("A");
        strictEqual(encoded.length > 0, true);
        strictEqual(decode58(encoded), "A");
    });

    it("encodes 'abc'", () => {
        strictEqual(encode58("abc"), "ZiCa");
    });

    it("encodes with flickr charset", () => {
        const bitcoin = encode58("Hello World", "bitcoin");
        const flickr = encode58("Hello World", "flickr");
        // Flickr swaps case
        strictEqual(bitcoin !== flickr, true);
    });

    it("encodes with ripple charset", () => {
        const bitcoin = encode58("Hello World", "bitcoin");
        const ripple = encode58("Hello World", "ripple");
        strictEqual(bitcoin !== ripple, true);
    });

    it("encodes UTF-8 characters", () => {
        const input = "こんにちは";
        const encoded = encode58(input);
        const decoded = decode58(encoded);
        strictEqual(decoded, input);
    });

    it("preserves leading zero bytes", () => {
        const input = "\x00\x00Hello";
        const encoded = encode58(input);
        const decoded = decode58(encoded);
        strictEqual(decoded, input);
    });
});

describe("Base58 decode58", () => {
    it("decodes empty string", () => {
        strictEqual(decode58(""), "");
    });

    it("decodes 'JxF12TrwUP45BMd' to 'Hello World'", () => {
        strictEqual(decode58("JxF12TrwUP45BMd"), "Hello World");
    });

    it("decodes single character", () => {
        const encoded = encode58("A");
        strictEqual(decode58(encoded), "A");
    });

    it("decodes 'ZiCa' to 'abc'", () => {
        strictEqual(decode58("ZiCa"), "abc");
    });

    it("throws on invalid character (0)", () => {
        throws(() => decode58("0invalid"), /Invalid Base58 character/);
    });

    it("throws on invalid character (O)", () => {
        throws(() => decode58("OOO"), /Invalid Base58 character/);
    });

    it("throws on invalid character (I)", () => {
        throws(() => decode58("III"), /Invalid Base58 character/);
    });

    it("throws on invalid character (l)", () => {
        throws(() => decode58("lll"), /Invalid Base58 character/);
    });
});

describe("Base58 round-trip", () => {
    const testCases = [
        "",
        "a",
        "ab",
        "abc",
        "abcd",
        "Hello, World!",
        "The quick brown fox jumps over the lazy dog",
        "こんにちは世界",
        "🎉🚀✨",
        "\x00\x00\x00abc"
    ];

    for (const charset of Base58Charset) {
        describe(`charset: ${charset}`, () => {
            for (const input of testCases) {
                it(`round-trips: ${JSON.stringify(input)}`, () => {
                    const encoded = encode58(input, charset);
                    const decoded = decode58(encoded, charset);
                    strictEqual(decoded, input);
                });
            }
        });
    }
});

describe("Base58Charset", () => {
    it("exports array with three charsets", () => {
        strictEqual(Base58Charset.length, 3);
        strictEqual(Base58Charset[0], "bitcoin");
        strictEqual(Base58Charset[1], "flickr");
        strictEqual(Base58Charset[2], "ripple");
    });

    it("charset type works correctly", () => {
        const cs: Base58CharsetType = "flickr";
        strictEqual(encode58("test", cs), encode58("test", "flickr"));
    });
});
