[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleEncode

# Function: brailleEncode()

> **brailleEncode**(`input`, `separator?`): `string`

Defined in: [src/braille.ts:65](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/braille.ts#L65)

Encode a string by converting every ASCII character to its Braille equivalent.
Non-ASCII characters are passed through unchanged.

## Parameters

### input

`string`

The string to encode.

### separator?

`string`

Optional separator inserted between encoded characters.

## Returns

`string`

The Braille-encoded string.

## Example

```ts
brailleEncode("Hi"); // "⡈⡩"
```
