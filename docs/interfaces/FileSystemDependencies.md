[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../globals.md) / FileSystemDependencies

# Interface: FileSystemDependencies

Defined in: [find.ts:3](https://github.com/wtasg/node-lib/blob/c65c61bdf1a5d3419385060466112dd5db87b253/src/find.ts#L3)

## Properties

### readdir()

> **readdir**: (`path`, `opts`) => `Promise`\<`object`[]\>

Defined in: [find.ts:4](https://github.com/wtasg/node-lib/blob/c65c61bdf1a5d3419385060466112dd5db87b253/src/find.ts#L4)

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

Defined in: [find.ts:5](https://github.com/wtasg/node-lib/blob/c65c61bdf1a5d3419385060466112dd5db87b253/src/find.ts#L5)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<\{ `isDirectory`: `boolean`; \}\>
