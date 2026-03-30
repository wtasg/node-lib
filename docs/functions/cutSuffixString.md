[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / cutSuffixString

# Function: cutSuffixString()

> **cutSuffixString**(`s`, `suffix`): `object`

Defined in: [src/strings.ts:303](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L303)

CutSuffix returns s without the provided ending suffix string
and reports whether it found the suffix.

## Parameters

### s

`string`

Input string.

### suffix

`string`

Suffix to remove.

## Returns

`object`

### before

> **before**: `string`

### found

> **found**: `boolean`

## Example

```ts
cutSuffix("Gopher", "er"); // { before: "Goph", found: true }
cutSuffix("Gopher", "X");  // { before: "Gopher", found: false }
cutSuffix("ab", "abc");    // { before: "ab", found: false } — suffix longer than s
```
