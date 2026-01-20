[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode85

# Function: decode85()

> **decode85**(`input`, `charset`): `string`

Defined in: [base85.ts:135](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/base85.ts#L135)

Decode a Base85 string.

## Parameters

### input

`string`

The Base85 encoded string.

### charset

The charset variant to use (default: "ascii85").

`"ascii85"` | `"z85"` | `"rfc1924"`

## Returns

`string`

The decoded string.

## Example

```typescript
import { decode85 } from "./base85.js";

decode85("87cURDZ");
// => "Hello"

decode85("wrx.P", "z85");
// => "test"
```

## Throws

Error if the input contains invalid characters.
