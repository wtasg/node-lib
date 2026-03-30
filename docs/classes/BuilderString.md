[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / BuilderString

# Class: BuilderString

Defined in: [src/strings.ts:1201](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1201)

Builder is used to efficiently build a string using Write methods.
It minimizes memory copying.
The zero value is ready to use. Do not copy a non-zero Builder.

## Example

```ts
const b = new Builder();
b.writeString("hello");
b.writeString(", world");
console.log(b.string()); // "hello, world"
```

## Constructors

### Constructor

> **new BuilderString**(): `Builder`

#### Returns

`Builder`

## Methods

### cap()

> **cap**(): `number`

Defined in: [src/strings.ts:1212](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1212)

Cap returns the capacity of the builder's underlying byte slice.
It is the total space allocated for the string being built and includes
any bytes already written.

#### Returns

`number`

Current capacity (equals current length in this implementation).

***

### grow()

> **grow**(`_n`): `void`

Defined in: [src/strings.ts:1223](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1223)

Grow grows the builder's capacity, if necessary, to guarantee space for
another n bytes. After Grow(n), at least n bytes can be written to the
builder without another allocation.

#### Parameters

##### \_n

`number`

Number of bytes to ensure capacity for.

#### Returns

`void`

***

### len()

> **len**(): `number`

Defined in: [src/strings.ts:1232](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1232)

Len returns the number of accumulated bytes (UTF-16 code units).

#### Returns

`number`

Number of bytes written so far.

***

### reset()

> **reset**(): `void`

Defined in: [src/strings.ts:1239](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1239)

Reset resets the builder to be empty.

#### Returns

`void`

***

### string()

> **string**(): `string`

Defined in: [src/strings.ts:1249](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1249)

String returns the accumulated string.

#### Returns

`string`

The built string.

***

### write()

> **write**(`p`): `number`

Defined in: [src/strings.ts:1260](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1260)

Write appends the contents of p to the builder's buffer.
Write always returns len(p), nil.

#### Parameters

##### p

`Uint8Array`

Bytes to write (decoded from UTF-8).

#### Returns

`number`

Number of bytes written.

***

### writeByte()

> **writeByte**(`c`): `void`

Defined in: [src/strings.ts:1273](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1273)

WriteByte appends the byte c to the builder's buffer.
The returned error is always nil.

#### Parameters

##### c

`number`

Byte value (0–255) to write.

#### Returns

`void`

***

### writeRune()

> **writeRune**(`r`): `number`

Defined in: [src/strings.ts:1286](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1286)

WriteRune appends the UTF-8 encoding of Unicode code point r to the builder's buffer.
It returns the length added and a nil error.

#### Parameters

##### r

`number`

Unicode code point to write.

#### Returns

`number`

Number of UTF-16 code units added.

***

### writeString()

> **writeString**(`s`): `number`

Defined in: [src/strings.ts:1300](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1300)

WriteString appends the contents of s to the builder's buffer.
It returns the length of s and a nil error.

#### Parameters

##### s

`string`

String to write.

#### Returns

`number`

Number of characters written.
