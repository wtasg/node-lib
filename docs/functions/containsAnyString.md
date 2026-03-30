[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / containsAnyString

# Function: containsAnyString()

> **containsAnyString**(`s`, `chars`): `boolean`

Defined in: [src/strings.ts:181](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/strings.ts#L181)

ContainsAny reports whether any Unicode code points in chars are within s.

## Parameters

### s

`string`

Input string.

### chars

`string`

String of characters to search for.

## Returns

`boolean`

True if any character in chars is found in s.

## Example

```ts
containsAny("failure", "u & i"); // true
containsAny("foo", "");          // false — empty chars always returns false
containsAny("team", "i");        // false
```
