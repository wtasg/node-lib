[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleDecode

# Function: brailleDecode()

> **brailleDecode**(`input`, `separator?`): `string`

Defined in: [src/braille.ts:102](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/braille.ts#L102)

Decode a Braille-encoded string back to ASCII.

## Parameters

### input

`string`

The Braille string to decode.

### separator?

`string`

Optional separator used during encoding.

## Returns

`string`

The decoded string.

## Example

```ts
brailleDecode("⡈⡩"); // "Hi"
```
