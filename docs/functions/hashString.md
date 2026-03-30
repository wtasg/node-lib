[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / hashString

# Function: hashString()

> **hashString**(`input`, `salt?`, `size?`): `number`

Defined in: [src/hash.ts:48](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/hash.ts#L48)

Compute a simple non-cryptographic hash of a string value.

The algorithm converts the input to its ASCII-code string representation,
pads it to `size` characters using `salt`, then reduces it to a single
numeric hash via a weighted sum of character codes.

## Parameters

### input

`unknown`

The value to hash (converted to string).

### salt?

`string`

Padding string (defaults to lowercase alphabet).

### size?

`number`

Target length for the padded intermediate string (defaults to 26).

## Returns

`number`

A numeric hash value.

## Example

```ts
hashString("hello"); // deterministic numeric result
hashString("hello", "xyz", 10);
```
