[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / titleString

# ~~Function: titleString()~~

> **titleString**(`s`): `string`

Defined in: [src/strings.ts:911](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L911)

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
