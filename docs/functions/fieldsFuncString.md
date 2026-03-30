[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / fieldsFuncString

# Function: fieldsFuncString()

> **fieldsFuncString**(`s`, `f`): `string`[]

Defined in: [src/strings.ts:369](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L369)

FieldsFunc splits the string s at each run of code points c satisfying f(c)
and returns an array of slices of s.

## Parameters

### s

`string`

Input string.

### f

(`_ch`) => `boolean`

Predicate; split at runs of characters satisfying f.

## Returns

`string`[]

Array of fields.
