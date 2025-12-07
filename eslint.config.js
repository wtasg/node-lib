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
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ],

            semi: ["error", "always"],
            // "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
            "@stylistic/quotes": ["error", "double"]
        }
    }
]);
