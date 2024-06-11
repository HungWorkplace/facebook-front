module.exports = {
  // root: true,
  // env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals", // from next.js
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    // "react-refresh/only-export-components": [
    //   "warn",
    //   { allowConstantExport: true },
    // ],
    // allow "any" type
    "@typescript-eslint/no-explicit-any": "off",

    // @ts-ignore from "error" to "warn"
    "@typescript-eslint/ban-ts-comment": "warn",

    // variable is defined but never used
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],

    // if-else or code block from "error" to "warn"
    "no-empty": "warn",

    // force use const as much as possible
    "prefer-const": "error",
  },
};
