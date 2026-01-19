import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import { encode, decode, Base64Charset } from "./base64.js";
import type { Base64CharsetType } from "./base64.js";

describe("Base64 encode", () => {
    it("encodes empty string", () => {
        strictEqual(encode(""), "");
    });

    it("encodes 'Hello, World!' with standard charset", () => {
        strictEqual(encode("Hello, World!"), "SGVsbG8sIFdvcmxkIQ==");
    });

    it("encodes single character", () => {
        strictEqual(encode("A"), "QQ==");
    });

    it("encodes two characters (padding test)", () => {
        strictEqual(encode("AB"), "QUI=");
    });

    it("encodes three characters (no padding)", () => {
        strictEqual(encode("ABC"), "QUJD");
    });

    it("encodes with urlsafe charset", () => {
        // Bytes that produce +/ in standard: 0xfb, 0xef, 0xbe -> ++/+
        const input = "\xfb\xef\xbe";
        const standard = encode(input, "standard");
        const urlsafe = encode(input, "urlsafe");
        // standard uses + and /, urlsafe uses - and _
        strictEqual(standard.includes("+") || standard.includes("/"), true);
        strictEqual(urlsafe.includes("+"), false);
        strictEqual(urlsafe.includes("/"), false);
    });

    it("encodes with imap charset", () => {
        // imap uses , instead of /
        const input = "\xff\xff";
        const standard = encode(input, "standard");
        const imap = encode(input, "imap");
        strictEqual(imap.includes(",") || !imap.includes("/"), true);
        strictEqual(standard !== imap || !standard.includes("/"), true);
    });

    it("encodes UTF-8 characters", () => {
        const input = "こんにちは";
        const encoded = encode(input);
        const decoded = decode(encoded);
        strictEqual(decoded, input);
    });
});

describe("Base64 decode", () => {
    it("decodes empty string", () => {
        strictEqual(decode(""), "");
    });

    it("decodes 'SGVsbG8sIFdvcmxkIQ==' to 'Hello, World!'", () => {
        strictEqual(decode("SGVsbG8sIFdvcmxkIQ=="), "Hello, World!");
    });

    it("decodes single character padded", () => {
        strictEqual(decode("QQ=="), "A");
    });

    it("decodes two characters padded", () => {
        strictEqual(decode("QUI="), "AB");
    });

    it("decodes three characters (no padding)", () => {
        strictEqual(decode("QUJD"), "ABC");
    });

    it("throws on invalid character", () => {
        throws(() => decode("!!!"), /Invalid Base64 character/);
    });

    it("decodes without padding characters", () => {
        strictEqual(decode("SGVsbG8sIFdvcmxkIQ"), "Hello, World!");
    });
});

describe("Base64 round-trip", () => {
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
        "\x00\x01\x02\xff"
    ];

    for (const charset of Base64Charset) {
        describe(`charset: ${charset}`, () => {
            for (const input of testCases) {
                it(`round-trips: ${JSON.stringify(input)}`, () => {
                    const encoded = encode(input, charset);
                    const decoded = decode(encoded, charset);
                    strictEqual(decoded, input);
                });
            }
        });
    }
});

describe("Base64Charset", () => {
    it("exports array with four charsets", () => {
        strictEqual(Base64Charset.length, 4);
        strictEqual(Base64Charset[0], "standard");
        strictEqual(Base64Charset[1], "urlsafe");
        strictEqual(Base64Charset[2], "imap");
        strictEqual(Base64Charset[3], "radix64");
    });

    it("charset type works correctly", () => {
        const cs: Base64CharsetType = "urlsafe";
        strictEqual(encode("test", cs), encode("test", "urlsafe"));
    });
});
