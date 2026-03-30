[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / FileSystemDependencies

# Interface: FileSystemDependencies

Defined in: [src/find.ts:3](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/find.ts#L3)

## Properties

### readdir

> **readdir**: (`_path`, `_opts`) => `Promise`\<`object`[]\>

Defined in: [src/find.ts:4](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/find.ts#L4)

#### Parameters

##### \_path

`string`

##### \_opts

###### withFileTypes

`true`

#### Returns

`Promise`\<`object`[]\>

***

### stat

> **stat**: (`_path`) => `Promise`\<\{ `isDirectory`: `boolean`; \}\>

Defined in: [src/find.ts:5](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/find.ts#L5)

#### Parameters

##### \_path

`string`

#### Returns

`Promise`\<\{ `isDirectory`: `boolean`; \}\>
