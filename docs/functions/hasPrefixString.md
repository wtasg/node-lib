[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / hasPrefixString

# Function: hasPrefixString()

> **hasPrefixString**(`s`, `prefix`): `boolean`

Defined in: [src/strings.ts:448](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L448)

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
