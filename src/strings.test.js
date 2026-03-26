import { describe, it } from "node:test";
import { strictEqual, deepStrictEqual, throws, ok } from "node:assert";
import { clone, compare, contains, containsAny, containsFunc, containsRune, count, cut, cutPrefix, cutSuffix, equalFold, fields, fieldsFunc, fieldsFuncSeq, fieldsSeq, hasPrefix, hasSuffix, index, indexAny, indexByte, indexFunc, indexRune, join, lastIndex, lastIndexAny, lastIndexByte, lastIndexFunc, lines, mapString, repeat, replace, replaceAll, split, splitAfter, splitAfterN, splitAfterSeq, splitN, splitSeq, title, toLower, toLowerSpecial, toTitle, toTitleSpecial, toUpper, toUpperSpecial, toValidUTF8, trim, trimFunc, trimLeft, trimLeftFunc, trimPrefix, trimRight, trimRightFunc, trimSpace, trimSuffix, Builder, EOFError, newReader, newReplacer, } from "./strings.js";
describe("clone", () => {
    it("returns a copy of a string", () => {
        strictEqual(clone("hello"), "hello");
        strictEqual(clone(""), "");
    });
});
describe("compare", () => {
    it("returns 0 for equal strings", () => {
        strictEqual(compare("a", "a"), 0);
        strictEqual(compare("", ""), 0);
    });
    it("returns -1 when a < b", () => {
        strictEqual(compare("a", "b"), -1);
        strictEqual(compare("abc", "abd"), -1);
    });
    it("returns 1 when a > b", () => {
        strictEqual(compare("b", "a"), 1);
        strictEqual(compare("z", "a"), 1);
    });
});
describe("contains", () => {
    it("returns true when substr is found", () => {
        ok(contains("seafood", "foo"));
        ok(contains("seafood", ""));
        ok(contains("", ""));
    });
    it("returns false when substr is not found", () => {
        ok(!contains("seafood", "bar"));
    });
    it("returns false when substr is longer than s", () => {
        ok(!contains("foo", "foobar"));
        ok(!contains("", "x"));
    });
});
describe("containsAny", () => {
    it("returns true when any char from chars is found", () => {
        ok(containsAny("failure", "u & i"));
        ok(containsAny("in failure", "s g"));
    });
    it("returns false when no char from chars is found", () => {
        ok(!containsAny("team", "i"));
        ok(!containsAny("foo", ""));
        ok(!containsAny("foo", "xyz"));
        ok(!containsAny("", "abc"));
    });
});
describe("containsFunc", () => {
    it("returns true when any character satisfies the predicate", () => {
        ok(containsFunc("hello", ch => ch === "e"));
        ok(!containsFunc("hello", ch => ch === "z"));
        ok(!containsFunc("", () => true));
    });
    it("returns false for empty string regardless of predicate", () => {
        ok(!containsFunc("", ch => ch.length > 0));
    });
});
describe("containsRune", () => {
    it("returns true when the rune is found", () => {
        ok(containsRune("hello", 104)); // 'h'
        ok(!containsRune("hello", 122)); // 'z'
        ok(!containsRune("hello", -1));
    });
    it("returns false for empty string", () => {
        ok(!containsRune("", 97)); // 'a'
    });
});
describe("count", () => {
    it("counts non-overlapping occurrences", () => {
        strictEqual(count("cheese", "e"), 3);
        strictEqual(count("five", ""), 5);
        strictEqual(count("", ""), 1);
        strictEqual(count("oink oink oink", "oink"), 3);
        strictEqual(count("oink oink oink", "moo"), 0);
    });
    it("returns 0 when substr is longer than s", () => {
        strictEqual(count("abc", "abcd"), 0);
        strictEqual(count("", "foo"), 0);
    });
});
describe("cut", () => {
    it("cuts at the first instance of sep", () => {
        deepStrictEqual(cut("Gopher@example.com", "@"), { before: "Gopher", after: "example.com", found: true });
        deepStrictEqual(cut("Gopher", "@"), { before: "Gopher", after: "", found: false });
        deepStrictEqual(cut("", ""), { before: "", after: "", found: true });
    });
    it("returns found=false when sep is longer than s", () => {
        deepStrictEqual(cut("ab", "abc"), { before: "ab", after: "", found: false });
        deepStrictEqual(cut("", "sep"), { before: "", after: "", found: false });
    });
});
describe("cutPrefix", () => {
    it("removes a leading prefix", () => {
        deepStrictEqual(cutPrefix("Gopher", "Go"), { after: "pher", found: true });
        deepStrictEqual(cutPrefix("Gopher", "X"), { after: "Gopher", found: false });
    });
    it("returns found=false when prefix is longer than s", () => {
        deepStrictEqual(cutPrefix("ab", "abc"), { after: "ab", found: false });
        deepStrictEqual(cutPrefix("", "abc"), { after: "", found: false });
    });
});
describe("cutSuffix", () => {
    it("removes a trailing suffix", () => {
        deepStrictEqual(cutSuffix("Gopher", "er"), { before: "Goph", found: true });
        deepStrictEqual(cutSuffix("Gopher", "X"), { before: "Gopher", found: false });
    });
    it("returns found=false when suffix is longer than s", () => {
        deepStrictEqual(cutSuffix("ab", "abc"), { before: "ab", found: false });
        deepStrictEqual(cutSuffix("", "abc"), { before: "", found: false });
    });
});
describe("equalFold", () => {
    it("compares strings case-insensitively", () => {
        ok(equalFold("Go", "go"));
        ok(equalFold("Go", "GO"));
        ok(!equalFold("Go", "Java"));
    });
    it("handles empty strings and length mismatches", () => {
        ok(equalFold("", ""));
        ok(!equalFold("", "abc"));
        ok(!equalFold("abc", "abcd"));
    });
});
describe("fields", () => {
    it("splits on whitespace", () => {
        deepStrictEqual(fields("  foo bar  baz   "), ["foo", "bar", "baz"]);
        deepStrictEqual(fields(""), []);
        deepStrictEqual(fields("   "), []);
    });
});
describe("fieldsFunc", () => {
    it("splits at characters satisfying f", () => {
        const isDigit = (ch) => ch >= "0" && ch <= "9";
        deepStrictEqual(fieldsFunc("  foo1bar2baz3", isDigit), ["  foo", "bar", "baz"]);
        deepStrictEqual(fieldsFunc("", isDigit), []);
    });
});
describe("fieldsFuncSeq", () => {
    it("yields substrings between runs satisfying f", () => {
        const isDigit = (ch) => ch >= "0" && ch <= "9";
        const result = [...fieldsFuncSeq("  foo1bar2baz3", isDigit)];
        deepStrictEqual(result, ["  foo", "bar", "baz"]);
        deepStrictEqual([...fieldsFuncSeq("", isDigit)], []);
    });
});
describe("fieldsSeq", () => {
    it("yields whitespace-separated fields lazily", () => {
        deepStrictEqual([...fieldsSeq("  foo bar  baz   ")], ["foo", "bar", "baz"]);
        deepStrictEqual([...fieldsSeq("")], []);
    });
});
describe("hasPrefix", () => {
    it("reports whether s starts with prefix", () => {
        ok(hasPrefix("Gopher", "Go"));
        ok(!hasPrefix("Gopher", "X"));
        ok(hasPrefix("Gopher", ""));
    });
    it("returns false when prefix is longer than s", () => {
        ok(!hasPrefix("", "abc"));
        ok(!hasPrefix("ab", "abc"));
        ok(hasPrefix("", ""));
    });
});
describe("hasSuffix", () => {
    it("reports whether s ends with suffix", () => {
        ok(hasSuffix("Gopher", "er"));
        ok(!hasSuffix("Gopher", "X"));
        ok(hasSuffix("Gopher", ""));
    });
    it("returns false when suffix is longer than s", () => {
        ok(!hasSuffix("", "abc"));
        ok(!hasSuffix("ab", "abc"));
        ok(hasSuffix("", ""));
    });
});
describe("index", () => {
    it("returns the index of the first occurrence", () => {
        strictEqual(index("chicken", "ken"), 4);
        strictEqual(index("chicken", "dmr"), -1);
        strictEqual(index("", ""), 0);
    });
    it("returns -1 when substr is longer than s", () => {
        strictEqual(index("foo", "foobar"), -1);
        strictEqual(index("", "x"), -1);
    });
});
describe("indexAny", () => {
    it("returns the index of the first character from chars", () => {
        strictEqual(indexAny("chicken", "aeiouy"), 2); // 'i' at index 2
        strictEqual(indexAny("crwth", "aeiouy"), -1); // no vowels
        strictEqual(indexAny("xyz", "abc"), -1);
        strictEqual(indexAny("xyz", ""), -1);
    });
    it("returns -1 for empty source string", () => {
        strictEqual(indexAny("", "abc"), -1);
        strictEqual(indexAny("", ""), -1);
    });
});
describe("indexByte", () => {
    it("returns the index of the first occurrence of the byte", () => {
        strictEqual(indexByte("golang", 103), 0); // 'g'
        strictEqual(indexByte("golang", 111), 1); // 'o'
        strictEqual(indexByte("golang", 122), -1); // 'z'
    });
    it("returns -1 for empty string", () => {
        strictEqual(indexByte("", 97), -1);
    });
});
describe("indexFunc", () => {
    it("returns the index of the first char satisfying f", () => {
        const isUpper = (ch) => ch >= "A" && ch <= "Z";
        strictEqual(indexFunc("Hello", isUpper), 0);
        strictEqual(indexFunc("hello", isUpper), -1);
    });
    it("returns -1 for empty string", () => {
        strictEqual(indexFunc("", () => true), -1);
    });
});
describe("indexRune", () => {
    it("returns the index of the rune", () => {
        strictEqual(indexRune("chicken", 107), 4); // 'k'
        strictEqual(indexRune("chicken", 100), -1); // 'd'
        strictEqual(indexRune("chicken", -1), -1);
    });
    it("returns -1 for empty string", () => {
        strictEqual(indexRune("", 104), -1);
    });
});
describe("join", () => {
    it("joins elements with the separator", () => {
        strictEqual(join(["a", "b", "c"], ","), "a,b,c");
        strictEqual(join([], ","), "");
        strictEqual(join(["a"], ","), "a");
    });
});
describe("lastIndex", () => {
    it("returns the last index of substr", () => {
        strictEqual(lastIndex("go gopher", "go"), 3);
        strictEqual(lastIndex("go gopher", "xyz"), -1);
        strictEqual(lastIndex("go gopher", ""), 9);
    });
    it("returns -1 when substr is longer than s", () => {
        strictEqual(lastIndex("foo", "foobar"), -1);
        strictEqual(lastIndex("", "x"), -1);
    });
});
describe("lastIndexAny", () => {
    it("returns the last index of any char from chars", () => {
        strictEqual(lastIndexAny("go gopher", "go"), 4); // last 'o' at index 4
        strictEqual(lastIndexAny("go gopher", "rodent"), 8); // last 'r' at index 8
        strictEqual(lastIndexAny("go gopher", "xyz"), -1);
        strictEqual(lastIndexAny("", "abc"), -1);
        strictEqual(lastIndexAny("go", ""), -1);
    });
});
describe("lastIndexByte", () => {
    it("returns the last index of the byte", () => {
        strictEqual(lastIndexByte("golang", 103), 5); // last 'g' is at index 5
        strictEqual(lastIndexByte("golang", 108), 2); // 'l' is at index 2
        strictEqual(lastIndexByte("golang", 122), -1); // 'z' not found
    });
    it("returns -1 for empty string", () => {
        strictEqual(lastIndexByte("", 97), -1);
    });
});
describe("lastIndexFunc", () => {
    it("returns the last index satisfying f", () => {
        const isUpper = (ch) => ch >= "A" && ch <= "Z";
        strictEqual(lastIndexFunc("Hello World", isUpper), 6); // 'W'
        strictEqual(lastIndexFunc("hello world", isUpper), -1);
    });
    it("returns -1 for empty string", () => {
        strictEqual(lastIndexFunc("", () => true), -1);
    });
});
describe("lines", () => {
    it("yields lines with their terminators", () => {
        deepStrictEqual([...lines("abc\ndef\nghi")], ["abc\n", "def\n", "ghi"]);
        deepStrictEqual([...lines("abc\r\ndef")], ["abc\r\n", "def"]);
        deepStrictEqual([...lines("")], []);
        deepStrictEqual([...lines("abc")], ["abc"]);
        deepStrictEqual([...lines("abc\n")], ["abc\n"]);
    });
});
describe("mapString", () => {
    it("maps each rune through the function", () => {
        strictEqual(mapString(r => r + 1, "HAL-9000"), "IBM.:111"); // shift each char +1
        strictEqual(mapString(r => (r === "o".codePointAt(0) ? -1 : r), "foo bar"), "f bar");
    });
});
describe("repeat", () => {
    it("repeats the string n times", () => {
        strictEqual(repeat("na", 3), "nanana");
        strictEqual(repeat("na", 0), "");
        throws(() => repeat("x", -1), /negative count/);
    });
});
describe("replace", () => {
    it("replaces n occurrences", () => {
        strictEqual(replace("oink oink oink", "oink", "moo", 2), "moo moo oink");
        strictEqual(replace("oink oink oink", "oink", "moo", -1), "moo moo moo");
        strictEqual(replace("oink", "oink", "moo", 0), "oink");
    });
    it("handles empty old string", () => {
        strictEqual(replace("abc", "", "X", -1), "XaXbXcX");
        strictEqual(replace("abc", "", "X", 2), "XaXbc");
    });
    it("returns s unchanged when old is not found", () => {
        strictEqual(replace("abc", "abcd", "x", -1), "abc");
        strictEqual(replace("", "x", "y", -1), "");
    });
});
describe("replaceAll", () => {
    it("replaces all occurrences", () => {
        strictEqual(replaceAll("oink oink oink", "oink", "moo"), "moo moo moo");
        strictEqual(replaceAll("oink oink oink", "moo", "boo"), "oink oink oink");
    });
    it("returns s unchanged when old is not found", () => {
        strictEqual(replaceAll("abc", "abcd", "x"), "abc");
        strictEqual(replaceAll("", "x", "y"), "");
    });
});
describe("split", () => {
    it("splits on separator", () => {
        deepStrictEqual(split("a,b,c", ","), ["a", "b", "c"]);
        deepStrictEqual(split("a man a plan a canal panama", "a "), ["", "man ", "plan ", "canal panama"]);
        deepStrictEqual(split("xyz", ""), ["x", "y", "z"]);
        deepStrictEqual(split("", ""), []);
    });
    it("returns a single-element array when sep is not found", () => {
        deepStrictEqual(split("abc", "x"), ["abc"]);
        deepStrictEqual(split("", "x"), [""]);
    });
});
describe("splitN", () => {
    it("splits into at most n parts", () => {
        deepStrictEqual(splitN("a,b,c", ",", 2), ["a", "b,c"]);
        deepStrictEqual(splitN("a,b,c", ",", -1), ["a", "b", "c"]);
        deepStrictEqual(splitN("a,b,c", ",", 0), []);
        deepStrictEqual(splitN("abc", "", 2), ["a", "bc"]);
    });
    it("returns single-element array when sep is not found", () => {
        deepStrictEqual(splitN("abc", "x", 2), ["abc"]);
        deepStrictEqual(splitN("", "x", -1), [""]);
    });
});
describe("splitAfter", () => {
    it("splits and includes separator in each part", () => {
        deepStrictEqual(splitAfter("a,b,c", ","), ["a,", "b,", "c"]);
        deepStrictEqual(splitAfter("a,b,c,", ","), ["a,", "b,", "c,", ""]);
    });
});
describe("splitAfterN", () => {
    it("splits into at most n parts including separator", () => {
        deepStrictEqual(splitAfterN("a,b,c", ",", 2), ["a,", "b,c"]);
        deepStrictEqual(splitAfterN("a,b,c", ",", 0), []);
    });
});
describe("splitSeq", () => {
    it("yields split parts lazily", () => {
        deepStrictEqual([...splitSeq("a,b,c", ",")], ["a", "b", "c"]);
        deepStrictEqual([...splitSeq("abc", "")], ["a", "b", "c"]);
    });
});
describe("splitAfterSeq", () => {
    it("yields split parts including separator lazily", () => {
        deepStrictEqual([...splitAfterSeq("a,b,c", ",")], ["a,", "b,", "c"]);
    });
});
describe("title", () => {
    it("title-cases words", () => {
        strictEqual(title("her royal highness"), "Her Royal Highness");
    });
});
describe("toLower", () => {
    it("converts to lower case", () => {
        strictEqual(toLower("Gopher"), "gopher");
    });
});
describe("toLowerSpecial", () => {
    it("uses locale-specific lower case", () => {
        // Turkish: 'I' → 'ı' with tr locale
        strictEqual(toLowerSpecial("tr", "I"), "\u0131");
    });
});
describe("toTitle", () => {
    it("converts to title case (upper case for ASCII)", () => {
        strictEqual(toTitle("loud noises"), "LOUD NOISES");
        strictEqual(toTitle("хлеб"), "ХЛЕБ");
    });
});
describe("toTitleSpecial", () => {
    it("uses locale-specific upper case", () => {
        strictEqual(toTitleSpecial("tr", "i"), "İ");
    });
});
describe("toUpper", () => {
    it("converts to upper case", () => {
        strictEqual(toUpper("Gopher"), "GOPHER");
    });
});
describe("toUpperSpecial", () => {
    it("uses locale-specific upper case", () => {
        strictEqual(toUpperSpecial("tr", "i"), "İ");
    });
});
describe("toValidUTF8", () => {
    it("replaces lone surrogates with replacement", () => {
        // Create a string with a lone high surrogate
        const loneSurrogate = String.fromCharCode(0xD800);
        strictEqual(toValidUTF8(loneSurrogate, "?"), "?");
        strictEqual(toValidUTF8("hello", "?"), "hello");
        // Valid surrogate pair should be preserved
        const validPair = String.fromCodePoint(0x1F600); // 😀
        strictEqual(toValidUTF8(validPair, "?"), validPair);
    });
});
describe("trim", () => {
    it("trims cutset from both ends", () => {
        strictEqual(trim("¡¡¡Hello!!!", "!¡"), "Hello");
        strictEqual(trim("  hello  ", " "), "hello");
    });
    it("handles empty string and empty cutset", () => {
        strictEqual(trim("", "abc"), "");
        strictEqual(trim("hello", ""), "hello");
    });
});
describe("trimFunc", () => {
    it("trims characters satisfying f from both ends", () => {
        const isSpecial = (ch) => ch === "!" || ch === "¡";
        strictEqual(trimFunc("¡¡¡Hello!!!", isSpecial), "Hello");
    });
    it("returns empty string unchanged", () => {
        strictEqual(trimFunc("", () => true), "");
    });
});
describe("trimLeft", () => {
    it("trims cutset from the left", () => {
        strictEqual(trimLeft("¡¡¡Hello!!!", "!¡"), "Hello!!!");
    });
    it("handles empty string and empty cutset", () => {
        strictEqual(trimLeft("", "abc"), "");
        strictEqual(trimLeft("hello", ""), "hello");
    });
});
describe("trimLeftFunc", () => {
    it("trims characters satisfying f from the left", () => {
        const isSpecial = (ch) => ch === "!" || ch === "¡";
        strictEqual(trimLeftFunc("¡¡¡Hello!!!", isSpecial), "Hello!!!");
    });
    it("returns empty string unchanged", () => {
        strictEqual(trimLeftFunc("", () => true), "");
    });
});
describe("trimPrefix", () => {
    it("removes a leading prefix if present", () => {
        strictEqual(trimPrefix("Goodbye, world!", "Goodbye, "), "world!");
        strictEqual(trimPrefix("Hello, world!", "Goodbye, "), "Hello, world!");
    });
    it("returns s unchanged when prefix is longer than s", () => {
        strictEqual(trimPrefix("", "abc"), "");
        strictEqual(trimPrefix("ab", "abc"), "ab");
    });
});
describe("trimRight", () => {
    it("trims cutset from the right", () => {
        strictEqual(trimRight("¡¡¡Hello!!!", "!¡"), "¡¡¡Hello");
    });
    it("handles empty string and empty cutset", () => {
        strictEqual(trimRight("", "abc"), "");
        strictEqual(trimRight("hello", ""), "hello");
    });
});
describe("trimRightFunc", () => {
    it("trims characters satisfying f from the right", () => {
        const isSpecial = (ch) => ch === "!" || ch === "¡";
        strictEqual(trimRightFunc("¡¡¡Hello!!!", isSpecial), "¡¡¡Hello");
    });
    it("returns empty string unchanged", () => {
        strictEqual(trimRightFunc("", () => true), "");
    });
});
describe("trimSpace", () => {
    it("trims whitespace from both ends", () => {
        strictEqual(trimSpace("  \t\n\r hello  "), "hello");
        strictEqual(trimSpace(""), "");
    });
});
describe("trimSuffix", () => {
    it("removes a trailing suffix if present", () => {
        strictEqual(trimSuffix("Hello, goodbye!", ", goodbye!"), "Hello");
        strictEqual(trimSuffix("Hello, world!", "Goodbye"), "Hello, world!");
    });
    it("returns s unchanged when suffix is longer than s", () => {
        strictEqual(trimSuffix("", "abc"), "");
        strictEqual(trimSuffix("ab", "abc"), "ab");
    });
});
describe("Builder", () => {
    it("builds a string via writeString", () => {
        const b = new Builder();
        strictEqual(b.len(), 0);
        b.writeString("hello");
        b.writeString(", ");
        b.writeString("world");
        strictEqual(b.string(), "hello, world");
        strictEqual(b.len(), 12);
    });
    it("builds a string via write (Uint8Array)", () => {
        const b = new Builder();
        const encoded = new TextEncoder().encode("hello");
        b.write(encoded);
        strictEqual(b.string(), "hello");
    });
    it("builds a string via writeByte and writeRune", () => {
        const b = new Builder();
        b.writeByte(72); // 'H'
        b.writeRune(101); // 'e'
        b.writeRune(0x1F600); // 😀
        strictEqual(b.string(), "He😀");
    });
    it("resets correctly", () => {
        const b = new Builder();
        b.writeString("hello");
        b.reset();
        strictEqual(b.string(), "");
        strictEqual(b.len(), 0);
    });
    it("grow is a no-op", () => {
        const b = new Builder();
        b.grow(100);
        b.writeString("x");
        strictEqual(b.string(), "x");
    });
    it("cap returns current length", () => {
        const b = new Builder();
        b.writeString("abc");
        strictEqual(b.cap(), 3);
    });
});
describe("Reader", () => {
    it("reads bytes", () => {
        const r = newReader("hello");
        strictEqual(r.size(), 5);
        strictEqual(r.len(), 5);
        const buf = new Uint8Array(3);
        const n = r.read(buf);
        strictEqual(n, 3);
        deepStrictEqual(buf, new Uint8Array([104, 101, 108])); // "hel"
        strictEqual(r.len(), 2);
    });
    it("throws EOFError when exhausted", () => {
        const r = newReader("x");
        const buf = new Uint8Array(10);
        r.read(buf);
        throws(() => r.read(new Uint8Array(1)), err => err instanceof EOFError);
    });
    it("readByte reads one byte", () => {
        const r = newReader("abc");
        strictEqual(r.readByte(), 97); // 'a'
        strictEqual(r.readByte(), 98); // 'b'
    });
    it("unreadByte unreads one byte", () => {
        const r = newReader("abc");
        r.readByte();
        r.unreadByte();
        strictEqual(r.readByte(), 97); // 'a' again
    });
    it("readRune reads a unicode code point", () => {
        const r = newReader("hello");
        const [ch, size] = r.readRune();
        strictEqual(ch, 104); // 'h'
        strictEqual(size, 1);
    });
    it("unreadRune unreads the last rune", () => {
        const r = newReader("hello");
        r.readRune();
        r.unreadRune();
        const [ch] = r.readRune();
        strictEqual(ch, 104); // 'h' again
    });
    it("readAt reads from a given offset", () => {
        const r = newReader("hello");
        const buf = new Uint8Array(3);
        const n = r.readAt(buf, 2);
        strictEqual(n, 3);
        deepStrictEqual(buf, new Uint8Array([108, 108, 111])); // "llo"
    });
    it("seek moves the read position", () => {
        const r = newReader("hello");
        r.seek(2, 0); // seek to position 2
        const b = new Uint8Array(1);
        r.read(b);
        strictEqual(b[0], 108); // 'l'
    });
    it("writeTo writes remaining data", () => {
        const r = newReader("hello");
        const chunks = [];
        const w = {
            write: (p) => {
                chunks.push(p.slice());
                return p.length;
            }
        };
        r.seek(1, 0);
        const n = r.writeTo(w);
        strictEqual(n, 4); // "ello" = 4 bytes
        strictEqual(new TextDecoder().decode(chunks[0]), "ello");
    });
    it("unreadByte works after operations other than readByte", () => {
        // unreadByte only requires position > 0; it does not check previous op type
        const r = newReader("hello");
        r.readRune(); // advances past 'h'
        r.unreadByte(); // steps back 1 byte — does not throw
        strictEqual(r.readByte(), 104); // 'h' again
    });
    it("unreadByte throws when at beginning of string", () => {
        const r = newReader("abc");
        throws(() => r.unreadByte(), /at beginning of string/);
    });
    it("unreadRune throws when at beginning of string", () => {
        const r = newReader("abc");
        throws(() => r.unreadRune(), /at beginning of string/);
    });
    it("unreadRune throws when previous operation was not readRune", () => {
        const r = newReader("abc");
        r.readByte();
        throws(() => r.unreadRune(), /previous operation was not ReadRune/);
    });
    it("readAt throws on negative offset", () => {
        const r = newReader("hello");
        throws(() => r.readAt(new Uint8Array(1), -1), /negative offset/);
    });
    it("readAt throws when offset is past end of string", () => {
        const r = newReader("hello");
        throws(() => r.readAt(new Uint8Array(1), 10), err => err instanceof EOFError);
    });
    it("seek throws on invalid whence", () => {
        const r = newReader("hello");
        throws(() => r.seek(0, 99), /invalid whence/);
    });
    it("seek throws when resulting position is negative", () => {
        const r = newReader("hello");
        throws(() => r.seek(-1, 0), /negative position/);
    });
    it("writeTo returns 0 when reader is exhausted", () => {
        const r = newReader("");
        const w = { write: (p) => p.length };
        strictEqual(r.writeTo(w), 0);
    });
    it("readByte throws EOFError when exhausted", () => {
        const r = newReader("a");
        r.readByte();
        throws(() => r.readByte(), err => err instanceof EOFError);
    });
    it("readRune throws EOFError when exhausted", () => {
        const r = newReader("a");
        r.readRune();
        throws(() => r.readRune(), err => err instanceof EOFError);
    });
});
describe("Replacer", () => {
    it("replaces old strings with new", () => {
        const r = newReplacer("<", "&lt;", ">", "&gt;");
        strictEqual(r.replace("<html>"), "&lt;html&gt;");
    });
    it("applies replacements in order without double-replacing", () => {
        const r = newReplacer("a", "b", "b", "c");
        strictEqual(r.replace("ab"), "bc");
    });
    it("writeString writes replaced content to a writer", () => {
        const chunks = [];
        const w = {
            write: (p) => {
                chunks.push(p.slice());
                return p.length;
            }
        };
        const r = newReplacer("foo", "bar");
        r.writeString(w, "foo");
        strictEqual(new TextDecoder().decode(chunks[0]), "bar");
    });
    it("throws on odd argument count", () => {
        throws(() => newReplacer("a", "b", "c"), /odd argument count/);
    });
    it("returns s unchanged when no old strings match", () => {
        const r = newReplacer("x", "y");
        strictEqual(r.replace("abc"), "abc");
        strictEqual(r.replace(""), "");
    });
    it("handles empty input string", () => {
        const r = newReplacer("foo", "bar");
        strictEqual(r.replace(""), "");
    });
    it("works with zero replacement pairs", () => {
        const r = newReplacer();
        strictEqual(r.replace("hello"), "hello");
    });
});
//# sourceMappingURL=strings.test.js.map