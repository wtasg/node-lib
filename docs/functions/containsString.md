[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / containsString

# Function: containsString()

> **containsString**(`s`, `substr`): `boolean`

Defined in: [src/strings.ts:166](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/strings.ts#L166)

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
