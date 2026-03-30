[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / brailleDecodeChar

# Function: brailleDecodeChar()

> **brailleDecodeChar**(`ch`): `string`

Defined in: [src/braille.ts:84](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/braille.ts#L84)

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
