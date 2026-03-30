[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / newReplacerString

# Function: newReplacerString()

> **newReplacerString**(...`oldnew`): [`ReplacerString`](../classes/ReplacerString.md)

Defined in: [src/strings.ts:1589](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1589)

NewReplacer returns a new Replacer from a list of old, new string pairs.
Replacements are performed in the order they appear in the target string,
without overlapping matches.

## Parameters

### oldnew

...`string`[]

Alternating old/new string pairs.

## Returns

[`ReplacerString`](../classes/ReplacerString.md)

A new Replacer.
