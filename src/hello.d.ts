/**
 * A sample function that should work to test if lib is installed correctly.
 *
 * @param {Console?} konsole - optional console object to log the message
 * @returns {Promise<string>} `hello from @wtasnorg/node-lib`
 *
 * @example
 * ```ts
 * import { hello } from "@wtasnorg/node-lib";
 *
 * async function main() {
 *     const message = await hello(console);
 *     console.log("Received message:", message);
 * }
 *
 * main();
 * ```
 *
 * @example
 * ```ts
 * import { hello } from "@wtasnorg/node-lib";
 *
 * async function main() {
 *     const message = await hello();
 *     // Do something with the message
 * }
 *
 * main();
 * ```
 */
declare function hello(konsole?: Console): Promise<string>;
export { hello };
//# sourceMappingURL=hello.d.ts.map