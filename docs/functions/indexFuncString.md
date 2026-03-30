[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / indexFuncString

# Function: indexFuncString()

> **indexFuncString**(`s`, `f`): `number`

Defined in: [src/strings.ts:526](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L526)

IndexFunc returns the index into s of the first Unicode code point
satisfying f(c), or -1 if none do.

## Parameters

### s

`string`

Input string.

### f

(`_ch`) => `boolean`

Predicate function.

## Returns

`number`

Index of first matching character, or -1.
