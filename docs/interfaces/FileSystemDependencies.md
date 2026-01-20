[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / FileSystemDependencies

# Interface: FileSystemDependencies

Defined in: [find.ts:3](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/find.ts#L3)

## Properties

### readdir()

> **readdir**: (`_path`, `_opts`) => `Promise`\<`object`[]\>

Defined in: [find.ts:4](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/find.ts#L4)

#### Parameters

##### \_path

`string`

##### \_opts

###### withFileTypes

`true`

#### Returns

`Promise`\<`object`[]\>

***

### stat()

> **stat**: (`_path`) => `Promise`\<\{ `isDirectory`: `boolean`; \}\>

Defined in: [find.ts:5](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/find.ts#L5)

#### Parameters

##### \_path

`string`

#### Returns

`Promise`\<\{ `isDirectory`: `boolean`; \}\>
