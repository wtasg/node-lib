[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / findValue

# Function: findValue()

> **findValue**(`obj`, `target`, `compare?`, `whenFound?`): `void`

Defined in: [src/find-value.ts:66](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/find-value.ts#L66)

Search `obj` recursively for entries whose value satisfies `compare(target, value)`.
Every match is reported via `whenFound`.

## Parameters

### obj

`Record`\<`string`, `unknown`\>

The object to search.

### target

`unknown`

The value to look for.

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
findValue({ a: { b: 42 } }, 42, undefined, (m) => results.push(m));
// results → [{ loc: "a.b", val: 42 }]
```
