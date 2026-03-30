[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / cutString

# Function: cutString()

> **cutString**(`s`, `sep`): `object`

Defined in: [src/strings.ts:264](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L264)

Cut slices s around the first instance of sep,
returning the text before and after sep.
The found result reports whether sep appears in s.

## Parameters

### s

`string`

Input string.

### sep

`string`

Separator string.

## Returns

`object`

### after

> **after**: `string`

### before

> **before**: `string`

### found

> **found**: `boolean`

## Example

```ts
cut("Gopher@example.com", "@"); // { before: "Gopher", after: "example.com", found: true }
cut("Gopher", "@");             // { before: "Gopher", after: "", found: false }
cut("ab", "abc");               // { before: "ab", after: "", found: false } — sep longer than s
```
