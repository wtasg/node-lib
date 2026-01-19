import { test } from "node:test";
import assert from "node:assert";
import { parseUserAgent } from "./user-agent.js";
test("parseUserAgent - Chrome on Windows", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    const info = parseUserAgent(ua);
    assert.strictEqual(info.browser, "Chrome");
    assert.strictEqual(info.os, "Windows");
    assert.strictEqual(info.device, "Desktop");
    assert.strictEqual(info.version, "120.0.0.0");
});
test("parseUserAgent - Firefox on macOS", () => {
    const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14.2; rv:121.0) Gecko/20100101 Firefox/121.0";
    const info = parseUserAgent(ua);
    assert.strictEqual(info.browser, "Firefox");
    assert.strictEqual(info.os, "macOS");
    assert.strictEqual(info.version, "121.0");
    assert.strictEqual(info.engine, "Gecko");
});
test("parseUserAgent - Safari on iPhone", () => {
    const ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1";
    const info = parseUserAgent(ua);
    assert.strictEqual(info.browser, "Safari");
    assert.strictEqual(info.os, "iOS");
    assert.strictEqual(info.device, "Mobile");
    assert.strictEqual(info.version, "17.2");
});
test("parseUserAgent - Edge on Windows", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0";
    const info = parseUserAgent(ua);
    assert.strictEqual(info.browser, "Edge");
    assert.strictEqual(info.os, "Windows");
    assert.strictEqual(info.version, "120.0.0.0");
});
test("parseUserAgent - Chrome on Android (Mobile)", () => {
    const ua = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36";
    const info = parseUserAgent(ua);
    assert.strictEqual(info.browser, "Chrome");
    assert.strictEqual(info.os, "Android");
    assert.strictEqual(info.device, "Mobile");
});
test("parseUserAgent - Android Tablet", () => {
    const ua = "Mozilla/5.0 (Linux; Android 10; SM-T510) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    const info = parseUserAgent(ua);
    assert.strictEqual(info.browser, "Chrome");
    assert.strictEqual(info.os, "Android");
    assert.strictEqual(info.device, "Tablet");
});
test("parseUserAgent - Empty/Null UA", () => {
    const info = parseUserAgent("");
    assert.strictEqual(info.browser, "Other");
    assert.strictEqual(info.device, "Desktop");
});
//# sourceMappingURL=user-agent.test.js.map