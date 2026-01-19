// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    prettier,

    {
        languageOptions: {
            globals: {
                ...globals.node,
            }
        }
    },

    {
        plugins: {
            "@stylistic": stylistic
        }
    },

    {
        ignores: ["**/*.d.ts"]
    },

    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ],

            semi: ["error", "always"],
            curly: ["error", "all"],
            "prefer-const": "warn",
            "@stylistic/quotes": ["error", "double"]
        }
    }
]);
