[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / objectToArray

# Function: objectToArray()

> **objectToArray**(`obj`, `keyPrefix?`): `unknown`[]

Defined in: otoa.ts:31

Extract the values of `obj` into an array. When `keyPrefix` is supplied,
only keys starting with that prefix are included, and the prefix is
stripped from matched keys during processing.

Returns an empty array when `obj` is not a non-null object
or `keyPrefix` is not a string.

## Parameters

### obj

`Record`\<`string`, `unknown`\>

The source object.

### keyPrefix?

`string` = `""`

Optional prefix to filter/strip from keys (default `""`).

## Returns

`unknown`[]

Array of values.

## Examples

```ts
objectToArray({ a: 1, b: 2, c: 3 });
// [1, 2, 3]
```

```ts
objectToArray({ col_name: "Alice", col_age: 30, id: 1 }, "col_");
// ["Alice", 30]
```
