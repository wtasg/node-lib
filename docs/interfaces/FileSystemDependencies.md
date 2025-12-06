[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../globals.md) / FileSystemDependencies

# Interface: FileSystemDependencies

Defined in: [find.ts:3](https://github.com/wtasg/node-lib/blob/5ef6c801dee6a05d879c445d672ee6c2f8da4ba4/src/find.ts#L3)

## Properties

### readdir()

> **readdir**: (`path`, `opts`) => `Promise`\<`object`[]\>

Defined in: [find.ts:4](https://github.com/wtasg/node-lib/blob/5ef6c801dee6a05d879c445d672ee6c2f8da4ba4/src/find.ts#L4)

#### Parameters

##### path

`string`

##### opts

###### withFileTypes

`true`

#### Returns

`Promise`\<`object`[]\>

***

### stat()

> **stat**: (`path`) => `Promise`\<\{ `isDirectory`: `boolean`; \}\>

Defined in: [find.ts:5](https://github.com/wtasg/node-lib/blob/5ef6c801dee6a05d879c445d672ee6c2f8da4ba4/src/find.ts#L5)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<\{ `isDirectory`: `boolean`; \}\>
