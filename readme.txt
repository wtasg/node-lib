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
9. `popcount32`, `popcount64`, `countOnes`, `countZeroesWithWidth`, `countZeroes` for integer bit counting helpers.
10. `brailleEncode` / `brailleDecode` for ASCII ↔ Braille character mapping.
11. `findValue` / `findValues` for recursive object key searching by value.
12. `format` for lightweight `{key}` placeholder string formatting.
13. `hashString` / `getAscii` for simple non-cryptographic string hashing.
14. `Anchor` class for building HTML anchor elements (with XSS-safe escaping).
15. `isGitInit` for detecting whether a directory is inside a Git repository.
16. `isPrimitive` / `isPrimitiveArray` for primitive type detection.
17. `objectToArray` for converting object values to an array with optional key prefix filtering.
18. `wc` for counting words, lines, and letters (like Unix `wc`).

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
import { popcount32, countZeroes } from "@wtasnorg/node-lib/bits";
import { brailleEncode, brailleDecode } from "@wtasnorg/node-lib/braille";
import { findValue } from "@wtasnorg/node-lib/find-value";
import { format } from "@wtasnorg/node-lib/format";
import { hashString } from "@wtasnorg/node-lib/hash";
import { Anchor } from "@wtasnorg/node-lib/anchor";
import { isGitInit } from "@wtasnorg/node-lib/git";
import { isPrimitive, isPrimitiveArray } from "@wtasnorg/node-lib/primitive";
import { objectToArray } from "@wtasnorg/node-lib/otoa";
import { wc } from "@wtasnorg/node-lib/wc";
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
| Bits | `@wtasnorg/node-lib/bits` |
| Braille | `@wtasnorg/node-lib/braille` |
| Find Value | `@wtasnorg/node-lib/find-value` |
| Format | `@wtasnorg/node-lib/format` |
| Hash | `@wtasnorg/node-lib/hash` |
| Anchor | `@wtasnorg/node-lib/anchor` |
| Git | `@wtasnorg/node-lib/git` |
| Primitive | `@wtasnorg/node-lib/primitive` |
| Object to Array | `@wtasnorg/node-lib/otoa` |
| Word Count | `@wtasnorg/node-lib/wc` |

## License: MIT

[MIT License file](LICENSE)
