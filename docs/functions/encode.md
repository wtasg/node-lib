[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode

# Function: encode()

> **encode**(`input`, `charset`): `string`

Defined in: [base64.ts:79](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/base64.ts#L79)

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
