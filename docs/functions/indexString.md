[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / indexString

# Function: indexString()

> **indexString**(`s`, `substr`): `number`

Defined in: [src/strings.ts:481](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L481)

Index returns the index of the first instance of substr in s,
or -1 if substr is not present in s.

## Parameters

### s

`string`

Input string.

### substr

`string`

Substring to find.

## Returns

`number`

Index of first occurrence, or -1.

## Example

```ts
index("chicken", "ken"); // 4
index("chicken", "dmr"); // -1
index("foo", "foobar");  // -1 — substr longer than s
index("", "");           // 0
```
