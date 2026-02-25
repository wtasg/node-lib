[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / popcount64

# Function: popcount64()

> **popcount64**(`value`): `number`

Defined in: [bits.ts:69](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/bits.ts#L69)

Count set bits in the low 64 bits of a number or bigint.

## Parameters

### value

Input value. For `number`, it must be a non-negative safe integer.

`number` | `bigint`

## Returns

`number`

Number of set bits (0-64).

## Throws

If `value` is negative or an unsafe integer.
