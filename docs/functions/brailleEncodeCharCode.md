[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleEncodeCharCode

# Function: brailleEncodeCharCode()

> **brailleEncodeCharCode**(`charCode`): `string` \| `undefined`

Defined in: [src/braille.ts:116](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/braille.ts#L116)

Encode an ASCII character code to its Braille character.
Returns `undefined` when the code is outside printable ASCII range 32–127.

## Parameters

### charCode

`number`

ASCII character code.

## Returns

`string` \| `undefined`

The Braille character, or `undefined`.
