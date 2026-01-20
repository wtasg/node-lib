# @wtasnorg/node-lib

A library project for nodejs. #nodejs #typescript #library

- [npm org](https://www.npmjs.com/org/wtasnorg)
- [github repo](https://github.com/wtasg/node-lib)

## Functions

1. hello (for debugging)
2. `pojo` for converting class objects to Plain Old Javascript Objects.
3. `createFindDirectories` as a factory for finding directories; think `find path -type d`.
4. `parseUserAgent` for extracting information from user-agent strings.
5. `encode` / `decode` for Base64 encoding/decoding with charset variants (`standard`, `urlsafe`, `imap`, `radix64`).
6. `encode58` / `decode58` for Base58 encoding/decoding with charset variants (`bitcoin`, `flickr`, `ripple`).
7. `encode85` / `decode85` for Base85 encoding/decoding with charset variants (`ascii85`, `z85`, `rfc1924`).
8. `encode32` / `decode32` for Base32 encoding/decoding with charset variants (`rfc4648`, `hex`, `crockford`).

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

## Tree Shaking

Import only what you need for smaller bundles:

```typescript
import { encode58 } from "@wtasnorg/node-lib/base58";
import { encode32 } from "@wtasnorg/node-lib/base32";
```

## License: MIT

[MIT License file](LICENSE)
