[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode

# Function: encode()

> **encode**(`input`, `charset?`): `string`

Defined in: [src/base64.ts:79](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/base64.ts#L79)

Encode a string to Base64.

## Parameters

### input

`string`

The string to encode.

### charset?

`"standard"` \| `"urlsafe"` \| `"imap"` \| `"radix64"`

The charset variant to use (default: "standard").

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
