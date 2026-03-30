[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / cutSuffixString

# Function: cutSuffixString()

> **cutSuffixString**(`s`, `suffix`): `object`

Defined in: [src/strings.ts:303](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L303)

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
