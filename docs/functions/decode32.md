[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode32

# Function: decode32()

> **decode32**(`input`, `charset?`): `string`

Defined in: [base32.ts:136](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/base32.ts#L136)

Decode a Base32 string.

## Parameters

### input

`string`

The Base32 encoded string.

### charset?

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
