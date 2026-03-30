[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / fieldsFuncSeqString

# Function: fieldsFuncSeqString()

> **fieldsFuncSeqString**(`s`, `f`): `Generator`\<`string`, `void`, `unknown`\>

Defined in: [src/strings.ts:402](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L402)

FieldsFuncSeq returns an iterator over substrings of s split around
runs of code points satisfying f(c).

## Parameters

### s

`string`

Input string.

### f

(`_ch`) => `boolean`

Predicate; split at runs of characters satisfying f.

## Returns

`Generator`\<`string`, `void`, `unknown`\>

Iterator over fields.
