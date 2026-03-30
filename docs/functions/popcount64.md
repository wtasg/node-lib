[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / popcount64

# Function: popcount64()

> **popcount64**(`value`): `number`

Defined in: [src/bits.ts:69](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/bits.ts#L69)

Count set bits in the low 64 bits of a number or bigint.

## Parameters

### value

`number` \| `bigint`

Input value. For `number`, it must be a non-negative safe integer.

## Returns

`number`

Number of set bits (0-64).

## Throws

If `value` is negative or an unsafe integer.
