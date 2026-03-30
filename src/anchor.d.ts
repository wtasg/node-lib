/**
 * HTML anchor element builder with safe escaping.
 *
 * @module anchor
 */
/**
 * Escape special HTML characters in a string to prevent XSS.
 *
 * @param str - Raw string.
 * @returns HTML-safe string.
 */
declare function escapeHtml(str: string): string;
/**
 * A simple builder for an HTML `<a>` element.
 *
 * Both `href` and `text` are HTML-escaped in `toString()` output.
 *
 * @example
 * ```ts
 * const link = new Anchor("https://example.com", "Example");
 * link.toString(); // '<a href="https://example.com">Example</a>'
 * ```
 */
declare class Anchor {
    href: string;
    text: string;
    constructor(href?: string, text?: string);
    toString(): string;
}
export { Anchor, escapeHtml, };
//# sourceMappingURL=anchor.d.ts.map