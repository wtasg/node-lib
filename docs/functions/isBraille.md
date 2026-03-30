[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / isBraille

# Function: isBraille()

> **isBraille**(`ch`): `boolean`

Defined in: [src/braille.ts:29](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/braille.ts#L29)

Check whether a single character is a Braille pattern that maps
back to a printable ASCII character.

## Parameters

### ch

`string`

A single character to test.

## Returns

`boolean`

`true` when `ch` is a Braille character mapping to ASCII 0–127.
