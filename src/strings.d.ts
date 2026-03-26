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
/**
 * Clone returns a fresh copy of s.
 * It guarantees to make a copy of s into a new allocation.
 *
 * @param {string} s - Input string.
 * @returns {string} A copy of s.
 */
declare function clone(s: string): string;
/**
 * Compare returns an integer comparing two strings lexicographically.
 * The result will be 0 if a === b, -1 if a < b, and +1 if a > b.
 *
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {number} -1, 0, or 1.
 */
declare function compare(a: string, b: string): number;
/**
 * Contains reports whether substr is within s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to search for.
 * @returns {boolean} True if substr is found in s.
 */
declare function contains(s: string, substr: string): boolean;
/**
 * ContainsAny reports whether any Unicode code points in chars are within s.
 *
 * @param {string} s - Input string.
 * @param {string} chars - String of characters to search for.
 * @returns {boolean} True if any character in chars is found in s.
 */
declare function containsAny(s: string, chars: string): boolean;
/**
 * ContainsFunc reports whether any Unicode code point r in s satisfies f(r).
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function receiving each character.
 * @returns {boolean} True if any character satisfies f.
 */
declare function containsFunc(s: string, f: (_ch: string) => boolean): boolean;
/**
 * ContainsRune reports whether the Unicode code point r is within s.
 *
 * @param {string} s - Input string.
 * @param {Rune} r - Unicode code point to search for.
 * @returns {boolean} True if r is found in s.
 */
declare function containsRune(s: string, r: Rune): boolean;
/**
 * Count counts the number of non-overlapping instances of substr in s.
 * If substr is an empty string, Count returns 1 + the number of Unicode code points in s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to count.
 * @returns {number} Number of non-overlapping occurrences.
 */
declare function count(s: string, substr: string): number;
/**
 * Cut slices s around the first instance of sep,
 * returning the text before and after sep.
 * The found result reports whether sep appears in s.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {{ before: string; after: string; found: boolean }}
 */
declare function cut(s: string, sep: string): {
    before: string;
    after: string;
    found: boolean;
};
/**
 * CutPrefix returns s without the provided leading prefix string
 * and reports whether it found the prefix.
 *
 * @param {string} s - Input string.
 * @param {string} prefix - Prefix to remove.
 * @returns {{ after: string; found: boolean }}
 */
declare function cutPrefix(s: string, prefix: string): {
    after: string;
    found: boolean;
};
/**
 * CutSuffix returns s without the provided ending suffix string
 * and reports whether it found the suffix.
 *
 * @param {string} s - Input string.
 * @param {string} suffix - Suffix to remove.
 * @returns {{ before: string; found: boolean }}
 */
declare function cutSuffix(s: string, suffix: string): {
    before: string;
    found: boolean;
};
/**
 * EqualFold reports whether s and t are equal under simple Unicode case-folding.
 *
 * @param {string} s - First string.
 * @param {string} t - Second string.
 * @returns {boolean} True if s and t are equal ignoring case.
 */
declare function equalFold(s: string, t: string): boolean;
/**
 * Fields splits the string s around each instance of one or more consecutive
 * white space characters, returning an array of substrings.
 * If s contains only white space, an empty array is returned.
 *
 * @param {string} s - Input string.
 * @returns {string[]} Array of whitespace-separated fields.
 */
declare function fields(s: string): string[];
/**
 * FieldsFunc splits the string s at each run of code points c satisfying f(c)
 * and returns an array of slices of s.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate; split at runs of characters satisfying f.
 * @returns {string[]} Array of fields.
 */
declare function fieldsFunc(s: string, f: (_ch: string) => boolean): string[];
/**
 * FieldsFuncSeq returns an iterator over substrings of s split around
 * runs of code points satisfying f(c).
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate; split at runs of characters satisfying f.
 * @returns {Generator<string, void, unknown>} Iterator over fields.
 */
declare function fieldsFuncSeq(s: string, f: (_ch: string) => boolean): Generator<string, void, unknown>;
/**
 * FieldsSeq returns an iterator over substrings of s, split around each
 * instance of one or more consecutive white space characters.
 *
 * @param {string} s - Input string.
 * @returns {Generator<string, void, unknown>} Iterator over whitespace-separated fields.
 */
declare function fieldsSeq(s: string): Generator<string, void, unknown>;
/**
 * HasPrefix reports whether the string s begins with prefix.
 *
 * @param {string} s - Input string.
 * @param {string} prefix - Prefix to check.
 * @returns {boolean} True if s starts with prefix.
 */
declare function hasPrefix(s: string, prefix: string): boolean;
/**
 * HasSuffix reports whether the string s ends with suffix.
 *
 * @param {string} s - Input string.
 * @param {string} suffix - Suffix to check.
 * @returns {boolean} True if s ends with suffix.
 */
declare function hasSuffix(s: string, suffix: string): boolean;
/**
 * Index returns the index of the first instance of substr in s,
 * or -1 if substr is not present in s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to find.
 * @returns {number} Index of first occurrence, or -1.
 */
declare function index(s: string, substr: string): number;
/**
 * IndexAny returns the index of the first instance of any Unicode code point
 * from chars in s, or -1 if no Unicode code point from chars is present in s.
 *
 * @param {string} s - Input string.
 * @param {string} chars - String of characters to search for.
 * @returns {number} Index of first matching character, or -1.
 */
declare function indexAny(s: string, chars: string): number;
/**
 * IndexByte returns the index of the first instance of the byte b in s,
 * or -1 if b is not present in s.
 *
 * @param {string} s - Input string.
 * @param {number} c - Byte value (0–255) to search for.
 * @returns {number} Index of first occurrence, or -1.
 */
declare function indexByte(s: string, c: number): number;
/**
 * IndexFunc returns the index into s of the first Unicode code point
 * satisfying f(c), or -1 if none do.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {number} Index of first matching character, or -1.
 */
declare function indexFunc(s: string, f: (_ch: string) => boolean): number;
/**
 * IndexRune returns the index of the first instance of the Unicode code point r in s,
 * or -1 if r is not present in s.
 *
 * @param {string} s - Input string.
 * @param {Rune} r - Unicode code point to find.
 * @returns {number} Index of first occurrence, or -1.
 */
declare function indexRune(s: string, r: Rune): number;
/**
 * Join concatenates the elements of its first argument to create a single string.
 * The separator string sep is placed between elements in the resulting string.
 *
 * @param {string[]} elems - Strings to join.
 * @param {string} sep - Separator.
 * @returns {string} Joined string.
 */
declare function join(elems: string[], sep: string): string;
/**
 * LastIndex returns the index of the last instance of substr in s,
 * or -1 if substr is not present in s.
 *
 * @param {string} s - Input string.
 * @param {string} substr - Substring to find.
 * @returns {number} Index of last occurrence, or -1.
 */
declare function lastIndex(s: string, substr: string): number;
/**
 * LastIndexAny returns the index of the last instance of any Unicode code point
 * from chars in s, or -1 if no Unicode code point from chars is present in s.
 *
 * @param {string} s - Input string.
 * @param {string} chars - String of characters to search for.
 * @returns {number} Index of last matching character, or -1.
 */
declare function lastIndexAny(s: string, chars: string): number;
/**
 * LastIndexByte returns the index of the last instance of the byte c in s,
 * or -1 if c is not present in s.
 *
 * @param {string} s - Input string.
 * @param {number} c - Byte value (0–255) to search for.
 * @returns {number} Index of last occurrence, or -1.
 */
declare function lastIndexByte(s: string, c: number): number;
/**
 * LastIndexFunc returns the index into s of the last Unicode code point
 * satisfying f(c), or -1 if none do.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {number} Index of last matching character, or -1.
 */
declare function lastIndexFunc(s: string, f: (_ch: string) => boolean): number;
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
declare function lines(s: string): Generator<string, void, unknown>;
/**
 * Map returns a copy of the string s with all its characters modified
 * according to the mapping function. If mapping returns a negative value,
 * the character is dropped from the string with no replacement.
 *
 * @param {(r: Rune) => Rune} mapping - Maps each code point to a new code point.
 * @param {string} s - Input string.
 * @returns {string} Mapped string.
 */
declare function mapString(mapping: (_r: Rune) => Rune, s: string): string;
/**
 * Repeat returns a new string consisting of count copies of the string s.
 *
 * @param {string} s - String to repeat.
 * @param {number} count - Number of repetitions (must be non-negative).
 * @returns {string} Repeated string.
 * @throws {RangeError} If count is negative.
 */
declare function repeat(s: string, n: number): string;
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
 */
declare function replace(s: string, old: string, newStr: string, n: number): string;
/**
 * ReplaceAll returns a copy of the string s with all non-overlapping instances
 * of old replaced by newStr.
 *
 * @param {string} s - Input string.
 * @param {string} old - String to replace.
 * @param {string} newStr - Replacement string.
 * @returns {string} String with all replacements applied.
 */
declare function replaceAll(s: string, old: string, newStr: string): string;
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
declare function split(s: string, sep: string): string[];
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
declare function splitN(s: string, sep: string, n: number): string[];
/**
 * SplitAfter slices s into all substrings after each instance of sep and
 * returns a slice of those substrings.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {string[]} Array of substrings including separator.
 */
declare function splitAfter(s: string, sep: string): string[];
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
declare function splitAfterN(s: string, sep: string, n: number): string[];
/**
 * SplitSeq returns an iterator over all substrings of s separated by sep.
 * If sep is empty, SplitSeq splits after each UTF-8 sequence.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {Generator<string, void, unknown>} Iterator over substrings.
 */
declare function splitSeq(s: string, sep: string): Generator<string, void, unknown>;
/**
 * SplitAfterSeq returns an iterator over substrings of s split after each
 * instance of sep.
 *
 * @param {string} s - Input string.
 * @param {string} sep - Separator string.
 * @returns {Generator<string, void, unknown>} Iterator over substrings including separator.
 */
declare function splitAfterSeq(s: string, sep: string): Generator<string, void, unknown>;
/**
 * Title returns a copy of the string s with all Unicode letters that begin words
 * mapped to their Unicode title case.
 *
 * @deprecated Use cases/runes packages or golang.org/x/text/cases for proper title casing.
 * @param {string} s - Input string.
 * @returns {string} Title-cased string.
 */
declare function title(s: string): string;
/**
 * ToLower returns s with all Unicode letters mapped to their lower case.
 *
 * @param {string} s - Input string.
 * @returns {string} Lower-cased string.
 */
declare function toLower(s: string): string;
/**
 * ToLowerSpecial returns a copy of the string s with all Unicode letters mapped
 * to their lower case using the rules of the special case c (locale).
 *
 * @param {SpecialCase} c - Locale identifier (e.g. "tr", "az").
 * @param {string} s - Input string.
 * @returns {string} Locale-lower-cased string.
 */
declare function toLowerSpecial(c: SpecialCase, s: string): string;
/**
 * ToTitle returns a copy of the string s with all Unicode letters mapped to
 * their Unicode title case.
 *
 * @param {string} s - Input string.
 * @returns {string} Title-cased string (all letters upper-cased for ASCII).
 */
declare function toTitle(s: string): string;
/**
 * ToTitleSpecial returns a copy of the string s with all Unicode letters mapped
 * to their Unicode title case, giving priority to the special casing rules in c.
 *
 * @param {SpecialCase} c - Locale identifier (e.g. "tr", "az").
 * @param {string} s - Input string.
 * @returns {string} Locale-upper-cased string.
 */
declare function toTitleSpecial(c: SpecialCase, s: string): string;
/**
 * ToUpper returns s with all Unicode letters mapped to their upper case.
 *
 * @param {string} s - Input string.
 * @returns {string} Upper-cased string.
 */
declare function toUpper(s: string): string;
/**
 * ToUpperSpecial returns a copy of the string s with all Unicode letters mapped
 * to their upper case using the rules of the special case c (locale).
 *
 * @param {SpecialCase} c - Locale identifier (e.g. "tr", "az").
 * @param {string} s - Input string.
 * @returns {string} Locale-upper-cased string.
 */
declare function toUpperSpecial(c: SpecialCase, s: string): string;
/**
 * ToValidUTF8 returns a copy of the string s with each run of invalid UTF-16
 * code units (lone surrogates) replaced by the replacement string, which may
 * be empty.
 *
 * @param {string} s - Input string.
 * @param {string} replacement - Replacement string for invalid sequences.
 * @returns {string} String with invalid sequences replaced.
 */
declare function toValidUTF8(s: string, replacement: string): string;
/**
 * Trim returns a slice of the string s with all leading and trailing Unicode
 * code points contained in cutset removed.
 *
 * @param {string} s - Input string.
 * @param {string} cutset - String of characters to trim.
 * @returns {string} Trimmed string.
 */
declare function trim(s: string, cutset: string): string;
/**
 * TrimFunc returns a slice of the string s with all leading and trailing Unicode
 * code points c satisfying f(c) removed.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {string} Trimmed string.
 */
declare function trimFunc(s: string, f: (_ch: string) => boolean): string;
/**
 * TrimLeft returns a slice of the string s with all leading Unicode code points
 * contained in cutset removed.
 *
 * @param {string} s - Input string.
 * @param {string} cutset - String of characters to trim from left.
 * @returns {string} Left-trimmed string.
 */
declare function trimLeft(s: string, cutset: string): string;
/**
 * TrimLeftFunc returns a slice of the string s with all leading Unicode code
 * points c satisfying f(c) removed.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {string} Left-trimmed string.
 */
declare function trimLeftFunc(s: string, f: (_ch: string) => boolean): string;
/**
 * TrimPrefix returns s without the provided leading prefix string.
 * If s doesn't start with prefix, s is returned unchanged.
 *
 * @param {string} s - Input string.
 * @param {string} prefix - Prefix to remove.
 * @returns {string} String without the prefix.
 */
declare function trimPrefix(s: string, prefix: string): string;
/**
 * TrimRight returns a slice of the string s with all trailing Unicode code
 * points contained in cutset removed.
 *
 * @param {string} s - Input string.
 * @param {string} cutset - String of characters to trim from right.
 * @returns {string} Right-trimmed string.
 */
declare function trimRight(s: string, cutset: string): string;
/**
 * TrimRightFunc returns a slice of the string s with all trailing Unicode code
 * points c satisfying f(c) removed.
 *
 * @param {string} s - Input string.
 * @param {(ch: string) => boolean} f - Predicate function.
 * @returns {string} Right-trimmed string.
 */
declare function trimRightFunc(s: string, f: (_ch: string) => boolean): string;
/**
 * TrimSpace returns a slice of the string s, with all leading and trailing
 * white space removed, as defined by Unicode.
 *
 * @param {string} s - Input string.
 * @returns {string} String with whitespace trimmed from both ends.
 */
declare function trimSpace(s: string): string;
/**
 * TrimSuffix returns s without the provided trailing suffix string.
 * If s doesn't end with suffix, s is returned unchanged.
 *
 * @param {string} s - Input string.
 * @param {string} suffix - Suffix to remove.
 * @returns {string} String without the suffix.
 */
declare function trimSuffix(s: string, suffix: string): string;
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
declare class Builder {
    private _parts;
    private _len;
    /**
     * Cap returns the capacity of the builder's underlying byte slice.
     * It is the total space allocated for the string being built and includes
     * any bytes already written.
     *
     * @returns {number} Current capacity (equals current length in this implementation).
     */
    cap(): number;
    /**
     * Grow grows the builder's capacity, if necessary, to guarantee space for
     * another n bytes. After Grow(n), at least n bytes can be written to the
     * builder without another allocation.
     *
     * @param {number} _n - Number of bytes to ensure capacity for.
     */
    grow(_n: number): void;
    /**
     * Len returns the number of accumulated bytes (UTF-16 code units).
     *
     * @returns {number} Number of bytes written so far.
     */
    len(): number;
    /**
     * Reset resets the builder to be empty.
     */
    reset(): void;
    /**
     * String returns the accumulated string.
     *
     * @returns {string} The built string.
     */
    string(): string;
    /**
     * Write appends the contents of p to the builder's buffer.
     * Write always returns len(p), nil.
     *
     * @param {Uint8Array} p - Bytes to write (decoded from UTF-8).
     * @returns {number} Number of bytes written.
     */
    write(p: Uint8Array): number;
    /**
     * WriteByte appends the byte c to the builder's buffer.
     * The returned error is always nil.
     *
     * @param {number} c - Byte value (0–255) to write.
     */
    writeByte(c: number): void;
    /**
     * WriteRune appends the UTF-8 encoding of Unicode code point r to the builder's buffer.
     * It returns the length added and a nil error.
     *
     * @param {Rune} r - Unicode code point to write.
     * @returns {number} Number of UTF-16 code units added.
     */
    writeRune(r: Rune): number;
    /**
     * WriteString appends the contents of s to the builder's buffer.
     * It returns the length of s and a nil error.
     *
     * @param {string} s - String to write.
     * @returns {number} Number of characters written.
     */
    writeString(s: string): number;
}
/**
 * Error thrown when reading past the end of a Reader.
 */
declare class EOFError extends Error {
    constructor();
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
declare class Reader {
    private _encoded;
    private _i;
    private _prevRuneSize;
    constructor(s: string);
    /**
     * Len returns the number of bytes of the unread portion of the string.
     *
     * @returns {number} Number of unread bytes.
     */
    len(): number;
    /**
     * Size returns the original length of the underlying string.
     * Size is the number of bytes available for reading via ReadAt.
     *
     * @returns {number} Original byte length of the string.
     */
    size(): number;
    /**
     * Read implements io.Reader. It reads from the string into b.
     *
     * @param {Uint8Array} b - Buffer to read into.
     * @returns {number} Number of bytes read.
     * @throws {EOFError} When no more bytes are available.
     */
    read(b: Uint8Array): number;
    /**
     * ReadAt implements io.ReaderAt. It reads from the string starting at byte offset off.
     *
     * @param {Uint8Array} b - Buffer to read into.
     * @param {number} off - Byte offset to start reading from.
     * @returns {number} Number of bytes read.
     * @throws {RangeError} If off is negative.
     * @throws {EOFError} If off is past the end or fewer bytes than b are available.
     */
    readAt(b: Uint8Array, off: number): number;
    /**
     * ReadByte implements io.ByteReader. It reads and returns the next byte from the string.
     *
     * @returns {number} Next byte value.
     * @throws {EOFError} When no more bytes are available.
     */
    readByte(): number;
    /**
     * ReadRune implements io.RuneReader. It reads and returns the next UTF-8-encoded
     * Unicode code point from the string.
     *
     * @returns {[Rune, number]} Tuple of [code point, byte size].
     * @throws {EOFError} When no more runes are available.
     */
    readRune(): [Rune, number];
    /**
     * Reset resets the Reader to be reading from s.
     *
     * @param {string} s - New string to read from.
     */
    reset(s: string): void;
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
    seek(offset: number, whence: number): number;
    /**
     * UnreadByte complements ReadByte in implementing io.ByteScanner.
     *
     * @throws {Error} If the position is at the beginning of the string.
     */
    unreadByte(): void;
    /**
     * UnreadRune complements ReadRune in implementing io.RuneScanner.
     *
     * @throws {Error} If the previous operation was not ReadRune or position is at start.
     */
    unreadRune(): void;
    /**
     * WriteTo implements io.WriterTo. It writes data to w until there's no more
     * data to write or when an error occurs.
     *
     * @param {Writer} w - Writer to write to.
     * @returns {number} Number of bytes written.
     */
    writeTo(w: Writer): number;
}
/**
 * NewReader returns a new Reader reading from s.
 *
 * @param {string} s - String to read from.
 * @returns {Reader} A new Reader for s.
 */
declare function newReader(s: string): Reader;
/**
 * Replacer replaces a list of strings with replacements.
 * It is safe for concurrent use by multiple goroutines.
 *
 * @example
 * const r = newReplacer("<", "&lt;", ">", "&gt;");
 * console.log(r.replace("<html>")); // "&lt;html&gt;"
 */
declare class Replacer {
    private _pairs;
    constructor(...oldnew: string[]);
    /**
     * Replace returns a copy of s with all replacements performed.
     *
     * @param {string} s - Input string.
     * @returns {string} String with replacements applied.
     */
    replace(s: string): string;
    /**
     * WriteString writes to w the output of r.Replace(s).
     *
     * @param {Writer} w - Writer to write to.
     * @param {string} s - Input string.
     * @returns {number} Number of bytes written.
     */
    writeString(w: Writer, s: string): number;
}
/**
 * NewReplacer returns a new Replacer from a list of old, new string pairs.
 * Replacements are performed in the order they appear in the target string,
 * without overlapping matches.
 *
 * @param {...string} oldnew - Alternating old/new string pairs.
 * @returns {Replacer} A new Replacer.
 */
declare function newReplacer(...oldnew: string[]): Replacer;
export { clone, compare, contains, containsAny, containsFunc, containsRune, count, cut, cutPrefix, cutSuffix, equalFold, fields, fieldsFunc, fieldsFuncSeq, fieldsSeq, hasPrefix, hasSuffix, index, indexAny, indexByte, indexFunc, indexRune, join, lastIndex, lastIndexAny, lastIndexByte, lastIndexFunc, lines, mapString, repeat, replace, replaceAll, split, splitAfter, splitAfterN, splitAfterSeq, splitN, splitSeq, title, toLower, toLowerSpecial, toTitle, toTitleSpecial, toUpper, toUpperSpecial, toValidUTF8, trim, trimFunc, trimLeft, trimLeftFunc, trimPrefix, trimRight, trimRightFunc, trimSpace, trimSuffix, Builder, EOFError, Reader, newReader, Replacer, newReplacer, };
export type { Rune, SpecialCase, Writer, };
//# sourceMappingURL=strings.d.ts.map