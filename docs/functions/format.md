[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / format

# Function: format()

> **format**(`fmt`, `obj`): `string`

Defined in: [src/format.ts:27](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/format.ts#L27)

Replace `{key}` placeholders in `fmt` with values from `obj`.
Keys that do not exist in `obj` are replaced with `undefined`.

## Parameters

### fmt

`string`

Format string containing `{key}` placeholders.

### obj

`Record`\<`string`, `unknown`\>

Object whose property values are substituted.

## Returns

`string`

The formatted string.

## Examples

```ts
format("Hello, {name}!", { name: "World" });
// "Hello, World!"
```

```ts
format("{a} + {b} = {c}", { a: 1, b: 2, c: 3 });
// "1 + 2 = 3"
```
