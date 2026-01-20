[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / decode58

# Function: decode58()

> **decode58**(`input`, `charset`): `string`

Defined in: [base58.ts:132](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/base58.ts#L132)

Decode a Base58 string.

## Parameters

### input

`string`

The Base58 encoded string.

### charset

The charset variant to use (default: "bitcoin").

`"bitcoin"` | `"flickr"` | `"ripple"`

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
