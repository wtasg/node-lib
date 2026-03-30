[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / mapString

# Function: mapString()

> **mapString**(`mapping`, `s`): `string`

Defined in: [src/strings.ts:665](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L665)

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
