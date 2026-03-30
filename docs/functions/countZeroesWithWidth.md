[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / countZeroesWithWidth

# Function: countZeroesWithWidth()

> **countZeroesWithWidth**(`value`, `width`): `number`

Defined in: [src/bits.ts:94](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/bits.ts#L94)

Count zero bits within a fixed width, considering only low-order `width` bits.

## Parameters

### value

`number` \| `bigint`

Input value.

### width

`number`

Bit width to inspect.

## Returns

`number`

Number of zero bits in the selected width.

## Throws

If `value` is negative/unsafe or `width` is negative/unsafe.
