[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / countZeroesWithWidth

# Function: countZeroesWithWidth()

> **countZeroesWithWidth**(`value`, `width`): `number`

Defined in: [bits.ts:94](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/bits.ts#L94)

Count zero bits within a fixed width, considering only low-order `width` bits.

## Parameters

### value

Input value.

`number` | `bigint`

### width

`number`

Bit width to inspect.

## Returns

`number`

Number of zero bits in the selected width.

## Throws

If `value` is negative/unsafe or `width` is negative/unsafe.
