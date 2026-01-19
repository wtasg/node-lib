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
export declare function parseUserAgent(ua: string): UserAgentInfo;
//# sourceMappingURL=user-agent.d.ts.map