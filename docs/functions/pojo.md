[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../globals.md) / pojo

# Function: pojo()

> **pojo**\<`T`\>(`instance`): `Record`\<`string`, `unknown`\>

Defined in: [pojo.ts:10](https://github.com/wtasg/node-lib/blob/cf7bf2c52d7290455ef5117574965703bedcc8a9/src/pojo.ts#L10)

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
