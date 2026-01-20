[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode85

# Function: encode85()

> **encode85**(`input`, `charset`): `string`

Defined in: [base85.ts:73](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/base85.ts#L73)

Encode a string to Base85.

## Parameters

### input

`string`

The string to encode.

### charset

The charset variant to use (default: "ascii85").

`"ascii85"` | `"z85"` | `"rfc1924"`

## Returns

`string`

The Base85 encoded string.

## Example

```typescript
import { encode85 } from "./base85.js";

encode85("Hello");
// => "87cURDZ"

encode85("test", "z85");
// => "wrx.P"
```
