[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / hasPrefixString

# Function: hasPrefixString()

> **hasPrefixString**(`s`, `prefix`): `boolean`

Defined in: [src/strings.ts:448](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L448)

HasPrefix reports whether the string s begins with prefix.

## Parameters

### s

`string`

Input string.

### prefix

`string`

Prefix to check.

## Returns

`boolean`

True if s starts with prefix.

## Example

```ts
hasPrefix("Gopher", "Go"); // true
hasPrefix("Gopher", "");   // true — empty prefix always matches
hasPrefix("Gopher", "X");  // false
hasPrefix("ab", "abc");    // false — prefix longer than s
```
