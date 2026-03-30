[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / lastIndexFuncString

# Function: lastIndexFuncString()

> **lastIndexFuncString**(`s`, `f`): `number`

Defined in: [src/strings.ts:614](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L614)

LastIndexFunc returns the index into s of the last Unicode code point
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

Index of last matching character, or -1.
