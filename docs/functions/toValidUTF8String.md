[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / toValidUTF8String

# Function: toValidUTF8String()

> **toValidUTF8String**(`s`, `replacement`): `string`

Defined in: [src/strings.ts:1018](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1018)

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
