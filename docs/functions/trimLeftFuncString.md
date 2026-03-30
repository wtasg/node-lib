[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / trimLeftFuncString

# Function: trimLeftFuncString()

> **trimLeftFuncString**(`s`, `f`): `string`

Defined in: [src/strings.ts:1090](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1090)

TrimLeftFunc returns a slice of the string s with all leading Unicode code
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

Left-trimmed string.
