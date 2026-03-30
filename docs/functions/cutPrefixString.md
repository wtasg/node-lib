[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / cutPrefixString

# Function: cutPrefixString()

> **cutPrefixString**(`s`, `prefix`): `object`

Defined in: [src/strings.ts:284](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L284)

CutPrefix returns s without the provided leading prefix string
and reports whether it found the prefix.

## Parameters

### s

`string`

Input string.

### prefix

`string`

Prefix to remove.

## Returns

`object`

### after

> **after**: `string`

### found

> **found**: `boolean`

## Example

```ts
cutPrefix("Gopher", "Go"); // { after: "pher", found: true }
cutPrefix("Gopher", "X");  // { after: "Gopher", found: false }
cutPrefix("ab", "abc");    // { after: "ab", found: false } — prefix longer than s
```
