[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / toLowerSpecialString

# Function: toLowerSpecialString()

> **toLowerSpecialString**(`c`, `s`): `string`

Defined in: [src/strings.ts:933](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L933)

ToLowerSpecial returns a copy of the string s with all Unicode letters mapped
to their lower case using the rules of the special case c (locale).

## Parameters

### c

`string`

Locale identifier (e.g. "tr", "az").

### s

`string`

Input string.

## Returns

`string`

Locale-lower-cased string.
