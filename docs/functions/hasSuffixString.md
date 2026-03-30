[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / hasSuffixString

# Function: hasSuffixString()

> **hasSuffixString**(`s`, `suffix`): `boolean`

Defined in: [src/strings.ts:464](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L464)

HasSuffix reports whether the string s ends with suffix.

## Parameters

### s

`string`

Input string.

### suffix

`string`

Suffix to check.

## Returns

`boolean`

True if s ends with suffix.

## Example

```ts
hasSuffix("Gopher", "er"); // true
hasSuffix("Gopher", "");   // true — empty suffix always matches
hasSuffix("Gopher", "X");  // false
hasSuffix("ab", "abc");    // false — suffix longer than s
```
