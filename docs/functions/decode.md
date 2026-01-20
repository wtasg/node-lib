[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode

# Function: decode()

> **decode**(`input`, `charset`): `string`

Defined in: [base64.ts:119](https://github.com/wtasg/node-lib/blob/7baf8669b7042dca550ec8a4beb26526d3b538b4/src/base64.ts#L119)

Decode a Base64 string.

## Parameters

### input

`string`

The Base64 encoded string.

### charset

The charset variant to use (default: "standard").

`"standard"` | `"urlsafe"` | `"imap"` | `"radix64"`

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
