[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / linesString

# Function: linesString()

> **linesString**(`s`): `Generator`\<`string`, `void`, `unknown`\>

Defined in: [src/strings.ts:634](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L634)

Lines returns an iterator over the newline-terminated lines in the string s.
The lines yielded by the iterator include their terminating newlines.
If s is empty, the iterator yields no lines at all.
If s does not end in a newline, the final non-empty line of s is yielded
without a terminating newline.

## Parameters

### s

`string`

Input string.

## Returns

`Generator`\<`string`, `void`, `unknown`\>

Iterator over lines.
