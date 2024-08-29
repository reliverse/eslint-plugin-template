// @ts-check

// @ts-expect-error - no types
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const config = [
  eslint.configs.recommended,
  {
    ignores: ["**/build/", "**/dist/", "**/node_modules/"],
  },
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx}"],
    rules: {
    }
  }
];

export default tseslint.config(...config);
