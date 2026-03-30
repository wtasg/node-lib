[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / ReplacerString

# Class: ReplacerString

Defined in: [src/strings.ts:1526](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1526)

Replacer replaces a list of strings with replacements.
Instances are immutable after construction and can be safely reused
across multiple calls and asynchronous tasks.

## Example

```ts
const r = newReplacer("<", "&lt;", ">", "&gt;");
console.log(r.replace("<html>")); // "&lt;html&gt;"
```

## Constructors

### Constructor

> **new ReplacerString**(...`oldnew`): `Replacer`

Defined in: [src/strings.ts:1529](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1529)

#### Parameters

##### oldnew

...`string`[]

#### Returns

`Replacer`

## Methods

### replace()

> **replace**(`s`): `string`

Defined in: [src/strings.ts:1545](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1545)

Replace returns a copy of s with all replacements performed.

#### Parameters

##### s

`string`

Input string.

#### Returns

`string`

String with replacements applied.

***

### writeString()

> **writeString**(`w`, `s`): `number`

Defined in: [src/strings.ts:1574](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L1574)

WriteString writes to w the output of r.Replace(s).

#### Parameters

##### w

[`WriterString`](../interfaces/WriterString.md)

Writer to write to.

##### s

`string`

Input string.

#### Returns

`number`

Number of bytes written.
