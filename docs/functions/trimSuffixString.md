[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / trimSuffixString

# Function: trimSuffixString()

> **trimSuffixString**(`s`, `suffix`): `string`

Defined in: [src/strings.ts:1183](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1183)

TrimSuffix returns s without the provided trailing suffix string.
If s doesn't end with suffix, s is returned unchanged.

## Parameters

### s

`string`

Input string.

### suffix

`string`

Suffix to remove.

## Returns

`string`

String without the suffix.

## Example

```ts
trimSuffix("Hello, goodbye!", ", goodbye!"); // "Hello"
trimSuffix("Hello, world!", "Goodbye");      // "Hello, world!" — suffix not found
trimSuffix("ab", "abc");                     // "ab" — suffix longer than s
trimSuffix("", "abc");                       // "" — empty string
```
