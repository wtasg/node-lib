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
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
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
class Anchor {
    href;
    text;
    constructor(href = "#", text = "#") {
        this.href = href;
        this.text = text;
    }
    toString() {
        return `<a href="${escapeHtml(this.href)}">${escapeHtml(this.text)}</a>`;
    }
}
export { Anchor, escapeHtml, };
//# sourceMappingURL=anchor.js.map