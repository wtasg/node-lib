# @wtasnorg/node-lib

A library project for nodejs. #nodejs #typescript #library

- [npm org](https://www.npmjs.com/org/wtasnorg)
- [github repo](https://github.com/wtasg/node-lib)

## Functions

1. hello (for debugging)
2. `pojo` for converting class objects to Plain Old Javascript Objects.
3. `createFindDirectories` as a factory for finding directories; think `find path -type d`.

## Develop

```bash
git clone git@github.com:wtasg/node-lib.git
npm run build
npm run test
# make changes...
```

We are using `node --test` for testing.

## Install and Usage

```bash
npm install @wtasnorg/node-lib
```

```typescript
# check if you can run code
import {hello} from "@wtasnorg/node-lib";

await hello(); 
// "hello from @wtasnorg/node-lib"
```

## License: MIT

[MIT License file](LICENSE)
