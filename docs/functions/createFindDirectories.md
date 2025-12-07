[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../globals.md) / createFindDirectories

# Function: createFindDirectories()

> **createFindDirectories**(`deps`): (`root`, `options`) => `Promise`\<`string`[]\>

Defined in: [find.ts:19](https://github.com/wtasg/node-lib/blob/cf7bf2c52d7290455ef5117574965703bedcc8a9/src/find.ts#L19)

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
