import { describe, it } from "node:test";
import { strictEqual, ok } from "node:assert";
import { brailleEncode, brailleDecode, brailleEncodeChar, brailleDecodeChar, brailleEncodeCharCode, brailleDecodeCharCode, isBraille, isAscii, ASCII_ALPHABET, BRAILLE_ALPHABET, ASCII_MAP, BRAILLE_MAP, ALPHABET_MAP, } from "./braille.js";
describe("brailleEncodeChar / brailleDecodeChar", () => {
    it("encodes a printable ASCII character", () => {
        const encoded = brailleEncodeChar("A");
        strictEqual(encoded, String.fromCharCode(0x41 + 0x2800));
    });
    it("decodes back to original", () => {
        const encoded = brailleEncodeChar("A");
        strictEqual(brailleDecodeChar(encoded), "A");
    });
    it("passes through non-ASCII characters unchanged", () => {
        strictEqual(brailleEncodeChar("€"), "€");
        strictEqual(brailleDecodeChar("€"), "€");
    });
});
describe("brailleEncode / brailleDecode", () => {
    it("roundtrips a simple string", () => {
        const original = "Hello, World!";
        const encoded = brailleEncode(original);
        strictEqual(brailleDecode(encoded), original);
    });
    it("roundtrips with a separator", () => {
        const original = "Hi";
        const encoded = brailleEncode(original, "-");
        ok(encoded.includes("-"));
        strictEqual(brailleDecode(encoded, "-"), "H-i");
    });
    it("encodes space character (code 32)", () => {
        const encoded = brailleEncode(" ");
        strictEqual(encoded, String.fromCharCode(0x2800 + 32));
    });
    it("handles empty string", () => {
        strictEqual(brailleEncode(""), "");
        strictEqual(brailleDecode(""), "");
    });
});
describe("brailleEncodeCharCode / brailleDecodeCharCode", () => {
    it("encodes printable ASCII code 65 (A)", () => {
        strictEqual(brailleEncodeCharCode(65), String.fromCharCode(65 + 0x2800));
    });
    it("returns undefined for code below 32", () => {
        strictEqual(brailleEncodeCharCode(10), undefined);
    });
    it("returns undefined for code above 127", () => {
        strictEqual(brailleEncodeCharCode(200), undefined);
    });
    it("decodes braille code back to ASCII character", () => {
        strictEqual(brailleDecodeCharCode(0x2800 + 65), "A");
    });
    it("returns undefined for non-braille code", () => {
        strictEqual(brailleDecodeCharCode(50), undefined);
    });
});
describe("isBraille", () => {
    it("returns true for braille character", () => {
        strictEqual(isBraille(brailleEncodeChar("A")), true);
    });
    it("returns false for regular ASCII", () => {
        strictEqual(isBraille("A"), false);
    });
});
describe("isAscii", () => {
    it("returns true for codes 32–127", () => {
        strictEqual(isAscii(32), true);
        strictEqual(isAscii(65), true);
        strictEqual(isAscii(127), true);
    });
    it("returns false for codes outside range", () => {
        strictEqual(isAscii(31), false);
        strictEqual(isAscii(128), false);
    });
});
describe("ASCII_ALPHABET", () => {
    it("contains 52 letters (a-z + A-Z)", () => {
        strictEqual(ASCII_ALPHABET.length, 52);
        strictEqual(ASCII_ALPHABET, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
});
describe("BRAILLE_ALPHABET", () => {
    it("has same length as ASCII_ALPHABET", () => {
        strictEqual(BRAILLE_ALPHABET.length, ASCII_ALPHABET.length);
    });
    it("decodes back to ASCII_ALPHABET", () => {
        strictEqual(brailleDecode(BRAILLE_ALPHABET), ASCII_ALPHABET);
    });
});
describe("ASCII_MAP", () => {
    it("has 96 entries (codes 32–127)", () => {
        strictEqual(ASCII_MAP.length, 96);
    });
    it("first entry is code 32 (space)", () => {
        strictEqual(ASCII_MAP[0]?.code, 32);
        strictEqual(ASCII_MAP[0]?.ascii, " ");
    });
    it("last entry is code 127 (DEL)", () => {
        strictEqual(ASCII_MAP[ASCII_MAP.length - 1]?.code, 127);
    });
    it("braille field roundtrips through decode", () => {
        const entry = ASCII_MAP[33]; // code 65, 'A'
        ok(entry !== undefined);
        strictEqual(brailleDecodeChar(entry.braille), entry.ascii);
    });
});
describe("BRAILLE_MAP", () => {
    it("has 96 entries", () => {
        strictEqual(BRAILLE_MAP.length, 96);
    });
    it("first entry maps to space", () => {
        strictEqual(BRAILLE_MAP[0]?.ascii, " ");
    });
    it("ascii field matches decoding the braille field", () => {
        const entry = BRAILLE_MAP[33]; // 'A'
        ok(entry !== undefined);
        strictEqual(brailleDecodeChar(entry.braille), entry.ascii);
    });
});
describe("ALPHABET_MAP", () => {
    it("has 52 entries", () => {
        strictEqual(ALPHABET_MAP.length, 52);
    });
    it("first entry is 'a'", () => {
        strictEqual(ALPHABET_MAP[0]?.ascii, "a");
    });
    it("braille field matches encoding the ascii field", () => {
        for (const entry of ALPHABET_MAP) {
            strictEqual(brailleEncodeChar(entry.ascii), entry.braille);
        }
    });
});
//# sourceMappingURL=braille.test.js.map