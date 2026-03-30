[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / containsString

# Function: containsString()

> **containsString**(`s`, `substr`): `boolean`

Defined in: [src/strings.ts:166](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L166)

Contains reports whether substr is within s.

## Parameters

### s

`string`

Input string.

### substr

`string`

Substring to search for.

## Returns

`boolean`

True if substr is found in s.

## Example

```ts
contains("seafood", "foo"); // true
contains("seafood", "bar"); // false
contains("foo", "foobar");  // false — substr longer than s
contains("", "");           // true
```
