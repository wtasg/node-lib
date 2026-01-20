[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode32

# Function: decode32()

> **decode32**(`input`, `charset`): `string`

Defined in: [base32.ts:136](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/base32.ts#L136)

Decode a Base32 string.

## Parameters

### input

`string`

The Base32 encoded string.

### charset

The charset variant to use (default: "rfc4648").

`"rfc4648"` | `"hex"` | `"crockford"`

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
