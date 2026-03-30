[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleEncodeChar

# Function: brailleEncodeChar()

> **brailleEncodeChar**(`ch`): `string`

Defined in: braille.ts:47

Encode a single ASCII character into its Braille equivalent.
Non-ASCII characters are returned unchanged.

## Parameters

### ch

`string`

A single character.

## Returns

`string`

The Braille-encoded character, or the original if not ASCII.

## Example

```ts
brailleEncodeChar("A"); // "⡁"
brailleEncodeChar("€"); // "€"
```
