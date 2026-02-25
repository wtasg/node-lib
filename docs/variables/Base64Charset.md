[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / Base64Charset

# Variable: Base64Charset

> `const` **Base64Charset**: readonly \[`"standard"`, `"urlsafe"`, `"imap"`, `"radix64"`\]

Defined in: [base64.ts:13](https://github.com/wtasg/node-lib/blob/e8728afafd1c71a23332e0e226c750c68ec8ae80/src/base64.ts#L13)

Available Base64 charset variants.
- `standard`: RFC 4648 standard alphabet (A-Z, a-z, 0-9, +, /)
- `urlsafe`: URL and filename safe (A-Z, a-z, 0-9, -, _)
- `imap`: Modified Base64 for IMAP mailbox names (A-Z, a-z, 0-9, +, ,)
- `radix64`: Base64 variant used in OpenPGP (A-Z, a-z, 0-9, +, /)
