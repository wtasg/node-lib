[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleEncode

# Function: brailleEncode()

> **brailleEncode**(`input`, `separator?`): `string`

Defined in: braille.ts:65

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
