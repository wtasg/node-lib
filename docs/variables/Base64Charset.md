[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / Base64Charset

# Variable: Base64Charset

> `const` **Base64Charset**: readonly \[`"standard"`, `"urlsafe"`, `"imap"`, `"radix64"`\]

Defined in: [base64.ts:13](https://github.com/wtasg/node-lib/blob/3cefbb81ea65751f3fad11167c77d0350ba3156d/src/base64.ts#L13)

Available Base64 charset variants.
- `standard`: RFC 4648 standard alphabet (A-Z, a-z, 0-9, +, /)
- `urlsafe`: URL and filename safe (A-Z, a-z, 0-9, -, _)
- `imap`: Modified Base64 for IMAP mailbox names (A-Z, a-z, 0-9, +, ,)
- `radix64`: Base64 variant used in OpenPGP (A-Z, a-z, 0-9, +, /)
