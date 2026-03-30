import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { Anchor, escapeHtml } from "./anchor.js";

describe("Anchor", () => {
    it("creates a default anchor", () => {
        const a = new Anchor();
        strictEqual(a.toString(), "<a href=\"#\">#</a>");
    });

    it("creates an anchor with href and text", () => {
        const a = new Anchor("https://example.com", "Example");
        strictEqual(
            a.toString(),
            "<a href=\"https://example.com\">Example</a>",
        );
    });

    it("escapes HTML in href", () => {
        const a = new Anchor("\"><script>alert(1)</script>", "safe");
        const html = a.toString();
        strictEqual(html.includes("<script>"), false);
        strictEqual(
            html,
            "<a href=\"&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;\">safe</a>",
        );
    });

    it("escapes HTML in text", () => {
        const a = new Anchor("#", "<b>bold</b>");
        strictEqual(
            a.toString(),
            "<a href=\"#\">&lt;b&gt;bold&lt;/b&gt;</a>",
        );
    });
});

describe("escapeHtml", () => {
    it("escapes ampersands", () => {
        strictEqual(escapeHtml("a&b"), "a&amp;b");
    });

    it("escapes angle brackets and quotes", () => {
        strictEqual(escapeHtml("<\"hi\">"), "&lt;&quot;hi&quot;&gt;");
    });

    it("returns plain text unchanged", () => {
        strictEqual(escapeHtml("hello"), "hello");
    });
});
