[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / trimFuncString

# Function: trimFuncString()

> **trimFuncString**(`s`, `f`): `string`

Defined in: [src/strings.ts:1061](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1061)

TrimFunc returns a slice of the string s with all leading and trailing Unicode
code points c satisfying f(c) removed.

## Parameters

### s

`string`

Input string.

### f

(`_ch`) => `boolean`

Predicate function.

## Returns

`string`

Trimmed string.
