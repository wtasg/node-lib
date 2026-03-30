[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / isGitInit

# Function: isGitInit()

> **isGitInit**(`dirPath?`, `fs?`): `boolean`

Defined in: git.ts:32

Check whether a `.git` directory exists at the given path,
indicating the directory is (or is inside) a Git repository.

## Parameters

### dirPath?

`string`

Directory to check (defaults to `process.cwd()`).

### fs?

[`GitFsDependency`](../interfaces/GitFsDependency.md)

Injectable filesystem dependency (defaults to Node `fs.existsSync`).

## Returns

`boolean`

`true` when a `.git` entry exists.

## Example

```ts
import { isGitInit } from "@wtasnorg/node-lib/git";

isGitInit("/my/project"); // true or false
```
