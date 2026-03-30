[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / repeatString

# Function: repeatString()

> **repeatString**(`s`, `n`): `string`

Defined in: [src/strings.ts:689](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L689)

Repeat returns a new string consisting of count copies of the string s.

## Parameters

### s

`string`

String to repeat.

### n

`number`

## Returns

`string`

Repeated string.

## Throws

If count is negative.

## Example

```ts
repeat("na", 4); // "nananana"
repeat("na", 0); // ""
repeat("x", -1); // throws RangeError
```
