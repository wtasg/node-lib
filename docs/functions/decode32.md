[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode32

# Function: decode32()

> **decode32**(`input`, `charset?`): `string`

Defined in: [src/base32.ts:136](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/base32.ts#L136)

Decode a Base32 string.

## Parameters

### input

`string`

The Base32 encoded string.

### charset?

`"rfc4648"` \| `"hex"` \| `"crockford"`

The charset variant to use (default: "rfc4648").

## Returns

`string`

The decoded string.

## Example

```typescript
import { decode32 } from "./base32.js";

decode32("JBSWY3DP");
// => "Hello"

decode32("EHMP6SS=", "hex");
// => "test"
```

## Throws

Error if the input contains invalid characters.
