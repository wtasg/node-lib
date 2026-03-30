[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / wc

# Function: wc()

> **wc**(`data`, `rowSplitter?`): [`WcResult`](../interfaces/WcResult.md)

Defined in: [src/wc.ts:36](https://github.com/wtasg/node-lib/blob/d6487e974b07d162482ad183cdbfca4fbd7ee9f5/src/wc.ts#L36)

Count lines, words, and letters in a string, similar to the Unix `wc` utility.

Words are defined as sequences of alphanumeric characters (`[a-zA-Z0-9]+`).

## Parameters

### data

`string`

The text to analyse.

### rowSplitter?

`string` = "\n"

Delimiter used to split lines (default `"\n"`).

## Returns

[`WcResult`](../interfaces/WcResult.md)

An object with `lines`, `words`, and `letters` counts.

## Example

```ts
wc("hello world\ngoodbye");
// { lines: 2, words: 3, letters: 19 }
```
