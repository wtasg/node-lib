[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode58

# Function: encode58()

> **encode58**(`input`, `charset?`): `string`

Defined in: [base58.ts:72](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/base58.ts#L72)

Encode a string to Base58.

## Parameters

### input

`string`

The string to encode.

### charset?

The charset variant to use (default: "bitcoin").

`"bitcoin"` | `"flickr"` | `"ripple"`

## Returns

`string`

The Base58 encoded string.

## Example

```typescript
import { encode58 } from "./base58.js";

encode58("Hello World");
// => "JxF12TrwUP45BMd"

encode58("Hello World", "flickr");
// => "jXf12sRWto45bmD"
```
