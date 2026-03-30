[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / titleString

# ~~Function: titleString()~~

> **titleString**(`s`): `string`

Defined in: [src/strings.ts:911](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L911)

Title returns a copy of the string s with all Unicode letters that begin words
mapped to their Unicode title case.

## Parameters

### s

`string`

Input string.

## Returns

`string`

Title-cased string.

## Deprecated

Use cases/runes packages or golang.org/x/text/cases for proper title casing.
