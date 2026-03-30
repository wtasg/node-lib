[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / splitSeqString

# Function: splitSeqString()

> **splitSeqString**(`s`, `sep`): `Generator`\<`string`, `void`, `unknown`\>

Defined in: [src/strings.ts:861](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L861)

SplitSeq returns an iterator over all substrings of s separated by sep.
If sep is empty, SplitSeq splits after each UTF-8 sequence.

## Parameters

### s

`string`

Input string.

### sep

`string`

Separator string.

## Returns

`Generator`\<`string`, `void`, `unknown`\>

Iterator over substrings.
