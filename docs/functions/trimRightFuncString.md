[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / trimRightFuncString

# Function: trimRightFuncString()

> **trimRightFuncString**(`s`, `f`): `string`

Defined in: [src/strings.ts:1146](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1146)

TrimRightFunc returns a slice of the string s with all trailing Unicode code
points c satisfying f(c) removed.

## Parameters

### s

`string`

Input string.

### f

(`_ch`) => `boolean`

Predicate function.

## Returns

`string`

Right-trimmed string.
