/**
 * Information extracted from a user-agent string.
 */
export interface UserAgentInfo {
    /**
     * Browser name (e.g., Chrome, Firefox, Safari, Edge, Opera, Other).
     */
    browser: string;
    /**
     * Browser version (e.g., 120.0.0.0).
     */
    version: string;
    /**
     * Operating system (e.g., Windows, macOS, Linux, iOS, Android, Other).
     */
    os: string;
    /**
     * Device type (e.g., Mobile, Tablet, Desktop, Other).
     */
    device: string;
    /**
     * Rendering engine (e.g., Blink, WebKit, Gecko, Presto, Other).
     */
    engine: string;
}

/**
 * Parses a user-agent string into a UserAgentInfo object.
 *
 * @param ua - The user-agent string to parse.
 * @returns An object containing the extracted information.
 *
 * @example
 * ```typescript
 * // Success Example (Chrome on Windows)
 * const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
 * const info = parseUserAgent(ua);
 * // { browser: "Chrome", version: "120.0.0.0", os: "Windows", device: "Desktop", engine: "Blink" }
 * ```
 *
 * @example
 * ```typescript
 * // Error/Fallback Example (Empty string)
 * const info = parseUserAgent("");
 * // { browser: "Other", version: "0", os: "Other", device: "Desktop", engine: "Other" }
 * ```
 */
export function parseUserAgent(ua: string): UserAgentInfo {
    if (!ua) {
        return {
            browser: "Other",
            version: "0",
            os: "Other",
            device: "Desktop",
            engine: "Other",
        };
    }

    const browserInfo = detectBrowser(ua);
    return {
        browser: browserInfo.name,
        version: browserInfo.version,
        os: detectOS(ua),
        device: detectDeviceType(ua),
        engine: detectEngine(ua),
    };
}

/**
 * Detects the browser name and version from a user-agent string.
 *
 * @param ua - The user-agent string.
 * @returns An object with name and version.
 *
 * @example
 * ```typescript
 * // Success Example
 * detectBrowser("Mozilla/5.0 ... Firefox/121.0");
 * // { name: "Firefox", version: "121.0" }
 * ```
 *
 * @example
 * ```typescript
 * // Error/Fallback Example
 * detectBrowser("UnknownBot/1.0");
 * // { name: "Other", version: "0" }
 * ```
 */
function detectBrowser(ua: string): { name: string; version: string } {
    let name = "Other";
    let version = "0";

    if (ua.includes("Edg/")) {
        name = "Edge";
        version = ua.split("Edg/")[1]?.split(" ")[0] || "0";
    } else if (ua.includes("Chrome/") && !ua.includes("Chromium/")) {
        name = "Chrome";
        version = ua.split("Chrome/")[1]?.split(" ")[0] || "0";
    } else if (ua.includes("Safari/") && !ua.includes("Chrome/")) {
        name = "Safari";
        version = ua.split("Version/")[1]?.split(" ")[0] || ua.split("Safari/")[1]?.split(" ")[0] || "0";
    } else if (ua.includes("Firefox/")) {
        name = "Firefox";
        version = ua.split("Firefox/")[1]?.split(" ")[0] || "0";
    } else if (ua.includes("OPR/") || ua.includes("Opera/")) {
        name = "Opera";
        version = (ua.split("OPR/")[1] || ua.split("Opera/")[1])?.split(" ")[0] || "0";
    }

    return { name, version };
}

/**
 * Detects the operating system from a user-agent string.
 *
 * @param ua - The user-agent string.
 * @returns The operating system name.
 *
 * @example
 * ```typescript
 * // Success Example
 * detectOS("Mozilla/5.0 (iPhone; ...)");
 * // "iOS"
 * ```
 *
 * @example
 * ```typescript
 * // Error/Fallback Example
 * detectOS("Custom OS");
 * // "Other"
 * ```
 */
function detectOS(ua: string): string {
    if (ua.includes("iPhone") || ua.includes("iPad") || ua.includes("iPod")) { return "iOS"; }
    if (ua.includes("Windows")) { return "Windows"; }
    if (ua.includes("Mac OS X")) { return "macOS"; }
    if (ua.includes("Android")) { return "Android"; }
    if (ua.includes("Linux")) { return "Linux"; }
    return "Other";
}

/**
 * Detects the device type (Desktop, Mobile, Tablet) from a user-agent string.
 *
 * @param ua - The user-agent string.
 * @returns The device type.
 *
 * @example
 * ```typescript
 * // Success Example
 * detectDeviceType("Mozilla/5.0 (iPad; ...)");
 * // "Tablet"
 * ```
 *
 * @example
 * ```typescript
 * // Error/Fallback Example
 * detectDeviceType("Generic Browser");
 * // "Desktop"
 * ```
 */
function detectDeviceType(ua: string): string {
    if (ua.includes("iPad") || (ua.includes("Android") && !ua.includes("Mobile"))) {
        return "Tablet";
    }
    if (ua.includes("Mobi")) {
        return "Mobile";
    }
    return "Desktop";
}

/**
 * Detects the rendering engine from a user-agent string.
 *
 * @param ua - The user-agent string.
 * @returns The engine name.
 *
 * @example
 * ```typescript
 * // Success Example
 * detectEngine("Mozilla/5.0 ... AppleWebKit/537.36 ...");
 * // "Blink"
 * ```
 *
 * @example
 * ```typescript
 * // Error/Fallback Example
 * detectEngine("Unknown Engine");
 * // "Other"
 * ```
 */
function detectEngine(ua: string): string {
    // Blink check must come first: Chrome/Chromium browsers use AppleWebKit but are Blink-based
    if (ua.includes("Chrome/") && ua.includes("AppleWebKit/")) { return "Blink"; }
    if (ua.includes("AppleWebKit")) { return "WebKit"; }
    if (ua.includes("Gecko/")) { return "Gecko"; }
    if (ua.includes("Presto/")) { return "Presto"; }
    return "Other";
}
