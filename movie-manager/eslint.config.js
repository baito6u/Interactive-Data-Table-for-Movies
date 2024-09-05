import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import airbnbConfig from "eslint-config-airbnb";
import airbnbHooks from "eslint-config-airbnb/hooks";
import { typescriptParser } from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: './tsconfig.json',
      },
    },
    rules: {
      // JavaScript/TypeScript rules
      "no-console": "warn", // Warns when using console logs
      "no-unused-vars": "warn", // Warns for unused variables

      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn", // Discourages use of `any` type

      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed with Vite and React 17+
      "react/prop-types": "off", // Disable prop-types checking in favor of TypeScript

      // React Hooks specific rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Airbnb configuration rules
      ...airbnbConfig.rules,
      ...airbnbHooks.rules,
    },
  },

  // Include Airbnb base rules
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.flat.recommended,
];
