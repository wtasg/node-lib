[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / trimPrefixString

# Function: trimPrefixString()

> **trimPrefixString**(`s`, `prefix`): `string`

Defined in: [src/strings.ts:1112](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1112)

TrimPrefix returns s without the provided leading prefix string.
If s doesn't start with prefix, s is returned unchanged.

## Parameters

### s

`string`

Input string.

### prefix

`string`

Prefix to remove.

## Returns

`string`

String without the prefix.

## Example

```ts
trimPrefix("Goodbye, world!", "Goodbye, "); // "world!"
trimPrefix("Hello, world!", "Goodbye, ");   // "Hello, world!" — prefix not found
trimPrefix("ab", "abc");                    // "ab" — prefix longer than s
trimPrefix("", "abc");                      // "" — empty string
```
