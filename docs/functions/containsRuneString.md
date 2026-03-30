[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / containsRuneString

# Function: containsRuneString()

> **containsRuneString**(`s`, `r`): `boolean`

Defined in: [src/strings.ts:218](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L218)

ContainsRune reports whether the Unicode code point r is within s.

## Parameters

### s

`string`

Input string.

### r

`number`

Unicode code point to search for.

## Returns

`boolean`

True if r is found in s.

## Example

```ts
containsRune("hello", 104); // true  — 'h' (U+0068)
containsRune("hello", 122); // false — 'z' not in "hello"
containsRune("hello", -1);  // false — negative rune always returns false
containsRune("", 97);       // false — empty string
```
