[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / toValidUTF8String

# Function: toValidUTF8String()

> **toValidUTF8String**(`s`, `replacement`): `string`

Defined in: [src/strings.ts:1018](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1018)

ToValidUTF8 returns a copy of the string s with each run of invalid UTF-16
code units (lone surrogates) replaced by the replacement string, which may
be empty.

## Parameters

### s

`string`

Input string.

### replacement

`string`

Replacement string for invalid sequences.

## Returns

`string`

String with invalid sequences replaced.
