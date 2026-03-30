[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / isPrimitiveArray

# Function: isPrimitiveArray()

> **isPrimitiveArray**(`input`): `boolean`

Defined in: [src/primitive.ts:39](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/primitive.ts#L39)

Check whether a value is an array containing only primitive values.

## Parameters

### input

`unknown`

The value to test.

## Returns

`boolean`

`true` when `input` is an array and every element is a primitive.

## Example

```ts
isPrimitiveArray([1, "two", null]); // true
isPrimitiveArray([1, { a: 2 }]);    // false
isPrimitiveArray("not-array");      // false
```
