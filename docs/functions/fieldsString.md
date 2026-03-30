[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / fieldsString

# Function: fieldsString()

> **fieldsString**(`s`): `string`[]

Defined in: [src/strings.ts:356](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L356)

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
