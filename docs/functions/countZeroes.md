[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / countZeroes

# Function: countZeroes()

> **countZeroes**(`value`): `number`

Defined in: [bits.ts:118](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/bits.ts#L118)

Count zero bits from LSB up to and including the highest set bit.
For zero input, returns 0.

## Parameters

### value

Input value.

`number` | `bigint`

## Returns

`number`

Zero count up to the left-most set bit.

## Throws

If `value` is negative or an unsafe integer.
