[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / ReaderString

# Class: ReaderString

Defined in: [src/strings.ts:1329](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1329)

Reader implements reading from a string.
It implements io.Reader, io.ReaderAt, io.ByteReader, io.ByteScanner,
io.RuneReader, io.RuneScanner, io.Seeker, and io.WriterTo.

## Example

```ts
const r = newReader("hello");
const b = new Uint8Array(3);
r.read(b); // b = [104, 101, 108]
```

## Constructors

### Constructor

> **new ReaderString**(`s`): `Reader`

Defined in: [src/strings.ts:1334](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1334)

#### Parameters

##### s

`string`

#### Returns

`Reader`

## Methods

### len()

> **len**(): `number`

Defined in: [src/strings.ts:1343](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1343)

Len returns the number of bytes of the unread portion of the string.

#### Returns

`number`

Number of unread bytes.

***

### read()

> **read**(`b`): `number`

Defined in: [src/strings.ts:1364](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1364)

Read implements io.Reader. It reads from the string into b.

#### Parameters

##### b

`Uint8Array`

Buffer to read into.

#### Returns

`number`

Number of bytes read.

#### Throws

When no more bytes are available.

***

### readAt()

> **readAt**(`b`, `off`): `number`

Defined in: [src/strings.ts:1385](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1385)

ReadAt implements io.ReaderAt. It reads from the string starting at byte offset off.

#### Parameters

##### b

`Uint8Array`

Buffer to read into.

##### off

`number`

Byte offset to start reading from.

#### Returns

`number`

Number of bytes read.

#### Throws

If off is negative.

#### Throws

If off is past the end or fewer bytes than b are available.

***

### readByte()

> **readByte**(): `number`

Defined in: [src/strings.ts:1401](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1401)

ReadByte implements io.ByteReader. It reads and returns the next byte from the string.

#### Returns

`number`

Next byte value.

#### Throws

When no more bytes are available.

***

### readRune()

> **readRune**(): \[`number`, `number`\]

Defined in: [src/strings.ts:1416](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1416)

ReadRune implements io.RuneReader. It reads and returns the next UTF-8-encoded
Unicode code point from the string.

#### Returns

\[`number`, `number`\]

Tuple of [code point, byte size].

#### Throws

When no more runes are available.

***

### reset()

> **reset**(`s`): `void`

Defined in: [src/strings.ts:1432](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1432)

Reset resets the Reader to be reading from s.

#### Parameters

##### s

`string`

New string to read from.

#### Returns

`void`

***

### seek()

> **seek**(`offset`, `whence`): `number`

Defined in: [src/strings.ts:1448](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1448)

Seek implements io.Seeker. It sets the offset for the next Read or ReadAt,
interpreted according to whence: 0 (start), 1 (current), 2 (end).

#### Parameters

##### offset

`number`

Byte offset.

##### whence

`number`

Seek origin: 0=start, 1=current, 2=end.

#### Returns

`number`

New absolute offset.

#### Throws

If whence is invalid.

#### Throws

If resulting offset is negative.

***

### size()

> **size**(): `number`

Defined in: [src/strings.ts:1353](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1353)

Size returns the original length of the underlying string.
Size is the number of bytes available for reading via ReadAt.

#### Returns

`number`

Original byte length of the string.

***

### unreadByte()

> **unreadByte**(): `void`

Defined in: [src/strings.ts:1468](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1468)

UnreadByte complements ReadByte in implementing io.ByteScanner.

#### Returns

`void`

#### Throws

If the position is at the beginning of the string or the
previous operation was not a byte read.

***

### unreadRune()

> **unreadRune**(): `void`

Defined in: [src/strings.ts:1482](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1482)

UnreadRune complements ReadRune in implementing io.RuneScanner.

#### Returns

`void`

#### Throws

If the previous operation was not ReadRune or position is at start.

***

### writeTo()

> **writeTo**(`w`): `number`

Defined in: [src/strings.ts:1496](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L1496)

WriteTo implements io.WriterTo. It writes data to w until there's no more
data to write or when an error occurs.

#### Parameters

##### w

[`WriterString`](../interfaces/WriterString.md)

Writer to write to.

#### Returns

`number`

Number of bytes written.
