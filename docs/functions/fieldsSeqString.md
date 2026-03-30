[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / fieldsSeqString

# Function: fieldsSeqString()

> **fieldsSeqString**(`s`): `Generator`\<`string`, `void`, `unknown`\>

Defined in: [src/strings.ts:432](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L432)

FieldsSeq returns an iterator over substrings of s, split around each
instance of one or more consecutive white space characters.

## Parameters

### s

`string`

Input string.

## Returns

`Generator`\<`string`, `void`, `unknown`\>

Iterator over whitespace-separated fields.
