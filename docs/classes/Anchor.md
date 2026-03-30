[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / Anchor

# Class: Anchor

Defined in: [src/anchor.ts:32](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/anchor.ts#L32)

A simple builder for an HTML `<a>` element.

Both `href` and `text` are HTML-escaped in `toString()` output.

## Example

```ts
const link = new Anchor("https://example.com", "Example");
link.toString(); // '<a href="https://example.com">Example</a>'
```

## Constructors

### Constructor

> **new Anchor**(`href?`, `text?`): `Anchor`

Defined in: [src/anchor.ts:36](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/anchor.ts#L36)

#### Parameters

##### href?

`string` = `"#"`

##### text?

`string` = `"#"`

#### Returns

`Anchor`

## Properties

### href

> **href**: `string`

Defined in: [src/anchor.ts:33](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/anchor.ts#L33)

***

### text

> **text**: `string`

Defined in: [src/anchor.ts:34](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/anchor.ts#L34)

## Methods

### toString()

> **toString**(): `string`

Defined in: [src/anchor.ts:41](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/anchor.ts#L41)

#### Returns

`string`
