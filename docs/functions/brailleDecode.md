[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleDecode

# Function: brailleDecode()

> **brailleDecode**(`input`, `separator?`): `string`

Defined in: braille.ts:102

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
