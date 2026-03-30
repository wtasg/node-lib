[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / encode58

# Function: encode58()

> **encode58**(`input`, `charset?`): `string`

Defined in: [base58.ts:72](https://github.com/wtasg/node-lib/blob/3cefbb81ea65751f3fad11167c77d0350ba3156d/src/base58.ts#L72)

Encode a string to Base58.

## Parameters

### input

`string`

The string to encode.

### charset?

`"bitcoin"` \| `"flickr"` \| `"ripple"`

The charset variant to use (default: "bitcoin").

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
