[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / countZeroes

# Function: countZeroes()

> **countZeroes**(`value`): `number`

Defined in: [src/bits.ts:118](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/bits.ts#L118)

Count zero bits from LSB up to and including the highest set bit.
For zero input, returns 0.

## Parameters

### value

`number` \| `bigint`

Input value.

## Returns

`number`

Zero count up to the left-most set bit.

## Throws

If `value` is negative or an unsafe integer.
