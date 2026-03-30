[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleEncodeChar

# Function: brailleEncodeChar()

> **brailleEncodeChar**(`ch`): `string`

Defined in: [src/braille.ts:47](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/braille.ts#L47)

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
