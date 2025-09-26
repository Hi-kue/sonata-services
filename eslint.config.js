import antfu from "@antfu/eslint-config";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

import svelteConfig from "./svelte.config.js";

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,

  // NOTE: Svelte Configuration
  svelte: true,
  ...svelte.configs.recommended,

  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node, // NOTE: Add if using SvelteKit in non-SPA mode.
    },
  },
}, {
  files: ["**/*.svelte", "**/*.svx", "**/*.svelte.js"],
  languageOptions: {
    parserOptions: {
      svelteConfig,
    },
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
      ignoreCase: true,
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: [
        // NOTE: Documentation Files (Add more if needed)
        "README.md",
        "CHANGELOG.md",
        "SEMANTIC_COMMITS.md",
        "CONTRIBUTING.md",
        "CODE_OF_CONDUCT.md",
        "SECURITY.md",
        "LICENSE.md",
        "CONSULTANCY.md",

        // NOTE: Configuration Files (Add more if needed)
        "eslint.config.js",
        "vite.config.ts",
        "svelte.config.js",
        "playwright.config.ts",
        "tsconfig.json",
        "package.json",
      ],
    }],
  },
});
