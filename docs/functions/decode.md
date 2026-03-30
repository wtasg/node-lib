[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode

# Function: decode()

> **decode**(`input`, `charset?`): `string`

Defined in: [src/base64.ts:119](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/base64.ts#L119)

Decode a Base64 string.

## Parameters

### input

`string`

The Base64 encoded string.

### charset?

`"standard"` \| `"urlsafe"` \| `"imap"` \| `"radix64"`

The charset variant to use (default: "standard").

## Returns

`string`

The decoded string.

## Example

```typescript
import { decode } from "./base64.js";

decode("SGVsbG8sIFdvcmxkIQ==");
// => "Hello, World!"

decode("SGVsbG8sIFdvcmxkIQ==", "standard");
// => "Hello, World!"
```

## Throws

Error if the input contains invalid characters.
