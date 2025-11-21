import test from "node:test";
import assert from "node:assert/strict";
import { pojo } from "./pojo.js";
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    greet() {
        return `hello ${this.name}`;
    }
}
test("pojo() should return only enumerable data fields", () => {
    const u = new User(1, "Alice");
    const out = pojo(u);
    assert.deepEqual(out, {
        id: 1,
        name: "Alice"
    });
});
test("pojo() should exclude methods", () => {
    const u = new User(2, "Bob");
    const out = pojo(u);
    assert.ok(!("greet" in out));
});
test("pojo() should exclude prototype properties", () => {
    class Product {
        id;
        constructor(id) {
            this.id = id;
        }
        get info() {
            return `Product:${this.id}`;
        }
    }
    const p = new Product(101);
    const out = pojo(p);
    assert.deepEqual(out, { id: 101 });
    assert.ok(!("info" in out));
});
test("pojo() should ignore non-enumerable own properties", () => {
    class SecretBox {
        visible = "open";
        constructor() {
            Object.defineProperty(this, "hidden", {
                value: "secret",
                enumerable: false
            });
        }
    }
    const box = new SecretBox();
    const out = pojo(box);
    assert.deepEqual(out, { visible: "open" });
    assert.ok(!("hidden" in out));
});
//# sourceMappingURL=pojo.test.js.map