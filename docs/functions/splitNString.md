[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / splitNString

# Function: splitNString()

> **splitNString**(`s`, `sep`, `n`): `string`[]

Defined in: [src/strings.ts:788](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L788)

SplitN slices s into substrings separated by sep and returns a slice of
the substrings between those separators.
The count determines the number of substrings to return:
  - n > 0: at most n substrings; the last substring will be the unsplit remainder.
  - n == 0: nil (empty slice)
  - n < 0: all substrings

## Parameters

### s

`string`

Input string.

### sep

`string`

Separator string.

### n

`number`

Maximum number of substrings.

## Returns

`string`[]

Array of substrings.
