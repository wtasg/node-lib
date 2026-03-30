[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleDecodeCharCode

# Function: brailleDecodeCharCode()

> **brailleDecodeCharCode**(`charCode`): `string` \| `undefined`

Defined in: [src/braille.ts:129](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/braille.ts#L129)

Decode a Braille character code back to an ASCII character.
Returns `undefined` when the code does not map to ASCII 0–127.

## Parameters

### charCode

`number`

Braille character code.

## Returns

`string` \| `undefined`

The ASCII character, or `undefined`.
