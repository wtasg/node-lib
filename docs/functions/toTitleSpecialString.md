[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / toTitleSpecialString

# Function: toTitleSpecialString()

> **toTitleSpecialString**(`c`, `s`): `string`

Defined in: [src/strings.ts:978](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L978)

ToTitleSpecial returns a copy of the string s with all Unicode letters mapped
to their Unicode title case, giving priority to the special casing rules in c.

## Parameters

### c

`string`

Locale identifier (e.g. "tr", "az").

### s

`string`

Input string.

## Returns

`string`

Locale title-cased string.
