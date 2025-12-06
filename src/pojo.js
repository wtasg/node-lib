/**
 * Convert a class instance into a plain JavaScript object.
 * Copies only the instance's own enumerable data properties
 * and excludes methods or prototype values.
 *
 * @template T
 * @param {T} instance - A class instance to convert.
 * @returns {Object<string, unknown>} A plain JavaScript object containing only data fields.
 */
function pojo(instance) {
    return Object.fromEntries(Object.entries(instance).filter(([_, value]) => typeof value !== "function"));
}
export { pojo };
//# sourceMappingURL=pojo.js.map