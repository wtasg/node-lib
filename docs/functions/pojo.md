[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / pojo

# Function: pojo()

> **pojo**\<`T`\>(`instance`): `Record`\<`string`, `unknown`\>

Defined in: [pojo.ts:10](https://github.com/wtasg/node-lib/blob/ac07f7b7be8233cfd945908394ac10daf671e6a9/src/pojo.ts#L10)

Convert a class instance into a plain JavaScript object.
Copies only the instance's own enumerable data properties
and excludes methods or prototype values.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### instance

`T`

A class instance to convert.

## Returns

`Record`\<`string`, `unknown`\>

A plain JavaScript object containing only data fields.
