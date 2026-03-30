[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / isBraille

# Function: isBraille()

> **isBraille**(`ch`): `boolean`

Defined in: braille.ts:29

Check whether a single character is a Braille pattern that maps
back to a printable ASCII character.

## Parameters

### ch

`string`

A single character to test.

## Returns

`boolean`

`true` when `ch` is a Braille character mapping to ASCII 0–127.
