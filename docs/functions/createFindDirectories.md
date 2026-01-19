[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / createFindDirectories

# Function: createFindDirectories()

> **createFindDirectories**(`deps`): (`root`, `options`) => `Promise`\<`string`[]\>

Defined in: [find.ts:19](https://github.com/wtasg/node-lib/blob/b5efd5c345e8fa1bdc2a6d3ea4dd4b2eb5b9cc62/src/find.ts#L19)

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
