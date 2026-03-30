[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / findValues

# Function: findValues()

> **findValues**(`obj`, `targets`, `compare?`, `whenFound?`): `void`

Defined in: [src/find-value.ts:96](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/find-value.ts#L96)

Search `obj` for multiple target values at once.

## Parameters

### obj

`Record`\<`string`, `unknown`\>

The object to search.

### targets

`unknown`

A single value or array of values to look for.

### compare?

[`FindValueCompare`](../type-aliases/FindValueCompare.md)

Comparator (defaults to strict equality).

### whenFound?

[`FindValueCallback`](../type-aliases/FindValueCallback.md)

Callback for each match (defaults to `console.log`).

## Returns

`void`

## Example

```ts
const results: FindValueMatch[] = [];
findValues({ a: 1, b: 2, c: 3 }, [1, 3], undefined, (m) => results.push(m));
// results → [{ loc: "a", val: 1 }, { loc: "c", val: 3 }]
```
