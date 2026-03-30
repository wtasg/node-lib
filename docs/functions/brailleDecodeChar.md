[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleDecodeChar

# Function: brailleDecodeChar()

> **brailleDecodeChar**(`ch`): `string`

Defined in: braille.ts:84

Decode a single Braille character back to ASCII.
Non-Braille characters are returned unchanged.

## Parameters

### ch

`string`

A single character.

## Returns

`string`

The decoded ASCII character, or the original if not Braille.

## Example

```ts
brailleDecodeChar("⡁"); // "A"
```
