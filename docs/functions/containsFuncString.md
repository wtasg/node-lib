[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / containsFuncString

# Function: containsFuncString()

> **containsFuncString**(`s`, `f`): `boolean`

Defined in: [src/strings.ts:199](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L199)

ContainsFunc reports whether any Unicode code point r in s satisfies f(r).

## Parameters

### s

`string`

Input string.

### f

(`_ch`) => `boolean`

Predicate function receiving each character.

## Returns

`boolean`

True if any character satisfies f.

## Example

```ts
containsFunc("hello", ch => ch === "e"); // true
containsFunc("hello", ch => ch === "z"); // false
containsFunc("", () => true);            // false — empty string has no chars
```
