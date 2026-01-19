[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / parseUserAgent

# Function: parseUserAgent()

> **parseUserAgent**(`ua`): [`UserAgentInfo`](../interfaces/UserAgentInfo.md)

Defined in: [user-agent.ts:48](https://github.com/wtasg/node-lib/blob/b5efd5c345e8fa1bdc2a6d3ea4dd4b2eb5b9cc62/src/user-agent.ts#L48)

Parses a user-agent string into a UserAgentInfo object.

## Parameters

### ua

`string`

The user-agent string to parse.

## Returns

[`UserAgentInfo`](../interfaces/UserAgentInfo.md)

An object containing the extracted information.

## Examples

```typescript
// Success Example (Chrome on Windows)
const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const info = parseUserAgent(ua);
// { browser: "Chrome", version: "120.0.0.0", os: "Windows", device: "Desktop", engine: "Blink" }
```

```typescript
// Error/Fallback Example (Empty string)
const info = parseUserAgent("");
// { browser: "Other", version: "0", os: "Other", device: "Desktop", engine: "Other" }
```
