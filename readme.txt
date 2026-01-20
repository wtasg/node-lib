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

**Recommended:** Use subpath imports for maximum efficiency (enables tree shaking):

```typescript
import { encode, decode } from "@wtasnorg/node-lib/base64";
import { encode58 } from "@wtasnorg/node-lib/base58";
import { encode32 } from "@wtasnorg/node-lib/base32";
import { parseUserAgent } from "@wtasnorg/node-lib/user-agent";
```

Alternatively, import from the main entry point (includes all modules):

```typescript
import { hello, encode, encode58 } from "@wtasnorg/node-lib";
```

## Available Subpath Imports

| Module | Import Path |
|--------|-------------|
| Base64 | `@wtasnorg/node-lib/base64` |
| Base58 | `@wtasnorg/node-lib/base58` |
| Base85 | `@wtasnorg/node-lib/base85` |
| Base32 | `@wtasnorg/node-lib/base32` |
| User-Agent | `@wtasnorg/node-lib/user-agent` |
| Find | `@wtasnorg/node-lib/find` |
| POJO | `@wtasnorg/node-lib/pojo` |
| Hello | `@wtasnorg/node-lib/hello` |

## License: MIT

[MIT License file](LICENSE)
