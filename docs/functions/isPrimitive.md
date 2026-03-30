[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / isPrimitive

# Function: isPrimitive()

> **isPrimitive**(`val`): `boolean`

Defined in: primitive.ts:22

Check whether a value is a JavaScript primitive
(`null`, `boolean`, `number`, `string`, `symbol`, `bigint`, or `undefined`).

## Parameters

### val

`unknown`

The value to test.

## Returns

`boolean`

`true` when `val` is a primitive.

## Example

```ts
isPrimitive(42);        // true
isPrimitive("hello");   // true
isPrimitive({});         // false
isPrimitive(null);       // true
```
