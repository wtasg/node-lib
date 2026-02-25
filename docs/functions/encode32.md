[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode32

# Function: encode32()

> **encode32**(`input`, `charset?`): `string`

Defined in: [base32.ts:81](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/base32.ts#L81)

Encode a string to Base32.

## Parameters

### input

`string`

The string to encode.

### charset?

The charset variant to use (default: "rfc4648").

`"rfc4648"` | `"hex"` | `"crockford"`

## Returns

`string`

The Base32 encoded string.

## Example

```typescript
import { encode32 } from "./base32.js";

encode32("Hello");
// => "JBSWY3DP"

encode32("test", "hex");
// => "EHMP6SS="
```
