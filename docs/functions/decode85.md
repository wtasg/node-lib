[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode85

# Function: decode85()

> **decode85**(`input`, `charset?`): `string`

Defined in: [src/base85.ts:135](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/base85.ts#L135)

Decode a Base85 string.

## Parameters

### input

`string`

The Base85 encoded string.

### charset?

`"ascii85"` \| `"z85"` \| `"rfc1924"`

The charset variant to use (default: "ascii85").

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
