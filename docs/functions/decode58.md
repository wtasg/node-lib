[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode58

# Function: decode58()

> **decode58**(`input`, `charset?`): `string`

Defined in: [base58.ts:132](https://github.com/wtasg/node-lib/blob/3cefbb81ea65751f3fad11167c77d0350ba3156d/src/base58.ts#L132)

Decode a Base58 string.

## Parameters

### input

`string`

The Base58 encoded string.

### charset?

`"bitcoin"` \| `"flickr"` \| `"ripple"`

The charset variant to use (default: "bitcoin").

## Returns

`string`

The decoded string.

## Example

```typescript
import { decode58 } from "./base58.js";

decode58("JxF12TrwUP45BMd");
// => "Hello World"

decode58("jXf12sRWto45bmD", "flickr");
// => "Hello World"
```

## Throws

Error if the input contains invalid characters.
