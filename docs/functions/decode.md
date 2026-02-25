[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode

# Function: decode()

> **decode**(`input`, `charset?`): `string`

Defined in: [base64.ts:119](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/base64.ts#L119)

Decode a Base64 string.

## Parameters

### input

`string`

The Base64 encoded string.

### charset?

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
