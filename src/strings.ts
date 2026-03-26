/**
 * A Unicode code point, analogous to Go's rune (int32).
 */
type Rune = number;

/**
 * A locale identifier used for special Unicode case mappings,
 * analogous to Go's unicode.SpecialCase (e.g. "tr", "az").
 */
type SpecialCase = string;

/**
 * A minimal writer interface, analogous to Go's io.Writer.
 */
interface Writer {
    write: (_p: Uint8Array) => number;
}

// ─── Utility helpers ────────────────────────────────────────────────────────

/**
 * Decode a UTF-8 byte sequence to its Unicode code point and consumed byte count.
 *
 * On any invalid encoding (including truncated sequences or continuation bytes
 * used as starting bytes), this returns the replacement character U+FFFD and
 * reports that a single byte was consumed, matching Go's behavior.
 */
function decodeRuneFromBytes(bytes: Uint8Array, pos: number): [Rune, number] {
    const len = bytes.length;
    if (pos >= len) {
        return [0xFFFD, 0];
    }

    const b0 = bytes[pos] ?? 0;

    // ASCII fast path.
    if (b0 < 0x80) {
        return [b0, 1];
    }

    // Continuation bytes (10xxxxxx) are not valid as a starting byte.
    if ((b0 & 0xC0) === 0x80) {
        return [0xFFFD, 1];
    }

    let size = 0;
    let codePoint = 0;

    if (b0 < 0xE0) {
        // 2-byte sequence: 110xxxxx 10xxxxxx
        size = 2;
        if (pos + size > len) {
            return [0xFFFD, 1];
        }
        const b1 = bytes[pos + 1] ?? 0;
        if ((b1 & 0xC0) !== 0x80) {
            return [0xFFFD, 1];
        }
        codePoint = ((b0 & 0x1F) << 6) | (b1 & 0x3F);
        // Overlong encoding check: must be >= 0x80.
        if (codePoint < 0x80) {
            return [0xFFFD, 1];
        }
    } else if (b0 < 0xF0) {
        // 3-byte sequence: 1110xxxx 10xxxxxx 10xxxxxx
        size = 3;
        if (pos + size > len) {
            return [0xFFFD, 1];
        }
        const b1 = bytes[pos + 1] ?? 0;
        const b2 = bytes[pos + 2] ?? 0;
        if ((b1 & 0xC0) !== 0x80 || (b2 & 0xC0) !== 0x80) {
            return [0xFFFD, 1];
        }
        codePoint = ((b0 & 0x0F) << 12) | ((b1 & 0x3F) << 6) | (b2 & 0x3F);
        // Overlong encoding check: must be >= 0x800.
        if (codePoint < 0x800) {
            return [0xFFFD, 1];
        }
        // Exclude UTF-16 surrogate halves.
        if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
            return [0xFFFD, 1];
        }
    } else if (b0 < 0xF8) {
        // 4-byte sequence: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
        size = 4;
        if (pos + size > len) {
            return [0xFFFD, 1];
        }
        const b1 = bytes[pos + 1] ?? 0;
        const b2 = bytes[pos + 2] ?? 0;
        const b3 = bytes[pos + 3] ?? 0;
        if (
            (b1 & 0xC0) !== 0x80 ||
            (b2 & 0xC0) !== 0x80 ||
            (b3 & 0xC0) !== 0x80
        ) {
            return [0xFFFD, 1];
        }
        codePoint =
            ((b0 & 0x07) << 18) |
            ((b1 & 0x3F) << 12) |
            ((b2 & 0x3F) << 6) |
            (b3 & 0x3F);
        // Overlong encoding check: must be >= 0x10000.
        if (codePoint < 0x10000) {
            return [0xFFFD, 1];
        }
        // Maximum valid Unicode code point is U+10FFFF.
        if (codePoint > 0x10FFFF) {
            return [0xFFFD, 1];
        }
    } else {
        // UTF-8 sequences longer than 4 bytes are not valid.
        return [0xFFFD, 1];
    }

    return [codePoint, size];
}

// ─── Simple string functions ─────────────────────────────────────────────────

/**
 * Clone returns a string with the same contents as s.
 *
 * @param {string} s - Input string.
 * @returns {string} A string with the same contents as s.
 * @example
 * clone("hello"); // "hello"
 * clone("");      // ""
 */
function clone(s: string): string {
    return s.slice();
}

/**
 * Compare returns an integer comparing two strings lexicographically.
 * The result will be 0 if a === b, -1 if a < b, and +1 if a > b.
 *
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {number} -1, 0, or 1.
 * @example
 * compare("a", "b"); // -1
 * compare("b", "a"); // 1
 * compare("a", "a"); // 0
 */
function compare(a: string, b: string): number {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
}

/**
 * Contains reports whether substr is within s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to search for.
 * @returns {boolean} True if substr is found in s.
 * @example
 * contains("seafood", "foo"); // true
 * contains("seafood", "bar"); // false
 * contains("foo", "foobar");  // false — substr longer than s
 * contains("", "");           // true
 */
function contains(s: string, substr: string): boolean {
    return s.includes(substr);
}

/**
 * ContainsAny reports whether any Unicode code points in chars are within s.
 *
 * @param {string} s - Input string.
 * @param {string} chars - String of characters to search for.
 * @returns {boolean} True if any character in chars is found in s.
 * @example
 * containsAny("failure", "u & i"); // true
 * containsAny("foo", "");          // false — empty chars always returns false
 * containsAny("team", "i");        // false
 */
function containsAny(s: string, chars: string): boolean {
    for (const c of chars) {
        if (s.includes(c)) { return true; }
    }
    return false;
}

/**
 * ContainsFunc reports whether any Unicode code point r in s satisfies f(r).
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function receiving each character.
 * @returns {boolean} True if any character satisfies f.
 * @example
 * containsFunc("hello", ch => ch === "e"); // true
 * containsFunc("hello", ch => ch === "z"); // false
 * containsFunc("", () => true);            // false — empty string has no chars
 */
function containsFunc(s: string, f: (_ch: string) => boolean): boolean {
    for (const ch of s) {
        if (f(ch)) { return true; }
    }
    return false;
}

/**
 * ContainsRune reports whether the Unicode code point r is within s.
 *
 * @param {string} s - Input string.
 * @param {Rune} r - Unicode code point to search for.
 * @returns {boolean} True if r is found in s.
 * @example
 * containsRune("hello", 104); // true  — 'h' (U+0068)
 * containsRune("hello", 122); // false — 'z' not in "hello"
 * containsRune("hello", -1);  // false — negative rune always returns false
 * containsRune("", 97);       // false — empty string
 */
function containsRune(s: string, r: Rune): boolean {
    if (r < 0) { return false; }
    return s.includes(String.fromCodePoint(r));
}

/**
 * Count counts the number of non-overlapping instances of substr in s.
 * If substr is an empty string, Count returns 1 + the number of Unicode code points in s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to count.
 * @returns {number} Number of non-overlapping occurrences.
 * @example
 * count("cheese", "e"); // 3
 * count("five", "");    // 5 (empty substr → rune count + 1)
 * count("", "");        // 1
 * count("", "foo");     // 0 — substr longer than s
 */
function count(s: string, substr: string): number {
    if (substr === "") {
        return [...s].length + 1;
    }
    let n = 0;
    let start = 0;
    while (true) {
        const idx = s.indexOf(substr, start);
        if (idx === -1) { break; }
        n++;
        start = idx + substr.length;
    }
    return n;
}

/**
 * Cut slices s around the first instance of sep,
 * returning the text before and after sep.
 * The found result reports whether sep appears in s.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {{ before: string; after: string; found: boolean }}
 * @example
 * cut("Gopher@example.com", "@"); // { before: "Gopher", after: "example.com", found: true }
 * cut("Gopher", "@");             // { before: "Gopher", after: "", found: false }
 * cut("ab", "abc");               // { before: "ab", after: "", found: false } — sep longer than s
 */
function cut(s: string, sep: string): { before: string; after: string; found: boolean } {
    const idx = s.indexOf(sep);
    if (idx === -1) {
        return { before: s, after: "", found: false };
    }
    return { before: s.slice(0, idx), after: s.slice(idx + sep.length), found: true };
}

/**
 * CutPrefix returns s without the provided leading prefix string
 * and reports whether it found the prefix.
 *
 * @param {string} s - Input string.
 * @param {string} prefix - Prefix to remove.
 * @returns {{ after: string; found: boolean }}
 * @example
 * cutPrefix("Gopher", "Go"); // { after: "pher", found: true }
 * cutPrefix("Gopher", "X");  // { after: "Gopher", found: false }
 * cutPrefix("ab", "abc");    // { after: "ab", found: false } — prefix longer than s
 */
function cutPrefix(s: string, prefix: string): { after: string; found: boolean } {
    if (!s.startsWith(prefix)) {
        return { after: s, found: false };
    }
    return { after: s.slice(prefix.length), found: true };
}

/**
 * CutSuffix returns s without the provided ending suffix string
 * and reports whether it found the suffix.
 *
 * @param {string} s - Input string.
 * @param {string} suffix - Suffix to remove.
 * @returns {{ before: string; found: boolean }}
 * @example
 * cutSuffix("Gopher", "er"); // { before: "Goph", found: true }
 * cutSuffix("Gopher", "X");  // { before: "Gopher", found: false }
 * cutSuffix("ab", "abc");    // { before: "ab", found: false } — suffix longer than s
 */
function cutSuffix(s: string, suffix: string): { before: string; found: boolean } {
    if (!s.endsWith(suffix)) {
        return { before: s, found: false };
    }
    return { before: s.slice(0, s.length - suffix.length), found: true };
}

/**
 * EqualFold reports whether s and t are equal under simple Unicode case-folding.
 *
 * @param {string} s - First string.
 * @param {string} t - Second string.
 * @returns {boolean} True if s and t are equal ignoring case.
 * @example
 * equalFold("Go", "go");    // true
 * equalFold("Go", "Java");  // false
 * equalFold("abc", "abcd"); // false — different lengths
 * equalFold("", "");        // true
 */
function simpleCaseFold(str: string): string {
    let result = "";
    for (const ch of str) {
        switch (ch) {
            // Greek sigma variants: Σ (U+03A3), σ (U+03C3), ς (U+03C2) are all equivalent.
            case "\u03A3": // Σ
            case "\u03C2": // ς
            case "\u03C3": // σ
                result += "\u03C3";
                break;
            // German sharp s: ß folds to "ss".
            case "\u00DF": // ß
                result += "ss";
                break;
            default:
                result += ch.toLowerCase();
                break;
        }
    }
    return result;
}

function equalFold(s: string, t: string): boolean {
    return simpleCaseFold(s) === simpleCaseFold(t);
}

/**
 * Fields splits the string s around each instance of one or more consecutive
 * white space characters, returning an array of substrings.
 * If s contains only white space, an empty array is returned.
 *
 * @param {string} s - Input string.
 * @returns {string[]} Array of whitespace-separated fields.
 */
function fields(s: string): string[] {
    const result = s.split(/\s+/);
    return result.filter(x => x.length > 0);
}

/**
 * FieldsFunc splits the string s at each run of code points c satisfying f(c)
 * and returns an array of slices of s.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate; split at runs of characters satisfying f.
 * @returns {string[]} Array of fields.
 */
function fieldsFunc(s: string, f: (_ch: string) => boolean): string[] {
    const result: string[] = [];
    let inField = false;
    let start = 0;
    let i = 0;
    for (const ch of s) {
        if (f(ch)) {
            if (inField) {
                result.push(s.slice(start, i));
                inField = false;
            }
        } else {
            if (!inField) {
                start = i;
                inField = true;
            }
        }
        i += ch.length;
    }
    if (inField) {
        result.push(s.slice(start));
    }
    return result;
}

/**
 * FieldsFuncSeq returns an iterator over substrings of s split around
 * runs of code points satisfying f(c).
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate; split at runs of characters satisfying f.
 * @returns {Generator<string, void, unknown>} Iterator over fields.
 */
function* fieldsFuncSeq(s: string, f: (_ch: string) => boolean): Generator<string, void, unknown> {
    let inField = false;
    let start = 0;
    let i = 0;
    for (const ch of s) {
        if (f(ch)) {
            if (inField) {
                yield s.slice(start, i);
                inField = false;
            }
        } else {
            if (!inField) {
                start = i;
                inField = true;
            }
        }
        i += ch.length;
    }
    if (inField) {
        yield s.slice(start);
    }
}

/**
 * FieldsSeq returns an iterator over substrings of s, split around each
 * instance of one or more consecutive white space characters.
 *
 * @param {string} s - Input string.
 * @returns {Generator<string, void, unknown>} Iterator over whitespace-separated fields.
 */
function* fieldsSeq(s: string): Generator<string, void, unknown> {
    yield* fieldsFuncSeq(s, ch => /\s/.test(ch));
}

/**
 * HasPrefix reports whether the string s begins with prefix.
 *
 * @param {string} s - Input string.
 * @param {string} prefix - Prefix to check.
 * @returns {boolean} True if s starts with prefix.
 * @example
 * hasPrefix("Gopher", "Go"); // true
 * hasPrefix("Gopher", "");   // true — empty prefix always matches
 * hasPrefix("Gopher", "X");  // false
 * hasPrefix("ab", "abc");    // false — prefix longer than s
 */
function hasPrefix(s: string, prefix: string): boolean {
    return s.startsWith(prefix);
}

/**
 * HasSuffix reports whether the string s ends with suffix.
 *
 * @param {string} s - Input string.
 * @param {string} suffix - Suffix to check.
 * @returns {boolean} True if s ends with suffix.
 * @example
 * hasSuffix("Gopher", "er"); // true
 * hasSuffix("Gopher", "");   // true — empty suffix always matches
 * hasSuffix("Gopher", "X");  // false
 * hasSuffix("ab", "abc");    // false — suffix longer than s
 */
function hasSuffix(s: string, suffix: string): boolean {
    return s.endsWith(suffix);
}

/**
 * Index returns the index of the first instance of substr in s,
 * or -1 if substr is not present in s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to find.
 * @returns {number} Index of first occurrence, or -1.
 * @example
 * index("chicken", "ken"); // 4
 * index("chicken", "dmr"); // -1
 * index("foo", "foobar");  // -1 — substr longer than s
 * index("", "");           // 0
 */
function index(s: string, substr: string): number {
    return s.indexOf(substr);
}

/**
 * IndexAny returns the index of the first instance of any Unicode code point
 * from chars in s, or -1 if no Unicode code point from chars is present in s.
 *
 * @param {string} s - Input string.
 * @param {string} chars - String of characters to search for.
 * @returns {number} Index of first matching character, or -1.
 */
function indexAny(s: string, chars: string): number {
    if (chars === "") { return -1; }
    let i = 0;
    for (const ch of s) {
        if (chars.includes(ch)) { return i; }
        i += ch.length;
    }
    return -1;
}

/**
 * IndexByte returns the index of the first instance of the byte b in s,
 * or -1 if b is not present in s.
 *
 * @param {string} s - Input string.
 * @param {number} c - Byte value (0–255) to search for.
 * @returns {number} Index of first occurrence, or -1.
 */
function indexByte(s: string, c: number): number {
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) === c) { return i; }
    }
    return -1;
}

/**
 * IndexFunc returns the index into s of the first Unicode code point
 * satisfying f(c), or -1 if none do.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {number} Index of first matching character, or -1.
 */
function indexFunc(s: string, f: (_ch: string) => boolean): number {
    let i = 0;
    for (const ch of s) {
        if (f(ch)) { return i; }
        i += ch.length;
    }
    return -1;
}

/**
 * IndexRune returns the index of the first instance of the Unicode code point r in s,
 * or -1 if r is not present in s.
 *
 * @param {string} s - Input string.
 * @param {Rune} r - Unicode code point to find.
 * @returns {number} Index of first occurrence, or -1.
 */
function indexRune(s: string, r: Rune): number {
    if (r < 0) { return -1; }
    return s.indexOf(String.fromCodePoint(r));
}

/**
 * Join concatenates the elements of its first argument to create a single string.
 * The separator string sep is placed between elements in the resulting string.
 *
 * @param {string[]} elems - Strings to join.
 * @param {string} sep - Separator.
 * @returns {string} Joined string.
 */
function join(elems: string[], sep: string): string {
    return elems.join(sep);
}

/**
 * LastIndex returns the index of the last instance of substr in s,
 * or -1 if substr is not present in s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to find.
 * @returns {number} Index of last occurrence, or -1.
 */
function lastIndex(s: string, substr: string): number {
    return s.lastIndexOf(substr);
}

/**
 * LastIndexAny returns the index of the last instance of any Unicode code point
 * from chars in s, or -1 if no Unicode code point from chars is present in s.
 *
 * @param {string} s - Input string.
 * @param {string} chars - String of characters to search for.
 * @returns {number} Index of last matching character, or -1.
 */
function lastIndexAny(s: string, chars: string): number {
    if (chars === "") { return -1; }
    let lastIdx = -1;
    let i = 0;
    for (const ch of s) {
        if (chars.includes(ch)) { lastIdx = i; }
        i += ch.length;
    }
    return lastIdx;
}

/**
 * LastIndexByte returns the index of the last instance of the byte c in s,
 * or -1 if c is not present in s.
 *
 * @param {string} s - Input string.
 * @param {number} c - Byte value (0–255) to search for.
 * @returns {number} Index of last occurrence, or -1.
 */
function lastIndexByte(s: string, c: number): number {
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charCodeAt(i) === c) { return i; }
    }
    return -1;
}

/**
 * LastIndexFunc returns the index into s of the last Unicode code point
 * satisfying f(c), or -1 if none do.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {number} Index of last matching character, or -1.
 */
function lastIndexFunc(s: string, f: (_ch: string) => boolean): number {
    let lastIdx = -1;
    let i = 0;
    for (const ch of s) {
        if (f(ch)) { lastIdx = i; }
        i += ch.length;
    }
    return lastIdx;
}

/**
 * Lines returns an iterator over the newline-terminated lines in the string s.
 * The lines yielded by the iterator include their terminating newlines.
 * If s is empty, the iterator yields no lines at all.
 * If s does not end in a newline, the final non-empty line of s is yielded
 * without a terminating newline.
 *
 * @param {string} s - Input string.
 * @returns {Generator<string, void, unknown>} Iterator over lines.
 */
function* lines(s: string): Generator<string, void, unknown> {
    if (s === "") { return; }
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "\n") {
            yield s.slice(start, i + 1);
            start = i + 1;
        } else if (s[i] === "\r") {
            if (i + 1 < s.length && s[i + 1] === "\n") {
                yield s.slice(start, i + 2);
                i++;
            } else {
                yield s.slice(start, i + 1);
            }
            start = i + 1;
        }
    }
    if (start < s.length) {
        yield s.slice(start);
    }
}

/**
 * Map returns a copy of the string s with all its characters modified
 * according to the mapping function. If mapping returns a negative value,
 * the character is dropped from the string with no replacement.
 *
 * @param {(r: Rune) => Rune} mapping - Maps each code point to a new code point.
 * @param {string} s - Input string.
 * @returns {string} Mapped string.
 */
function mapString(mapping: (_r: Rune) => Rune, s: string): string {
    let result = "";
    for (const ch of s) {
        const r = ch.codePointAt(0) ?? 0;
        const mapped = mapping(r);
        if (mapped >= 0) {
            result += String.fromCodePoint(mapped);
        }
    }
    return result;
}

/**
 * Repeat returns a new string consisting of count copies of the string s.
 *
 * @param {string} s - String to repeat.
 * @param {number} count - Number of repetitions (must be non-negative).
 * @returns {string} Repeated string.
 * @throws {RangeError} If count is negative.
 * @example
 * repeat("na", 4); // "nananana"
 * repeat("na", 0); // ""
 * repeat("x", -1); // throws RangeError
 */
function repeat(s: string, n: number): string {
    if (n < 0) {
        throw new RangeError("strings.repeat: negative count");
    }
    return s.repeat(n);
}

/**
 * Replace returns a copy of the string s with the first n non-overlapping
 * instances of old replaced by newStr.
 * If old is empty, it matches at the beginning of the string and after each
 * UTF-8 sequence, yielding up to k+1 replacements for a k-rune string.
 * If n < 0, there is no limit on the number of replacements.
 *
 * @param {string} s - Input string.
 * @param {string} old - String to replace.
 * @param {string} newStr - Replacement string.
 * @param {number} n - Maximum replacements; -1 means replace all.
 * @returns {string} String with replacements applied.
 * @example
 * replace("oink oink oink", "oink", "moo", 2);  // "moo moo oink"
 * replace("oink oink oink", "oink", "moo", -1); // "moo moo moo"
 * replace("abc", "", "X", -1);                  // "XaXbXcX"
 * replace("abc", "abcd", "x", -1);              // "abc" — old not found
 */
function replace(s: string, old: string, newStr: string, n: number): string {
    if (n === 0) { return s; }

    if (old === "") {
        const runes = [...s];
        const maxInsertions = runes.length + 1;
        const insertions = n < 0 ? maxInsertions : Math.min(n, maxInsertions);
        let result = "";
        for (let i = 0; i < runes.length; i++) {
            if (i < insertions) { result += newStr; }
            result += runes[i];
        }
        if (insertions > runes.length) { result += newStr; }
        return result;
    }

    if (n < 0) {
        return s.split(old).join(newStr);
    }

    let result = "";
    let start = 0;
    let numReplaced = 0;
    while (numReplaced < n) {
        const idx = s.indexOf(old, start);
        if (idx === -1) { break; }
        result += s.slice(start, idx) + newStr;
        start = idx + old.length;
        numReplaced++;
    }
    result += s.slice(start);
    return result;
}

/**
 * ReplaceAll returns a copy of the string s with all non-overlapping instances
 * of old replaced by newStr.
 *
 * @param {string} s - Input string.
 * @param {string} old - String to replace.
 * @param {string} newStr - Replacement string.
 * @returns {string} String with all replacements applied.
 */
function replaceAll(s: string, old: string, newStr: string): string {
    return replace(s, old, newStr, -1);
}

/**
 * Split slices s into all substrings separated by sep and returns a slice of
 * the substrings between those separators.
 * If sep is empty, Split splits after each UTF-8 sequence.
 * If both s and sep are empty, Split returns an empty slice.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {string[]} Array of substrings.
 */
function split(s: string, sep: string): string[] {
    return splitN(s, sep, -1);
}

/**
 * SplitN slices s into substrings separated by sep and returns a slice of
 * the substrings between those separators.
 * The count determines the number of substrings to return:
 *   - n > 0: at most n substrings; the last substring will be the unsplit remainder.
 *   - n == 0: nil (empty slice)
 *   - n < 0: all substrings
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @param {number} n - Maximum number of substrings.
 * @returns {string[]} Array of substrings.
 */
function splitN(s: string, sep: string, n: number): string[] {
    if (n === 0) { return []; }

    if (sep === "") {
        if (s === "") { return []; }
        const runes = [...s];
        if (n < 0 || n >= runes.length) { return runes; }
        const result = runes.slice(0, n - 1);
        let remaining = "";
        for (let i = n - 1; i < runes.length; i++) {
            remaining += runes[i];
        }
        result.push(remaining);
        return result;
    }

    if (n < 0) {
        return s.split(sep);
    }

    const result: string[] = [];
    let start = 0;
    for (let i = 0; i < n - 1; i++) {
        const idx = s.indexOf(sep, start);
        if (idx === -1) { break; }
        result.push(s.slice(start, idx));
        start = idx + sep.length;
    }
    result.push(s.slice(start));
    return result;
}

/**
 * SplitAfter slices s into all substrings after each instance of sep and
 * returns a slice of those substrings.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {string[]} Array of substrings including separator.
 */
function splitAfter(s: string, sep: string): string[] {
    return splitAfterN(s, sep, -1);
}

/**
 * SplitAfterN slices s into substrings after each instance of sep and
 * returns a slice of those substrings.
 * The count n determines the number of substrings to return.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @param {number} n - Maximum number of substrings.
 * @returns {string[]} Array of substrings including separator.
 */
function splitAfterN(s: string, sep: string, n: number): string[] {
    if (sep === "") {
        return splitN(s, sep, n);
    }
    const parts = splitN(s, sep, n);
    return parts.map((part, i) => {
        if (i < parts.length - 1) { return part + sep; }
        return part;
    });
}

/**
 * SplitSeq returns an iterator over all substrings of s separated by sep.
 * If sep is empty, SplitSeq splits after each UTF-8 sequence.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {Generator<string, void, unknown>} Iterator over substrings.
 */
function* splitSeq(s: string, sep: string): Generator<string, void, unknown> {
    if (sep === "") {
        for (const ch of s) { yield ch; }
        return;
    }
    let start = 0;
    while (true) {
        const idx = s.indexOf(sep, start);
        if (idx === -1) {
            yield s.slice(start);
            break;
        }
        yield s.slice(start, idx);
        start = idx + sep.length;
    }
}

/**
 * SplitAfterSeq returns an iterator over substrings of s split after each
 * instance of sep.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {Generator<string, void, unknown>} Iterator over substrings including separator.
 */
function* splitAfterSeq(s: string, sep: string): Generator<string, void, unknown> {
    if (sep === "") {
        for (const ch of s) { yield ch; }
        return;
    }
    let start = 0;
    while (true) {
        const idx = s.indexOf(sep, start);
        if (idx === -1) {
            yield s.slice(start);
            break;
        }
        yield s.slice(start, idx + sep.length);
        start = idx + sep.length;
    }
}

/**
 * Title returns a copy of the string s with all Unicode letters that begin words
 * mapped to their Unicode title case.
 *
 * @deprecated Use cases/runes packages or golang.org/x/text/cases for proper title casing.
 * @param {string} s - Input string.
 * @returns {string} Title-cased string.
 */
function title(s: string): string {
    return s.replace(/\S+/g, w => w.charAt(0).toUpperCase() + w.slice(1));
}

/**
 * ToLower returns s with all Unicode letters mapped to their lower case.
 *
 * @param {string} s - Input string.
 * @returns {string} Lower-cased string.
 */
function toLower(s: string): string {
    return s.toLowerCase();
}

/**
 * ToLowerSpecial returns a copy of the string s with all Unicode letters mapped
 * to their lower case using the rules of the special case c (locale).
 *
 * @param {SpecialCase} c - Locale identifier (e.g. "tr", "az").
 * @param {string} s - Input string.
 * @returns {string} Locale-lower-cased string.
 */
function toLowerSpecial(c: SpecialCase, s: string): string {
    return s.toLocaleLowerCase(c);
}

// Unicode titlecase map for the small set of digraph characters where
// titlecase differs from uppercase (e.g. ǆ → ǅ, not Ǆ).
const _unicodeTitleMap: ReadonlyMap<string, string> = new Map([
    ["\u01C4", "\u01C5"], // Ǆ → ǅ
    ["\u01C5", "\u01C5"], // ǅ → ǅ (already titlecase)
    ["\u01C6", "\u01C5"], // ǆ → ǅ
    ["\u01C7", "\u01C8"], // Ǉ → ǈ
    ["\u01C8", "\u01C8"], // ǈ → ǈ
    ["\u01C9", "\u01C8"], // ǉ → ǈ
    ["\u01CA", "\u01CB"], // Ǌ → ǋ
    ["\u01CB", "\u01CB"], // ǋ → ǋ
    ["\u01CC", "\u01CB"], // ǌ → ǋ
    ["\u01F1", "\u01F2"], // Ǳ → ǲ
    ["\u01F2", "\u01F2"], // ǲ → ǲ
    ["\u01F3", "\u01F2"], // ǳ → ǲ
]);

/**
 * ToTitle returns a copy of the string s with all Unicode letters mapped to
 * their Unicode title case.
 *
 * @param {string} s - Input string.
 * @returns {string} Title-cased string (per-code-point Unicode title case).
 */
function toTitle(s: string): string {
    let result = "";
    for (const ch of s) {
        const t = _unicodeTitleMap.get(ch);
        result += t !== undefined ? t : ch.toUpperCase();
    }
    return result;
}

/**
 * ToTitleSpecial returns a copy of the string s with all Unicode letters mapped
 * to their Unicode title case, giving priority to the special casing rules in c.
 *
 * @param {SpecialCase} c - Locale identifier (e.g. "tr", "az").
 * @param {string} s - Input string.
 * @returns {string} Locale title-cased string.
 */
function toTitleSpecial(c: SpecialCase, s: string): string {
    let result = "";
    for (const ch of s) {
        const t = _unicodeTitleMap.get(ch);
        result += t !== undefined ? t : ch.toLocaleUpperCase(c);
    }
    return result;
}

/**
 * ToUpper returns s with all Unicode letters mapped to their upper case.
 *
 * @param {string} s - Input string.
 * @returns {string} Upper-cased string.
 */
function toUpper(s: string): string {
    return s.toUpperCase();
}

/**
 * ToUpperSpecial returns a copy of the string s with all Unicode letters mapped
 * to their upper case using the rules of the special case c (locale).
 *
 * @param {SpecialCase} c - Locale identifier (e.g. "tr", "az").
 * @param {string} s - Input string.
 * @returns {string} Locale-upper-cased string.
 */
function toUpperSpecial(c: SpecialCase, s: string): string {
    return s.toLocaleUpperCase(c);
}

/**
 * ToValidUTF8 returns a copy of the string s with each run of invalid UTF-16
 * code units (lone surrogates) replaced by the replacement string, which may
 * be empty.
 *
 * @param {string} s - Input string.
 * @param {string} replacement - Replacement string for invalid sequences.
 * @returns {string} String with invalid sequences replaced.
 */
function toValidUTF8(s: string, replacement: string): string {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code >= 0xD800 && code <= 0xDBFF) {
            // High surrogate — check for valid following low surrogate
            const next = s.charCodeAt(i + 1);
            if (next >= 0xDC00 && next <= 0xDFFF) {
                result += s.charAt(i) + s.charAt(i + 1);
                i++;
            } else {
                result += replacement;
            }
        } else if (code >= 0xDC00 && code <= 0xDFFF) {
            // Lone low surrogate
            result += replacement;
        } else {
            result += s.charAt(i);
        }
    }
    return result;
}

/**
 * Trim returns a slice of the string s with all leading and trailing Unicode
 * code points contained in cutset removed.
 *
 * @param {string} s - Input string.
 * @param {string} cutset - String of characters to trim.
 * @returns {string} Trimmed string.
 */
function trim(s: string, cutset: string): string {
    return trimLeft(trimRight(s, cutset), cutset);
}

/**
 * TrimFunc returns a slice of the string s with all leading and trailing Unicode
 * code points c satisfying f(c) removed.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {string} Trimmed string.
 */
function trimFunc(s: string, f: (_ch: string) => boolean): string {
    return trimLeftFunc(trimRightFunc(s, f), f);
}

/**
 * TrimLeft returns a slice of the string s with all leading Unicode code points
 * contained in cutset removed.
 *
 * @param {string} s - Input string.
 * @param {string} cutset - String of characters to trim from left.
 * @returns {string} Left-trimmed string.
 */
function trimLeft(s: string, cutset: string): string {
    let i = 0;
    for (const ch of s) {
        if (!cutset.includes(ch)) { break; }
        i += ch.length;
    }
    return s.slice(i);
}

/**
 * TrimLeftFunc returns a slice of the string s with all leading Unicode code
 * points c satisfying f(c) removed.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {string} Left-trimmed string.
 */
function trimLeftFunc(s: string, f: (_ch: string) => boolean): string {
    let i = 0;
    for (const ch of s) {
        if (!f(ch)) { break; }
        i += ch.length;
    }
    return s.slice(i);
}

/**
 * TrimPrefix returns s without the provided leading prefix string.
 * If s doesn't start with prefix, s is returned unchanged.
 *
 * @param {string} s - Input string.
 * @param {string} prefix - Prefix to remove.
 * @returns {string} String without the prefix.
 * @example
 * trimPrefix("Goodbye, world!", "Goodbye, "); // "world!"
 * trimPrefix("Hello, world!", "Goodbye, ");   // "Hello, world!" — prefix not found
 * trimPrefix("ab", "abc");                    // "ab" — prefix longer than s
 * trimPrefix("", "abc");                      // "" — empty string
 */
function trimPrefix(s: string, prefix: string): string {
    if (s.startsWith(prefix)) { return s.slice(prefix.length); }
    return s;
}

/**
 * TrimRight returns a slice of the string s with all trailing Unicode code
 * points contained in cutset removed.
 *
 * @param {string} s - Input string.
 * @param {string} cutset - String of characters to trim from right.
 * @returns {string} Right-trimmed string.
 */
function trimRight(s: string, cutset: string): string {
    let end = s.length;
    const runes = [...s];
    let i = runes.length - 1;
    while (i >= 0) {
        const ch = runes[i];
        if (ch === undefined || !cutset.includes(ch)) { break; }
        end -= ch.length;
        i--;
    }
    return s.slice(0, end);
}

/**
 * TrimRightFunc returns a slice of the string s with all trailing Unicode code
 * points c satisfying f(c) removed.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {string} Right-trimmed string.
 */
function trimRightFunc(s: string, f: (_ch: string) => boolean): string {
    let end = s.length;
    const runes = [...s];
    let i = runes.length - 1;
    while (i >= 0) {
        const ch = runes[i];
        if (ch === undefined || !f(ch)) { break; }
        end -= ch.length;
        i--;
    }
    return s.slice(0, end);
}

/**
 * TrimSpace returns a slice of the string s, with all leading and trailing
 * white space removed, as defined by Unicode.
 *
 * @param {string} s - Input string.
 * @returns {string} String with whitespace trimmed from both ends.
 */
function trimSpace(s: string): string {
    return s.trim();
}

/**
 * TrimSuffix returns s without the provided trailing suffix string.
 * If s doesn't end with suffix, s is returned unchanged.
 *
 * @param {string} s - Input string.
 * @param {string} suffix - Suffix to remove.
 * @returns {string} String without the suffix.
 * @example
 * trimSuffix("Hello, goodbye!", ", goodbye!"); // "Hello"
 * trimSuffix("Hello, world!", "Goodbye");      // "Hello, world!" — suffix not found
 * trimSuffix("ab", "abc");                     // "ab" — suffix longer than s
 * trimSuffix("", "abc");                       // "" — empty string
 */
function trimSuffix(s: string, suffix: string): string {
    if (s.endsWith(suffix)) { return s.slice(0, s.length - suffix.length); }
    return s;
}

// ─── Builder ─────────────────────────────────────────────────────────────────

/**
 * Builder is used to efficiently build a string using Write methods.
 * It minimizes memory copying.
 * The zero value is ready to use. Do not copy a non-zero Builder.
 *
 * @example
 * const b = new Builder();
 * b.writeString("hello");
 * b.writeString(", world");
 * console.log(b.string()); // "hello, world"
 */
class Builder {
    private _parts: string[] = [];
    private _len = 0;

    /**
     * Cap returns the capacity of the builder's underlying byte slice.
     * It is the total space allocated for the string being built and includes
     * any bytes already written.
     *
     * @returns {number} Current capacity (equals current length in this implementation).
     */
    cap(): number {
        return this._len;
    }

    /**
     * Grow grows the builder's capacity, if necessary, to guarantee space for
     * another n bytes. After Grow(n), at least n bytes can be written to the
     * builder without another allocation.
     *
     * @param {number} _n - Number of bytes to ensure capacity for.
     */
    grow(_n: number): void {
        // No-op: JavaScript manages memory automatically
    }

    /**
     * Len returns the number of accumulated bytes (UTF-16 code units).
     *
     * @returns {number} Number of bytes written so far.
     */
    len(): number {
        return this._len;
    }

    /**
     * Reset resets the builder to be empty.
     */
    reset(): void {
        this._parts = [];
        this._len = 0;
    }

    /**
     * String returns the accumulated string.
     *
     * @returns {string} The built string.
     */
    string(): string {
        return this._parts.join("");
    }

    /**
     * Write appends the contents of p to the builder's buffer.
     * Write always returns len(p), nil.
     *
     * @param {Uint8Array} p - Bytes to write (decoded from UTF-8).
     * @returns {number} Number of bytes written.
     */
    write(p: Uint8Array): number {
        const s = new TextDecoder().decode(p);
        this._parts.push(s);
        this._len += s.length;
        return p.length;
    }

    /**
     * WriteByte appends the byte c to the builder's buffer.
     * The returned error is always nil.
     *
     * @param {number} c - Byte value (0–255) to write.
     */
    writeByte(c: number): void {
        const ch = String.fromCharCode(c);
        this._parts.push(ch);
        this._len += 1;
    }

    /**
     * WriteRune appends the UTF-8 encoding of Unicode code point r to the builder's buffer.
     * It returns the length added and a nil error.
     *
     * @param {Rune} r - Unicode code point to write.
     * @returns {number} Number of UTF-16 code units added.
     */
    writeRune(r: Rune): number {
        const ch = String.fromCodePoint(r);
        this._parts.push(ch);
        this._len += ch.length;
        return ch.length;
    }

    /**
     * WriteString appends the contents of s to the builder's buffer.
     * It returns the length of s and a nil error.
     *
     * @param {string} s - String to write.
     * @returns {number} Number of characters written.
     */
    writeString(s: string): number {
        this._parts.push(s);
        this._len += s.length;
        return s.length;
    }
}

// ─── Reader ───────────────────────────────────────────────────────────────────

/**
 * Error thrown when reading past the end of a Reader.
 */
class EOFError extends Error {
    constructor() {
        super("EOF");
        this.name = "EOFError";
    }
}

/**
 * Reader implements reading from a string.
 * It implements io.Reader, io.ReaderAt, io.ByteReader, io.ByteScanner,
 * io.RuneReader, io.RuneScanner, io.Seeker, and io.WriterTo.
 *
 * @example
 * const r = newReader("hello");
 * const b = new Uint8Array(3);
 * r.read(b); // b = [104, 101, 108]
 */
class Reader {
    private _encoded: Uint8Array;
    private _i = 0;            // current byte position
    private _prevRuneSize = -1; // byte size of last rune read (-1 if none)

    constructor(s: string) {
        this._encoded = new TextEncoder().encode(s);
    }

    /**
     * Len returns the number of bytes of the unread portion of the string.
     *
     * @returns {number} Number of unread bytes.
     */
    len(): number {
        return Math.max(0, this._encoded.length - this._i);
    }

    /**
     * Size returns the original length of the underlying string.
     * Size is the number of bytes available for reading via ReadAt.
     *
     * @returns {number} Original byte length of the string.
     */
    size(): number {
        return this._encoded.length;
    }

    /**
     * Read implements io.Reader. It reads from the string into b.
     *
     * @param {Uint8Array} b - Buffer to read into.
     * @returns {number} Number of bytes read.
     * @throws {EOFError} When no more bytes are available.
     */
    read(b: Uint8Array): number {
        if (b.length === 0) { return 0; }
        if (this._i >= this._encoded.length) {
            throw new EOFError();
        }
        const n = Math.min(b.length, this._encoded.length - this._i);
        b.set(this._encoded.subarray(this._i, this._i + n));
        this._i += n;
        this._prevRuneSize = -1;
        return n;
    }

    /**
     * ReadAt implements io.ReaderAt. It reads from the string starting at byte offset off.
     *
     * @param {Uint8Array} b - Buffer to read into.
     * @param {number} off - Byte offset to start reading from.
     * @returns {number} Number of bytes read.
     * @throws {RangeError} If off is negative.
     * @throws {EOFError} If off is past the end or fewer bytes than b are available.
     */
    readAt(b: Uint8Array, off: number): number {
        if (off < 0) { throw new RangeError("strings.Reader.readAt: negative offset"); }
        if (b.length === 0) { return 0; }
        if (off >= this._encoded.length) { throw new EOFError(); }
        const n = Math.min(b.length, this._encoded.length - off);
        b.set(this._encoded.subarray(off, off + n));
        if (n < b.length) { throw new EOFError(); }
        return n;
    }

    /**
     * ReadByte implements io.ByteReader. It reads and returns the next byte from the string.
     *
     * @returns {number} Next byte value.
     * @throws {EOFError} When no more bytes are available.
     */
    readByte(): number {
        this._prevRuneSize = -1;
        if (this._i >= this._encoded.length) { throw new EOFError(); }
        const b = this._encoded[this._i] ?? 0;
        this._i++;
        return b;
    }

    /**
     * ReadRune implements io.RuneReader. It reads and returns the next UTF-8-encoded
     * Unicode code point from the string.
     *
     * @returns {[Rune, number]} Tuple of [code point, byte size].
     * @throws {EOFError} When no more runes are available.
     */
    readRune(): [Rune, number] {
        if (this._i >= this._encoded.length) {
            this._prevRuneSize = -1;
            throw new EOFError();
        }
        const [r, size] = decodeRuneFromBytes(this._encoded, this._i);
        this._prevRuneSize = size;
        this._i += size;
        return [r, size];
    }

    /**
     * Reset resets the Reader to be reading from s.
     *
     * @param {string} s - New string to read from.
     */
    reset(s: string): void {
        this._encoded = new TextEncoder().encode(s);
        this._i = 0;
        this._prevRuneSize = -1;
    }

    /**
     * Seek implements io.Seeker. It sets the offset for the next Read or ReadAt,
     * interpreted according to whence: 0 (start), 1 (current), 2 (end).
     *
     * @param {number} offset - Byte offset.
     * @param {number} whence - Seek origin: 0=start, 1=current, 2=end.
     * @returns {number} New absolute offset.
     * @throws {Error} If whence is invalid.
     * @throws {RangeError} If resulting offset is negative.
     */
    seek(offset: number, whence: number): number {
        this._prevRuneSize = -1;
        let abs: number;
        switch (whence) {
            case 0: abs = offset; break;
            case 1: abs = this._i + offset; break;
            case 2: abs = this._encoded.length + offset; break;
            default: throw new Error("strings.Reader.seek: invalid whence");
        }
        if (abs < 0) { throw new RangeError("strings.Reader.seek: negative position"); }
        this._i = abs;
        return abs;
    }

    /**
     * UnreadByte complements ReadByte in implementing io.ByteScanner.
     *
     * @throws {Error} If the position is at the beginning of the string or the
     * previous operation was not a byte read.
     */
    unreadByte(): void {
        if (this._i <= 0) { throw new Error("strings.Reader.unreadByte: at beginning of string"); }
        // Disallow unreadByte immediately after a ReadRune.
        if (this._prevRuneSize >= 0) {
            throw new Error("strings.Reader.unreadByte: previous operation was not ReadByte");
        }
        this._i--;
    }

    /**
     * UnreadRune complements ReadRune in implementing io.RuneScanner.
     *
     * @throws {Error} If the previous operation was not ReadRune or position is at start.
     */
    unreadRune(): void {
        if (this._i <= 0) { throw new Error("strings.Reader.unreadRune: at beginning of string"); }
        if (this._prevRuneSize < 0) { throw new Error("strings.Reader.unreadRune: previous operation was not ReadRune"); }
        this._i -= this._prevRuneSize;
        this._prevRuneSize = -1;
    }

    /**
     * WriteTo implements io.WriterTo. It writes data to w until there's no more
     * data to write or when an error occurs.
     *
     * @param {Writer} w - Writer to write to.
     * @returns {number} Number of bytes written.
     */
    writeTo(w: Writer): number {
        this._prevRuneSize = -1;
        if (this._i >= this._encoded.length) { return 0; }
        const data = this._encoded.subarray(this._i);
        this._i = this._encoded.length;
        return w.write(data);
    }
}

/**
 * NewReader returns a new Reader reading from s.
 *
 * @param {string} s - String to read from.
 * @returns {Reader} A new Reader for s.
 */
function newReader(s: string): Reader {
    return new Reader(s);
}

// ─── Replacer ────────────────────────────────────────────────────────────────

/**
 * Replacer replaces a list of strings with replacements.
 * Instances are immutable after construction and can be safely reused
 * across multiple calls and asynchronous tasks.
 *
 * @example
 * const r = newReplacer("<", "&lt;", ">", "&gt;");
 * console.log(r.replace("<html>")); // "&lt;html&gt;"
 */
class Replacer {
    private _pairs: [string, string][];

    constructor(...oldnew: string[]) {
        if (oldnew.length % 2 !== 0) {
            throw new Error("strings.NewReplacer: odd argument count");
        }
        this._pairs = [];
        for (let i = 0; i < oldnew.length; i += 2) {
            this._pairs.push([oldnew[i] ?? "", oldnew[i + 1] ?? ""]);
        }
    }

    /**
     * Replace returns a copy of s with all replacements performed.
     *
     * @param {string} s - Input string.
     * @returns {string} String with replacements applied.
     */
    replace(s: string): string {
        let output = "";
        let i = 0;
        while (i < s.length) {
            let found = false;
            for (const [oldStr, newStr] of this._pairs) {
                if (oldStr === "") { continue; }
                if (s.startsWith(oldStr, i)) {
                    output += newStr;
                    i += oldStr.length;
                    found = true;
                    break;
                }
            }
            if (!found) {
                output += s.charAt(i);
                i++;
            }
        }
        return output;
    }

    /**
     * WriteString writes to w the output of r.Replace(s).
     *
     * @param {Writer} w - Writer to write to.
     * @param {string} s - Input string.
     * @returns {number} Number of bytes written.
     */
    writeString(w: Writer, s: string): number {
        const replaced = this.replace(s);
        const encoded = new TextEncoder().encode(replaced);
        return w.write(encoded);
    }
}

/**
 * NewReplacer returns a new Replacer from a list of old, new string pairs.
 * Replacements are performed in the order they appear in the target string,
 * without overlapping matches.
 *
 * @param {...string} oldnew - Alternating old/new string pairs.
 * @returns {Replacer} A new Replacer.
 */
function newReplacer(...oldnew: string[]): Replacer {
    return new Replacer(...oldnew);
}

export {
    clone,
    compare,
    contains,
    containsAny,
    containsFunc,
    containsRune,
    count,
    cut,
    cutPrefix,
    cutSuffix,
    equalFold,
    fields,
    fieldsFunc,
    fieldsFuncSeq,
    fieldsSeq,
    hasPrefix,
    hasSuffix,
    index,
    indexAny,
    indexByte,
    indexFunc,
    indexRune,
    join,
    lastIndex,
    lastIndexAny,
    lastIndexByte,
    lastIndexFunc,
    lines,
    mapString,
    repeat,
    replace,
    replaceAll,
    split,
    splitAfter,
    splitAfterN,
    splitAfterSeq,
    splitN,
    splitSeq,
    title,
    toLower,
    toLowerSpecial,
    toTitle,
    toTitleSpecial,
    toUpper,
    toUpperSpecial,
    toValidUTF8,
    trim,
    trimFunc,
    trimLeft,
    trimLeftFunc,
    trimPrefix,
    trimRight,
    trimRightFunc,
    trimSpace,
    trimSuffix,
    Builder,
    EOFError,
    Reader,
    newReader,
    Replacer,
    newReplacer,
};

export type {
    Rune,
    SpecialCase,
    Writer,
};
