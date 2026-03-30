[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleDecode

# Function: brailleDecode()

> **brailleDecode**(`input`, `separator?`): `string`

Defined in: [src/braille.ts:102](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/braille.ts#L102)

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
