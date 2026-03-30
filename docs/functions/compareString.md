[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / compareString

# Function: compareString()

> **compareString**(`a`, `b`): `number`

Defined in: [src/strings.ts:148](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L148)

Compare returns an integer comparing two strings lexicographically.
The result will be 0 if a === b, -1 if a < b, and +1 if a > b.

## Parameters

### a

`string`

First string.

### b

`string`

Second string.

## Returns

`number`

-1, 0, or 1.

## Example

```ts
compare("a", "b"); // -1
compare("b", "a"); // 1
compare("a", "a"); // 0
```
