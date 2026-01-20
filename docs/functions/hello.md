[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / hello

# Function: hello()

> **hello**(`konsole?`): `Promise`\<`string`\>

Defined in: [hello.ts:31](https://github.com/wtasg/node-lib/blob/ed0a2138895c2801b9318149a6c6b3580f396289/src/hello.ts#L31)

A sample function that should work to test if lib is installed correctly.

## Parameters

### konsole?

`Console`

optional console object to log the message

## Returns

`Promise`\<`string`\>

`hello from @wtasnorg/node-lib`

## Examples

```ts
import { hello } from "@wtasnorg/node-lib";

async function main() {
    const message = await hello(console);
    console.log("Received message:", message);
}

main();
```

```ts
import { hello } from "@wtasnorg/node-lib";

async function main() {
    const message = await hello();
    // Do something with the message
}

main();
```
