[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / replaceString

# Function: replaceString()

> **replaceString**(`s`, `old`, `newStr`, `n`): `string`

Defined in: [src/strings.ts:714](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L714)

Replace returns a copy of the string s with the first n non-overlapping
instances of old replaced by newStr.
If old is empty, it matches at the beginning of the string and after each
UTF-8 sequence, yielding up to k+1 replacements for a k-rune string.
If n < 0, there is no limit on the number of replacements.

## Parameters

### s

`string`

Input string.

### old

`string`

String to replace.

### newStr

`string`

Replacement string.

### n

`number`

Maximum replacements; -1 means replace all.

## Returns

`string`

String with replacements applied.

## Example

```ts
replace("oink oink oink", "oink", "moo", 2);  // "moo moo oink"
replace("oink oink oink", "oink", "moo", -1); // "moo moo moo"
replace("abc", "", "X", -1);                  // "XaXbXcX"
replace("abc", "abcd", "x", -1);              // "abc" — old not found
```
