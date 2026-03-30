[**@wtasnorg/node-lib**](../README.md)

***

[@wtasnorg/node-lib](../README.md) / hello

# Function: hello()

> **hello**(`konsole?`): `Promise`\<`string`\>

Defined in: [src/hello.ts:31](https://github.com/wtasg/node-lib/blob/1ee11d15e0962dff67357405c5de56cb28136fb5/src/hello.ts#L31)

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
