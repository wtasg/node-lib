[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / newReplacerString

# Function: newReplacerString()

> **newReplacerString**(...`oldnew`): [`ReplacerString`](../classes/ReplacerString.md)

Defined in: [src/strings.ts:1589](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1589)

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
