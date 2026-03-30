[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / mapString

# Function: mapString()

> **mapString**(`mapping`, `s`): `string`

Defined in: [src/strings.ts:665](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L665)

Map returns a copy of the string s with all its characters modified
according to the mapping function. If mapping returns a negative value,
the character is dropped from the string with no replacement.

## Parameters

### mapping

(`_r`) => `number`

Maps each code point to a new code point.

### s

`string`

Input string.

## Returns

`string`

Mapped string.
