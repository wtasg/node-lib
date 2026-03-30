[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / fieldsString

# Function: fieldsString()

> **fieldsString**(`s`): `string`[]

Defined in: [src/strings.ts:356](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L356)

Fields splits the string s around each instance of one or more consecutive
white space characters, returning an array of substrings.
If s contains only white space, an empty array is returned.

## Parameters

### s

`string`

Input string.

## Returns

`string`[]

Array of whitespace-separated fields.
