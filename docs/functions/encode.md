[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode

# Function: encode()

> **encode**(`input`, `charset`): `string`

Defined in: [base64.ts:79](https://github.com/wtasg/node-lib/blob/7baf8669b7042dca550ec8a4beb26526d3b538b4/src/base64.ts#L79)

Encode a string to Base64.

## Parameters

### input

`string`

The string to encode.

### charset

The charset variant to use (default: "standard").

`"standard"` | `"urlsafe"` | `"imap"` | `"radix64"`

## Returns

`string`

The Base64 encoded string.

## Example

```typescript
import { encode } from "./base64.js";

encode("Hello, World!");
// => "SGVsbG8sIFdvcmxkIQ=="

encode("Hello, World!", "urlsafe");
// => "SGVsbG8sIFdvcmxkIQ=="
```
