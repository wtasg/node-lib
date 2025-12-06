[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../globals.md) / createFindDirectories

# Function: createFindDirectories()

> **createFindDirectories**(`deps`): (`root`, `options`) => `Promise`\<`string`[]\>

Defined in: [find.ts:19](https://github.com/wtasg/node-lib/blob/5ef6c801dee6a05d879c445d672ee6c2f8da4ba4/src/find.ts#L19)

Factory that produces an async findDirectories function with
injected filesystem dependencies for full testability.

## Parameters

### deps

[`FileSystemDependencies`](../interfaces/FileSystemDependencies.md)

## Returns

> (`root`, `options`): `Promise`\<`string`[]\>

### Parameters

#### root

`string`

#### options

[`FindDirectoriesOptions`](../interfaces/FindDirectoriesOptions.md) = `{}`

### Returns

`Promise`\<`string`[]\>
