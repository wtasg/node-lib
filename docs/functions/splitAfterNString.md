[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / splitAfterNString

# Function: splitAfterNString()

> **splitAfterNString**(`s`, `sep`, `n`): `string`[]

Defined in: [src/strings.ts:842](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L842)

SplitAfterN slices s into substrings after each instance of sep and
returns a slice of those substrings.
The count n determines the number of substrings to return.

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

Array of substrings including separator.
