[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / splitString

# Function: splitString()

> **splitString**(`s`, `sep`): `string`[]

Defined in: [src/strings.ts:771](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L771)

Split slices s into all substrings separated by sep and returns a slice of
the substrings between those separators.
If sep is empty, Split splits after each UTF-8 sequence.
If both s and sep are empty, Split returns an empty slice.

## Parameters

### s

`string`

Input string.

### sep

`string`

Separator string.

## Returns

`string`[]

Array of substrings.
