[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / countString

# Function: countString()

> **countString**(`s`, `substr`): `number`

Defined in: [src/strings.ts:236](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L236)

Count counts the number of non-overlapping instances of substr in s.
If substr is an empty string, Count returns 1 + the number of Unicode code points in s.

## Parameters

### s

`string`

Input string.

### substr

`string`

Substring to count.

## Returns

`number`

Number of non-overlapping occurrences.

## Example

```ts
count("cheese", "e"); // 3
count("five", "");    // 5 (empty substr → rune count + 1)
count("", "");        // 1
count("", "foo");     // 0 — substr longer than s
```
