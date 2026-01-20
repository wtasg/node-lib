import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import { encode32, decode32, Base32Charset } from "./base32.js";
describe("Base32 encode32", () => {
    it("encodes empty string", () => {
        strictEqual(encode32(""), "");
    });
    it("encodes 'Hello' with rfc4648 charset", () => {
        strictEqual(encode32("Hello"), "JBSWY3DP");
    });
    it("encodes single character", () => {
        strictEqual(encode32("A"), "IE======");
    });
    it("encodes two characters", () => {
        strictEqual(encode32("AB"), "IFBA====");
    });
    it("encodes 'test'", () => {
        strictEqual(encode32("test"), "ORSXG5A=");
    });
    it("encodes with hex charset", () => {
        const rfc4648 = encode32("test", "rfc4648");
        const hex = encode32("test", "hex");
        strictEqual(rfc4648 !== hex, true);
    });
    it("encodes with crockford charset", () => {
        const rfc4648 = encode32("test", "rfc4648");
        const crockford = encode32("test", "crockford");
        strictEqual(rfc4648 !== crockford, true);
    });
    it("encodes UTF-8 characters", () => {
        const input = "こんにちは";
        const encoded = encode32(input);
        const decoded = decode32(encoded);
        strictEqual(decoded, input);
    });
});
describe("Base32 decode32", () => {
    it("decodes empty string", () => {
        strictEqual(decode32(""), "");
    });
    it("decodes 'JBSWY3DP' to 'Hello'", () => {
        strictEqual(decode32("JBSWY3DP"), "Hello");
    });
    it("decodes single character with padding", () => {
        strictEqual(decode32("IE======"), "A");
    });
    it("decodes 'ORSXG5A=' to 'test'", () => {
        strictEqual(decode32("ORSXG5A="), "test");
    });
    it("decodes without padding", () => {
        strictEqual(decode32("JBSWY3DP"), "Hello");
    });
    it("decodes lowercase (case-insensitive)", () => {
        strictEqual(decode32("jbswy3dp"), "Hello");
    });
    it("decodes mixed case", () => {
        strictEqual(decode32("JbSwY3Dp"), "Hello");
    });
    it("throws on invalid character", () => {
        throws(() => decode32("!!!"), /Invalid Base32 character/);
    });
});
describe("Base32 round-trip", () => {
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
    for (const charset of Base32Charset) {
        describe(`charset: ${charset}`, () => {
            for (const input of testCases) {
                it(`round-trips: ${JSON.stringify(input)}`, () => {
                    const encoded = encode32(input, charset);
                    const decoded = decode32(encoded, charset);
                    strictEqual(decoded, input);
                });
            }
        });
    }
});
describe("Base32Charset", () => {
    it("exports array with three charsets", () => {
        strictEqual(Base32Charset.length, 3);
        strictEqual(Base32Charset[0], "rfc4648");
        strictEqual(Base32Charset[1], "hex");
        strictEqual(Base32Charset[2], "crockford");
    });
    it("charset type works correctly", () => {
        const cs = "hex";
        strictEqual(encode32("test", cs), encode32("test", "hex"));
    });
});
describe("Base32 RFC 4648 test vectors", () => {
    // Test vectors from RFC 4648
    const vectors = [
        ["", ""],
        ["f", "MY======"],
        ["fo", "MZXQ===="],
        ["foo", "MZXW6==="],
        ["foob", "MZXW6YQ="],
        ["fooba", "MZXW6YTB"],
        ["foobar", "MZXW6YTBOI======"]
    ];
    for (const [input, expected] of vectors) {
        it(`encodes "${input}" to "${expected}"`, () => {
            strictEqual(encode32(input), expected);
        });
        it(`decodes "${expected}" to "${input}"`, () => {
            strictEqual(decode32(expected), input);
        });
    }
});
//# sourceMappingURL=base32.test.js.map