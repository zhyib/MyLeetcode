import tsEslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      parser: tsEslint.parser,
    },
    files: ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.vue"],
    rules: {
      ...stylistic.configs.recommended.rules,
      // 拓展 stylistic 的规则
      "@stylistic/semi": "error",
      "@stylistic/brace-style" : "off"
    },
  },
  {
    rules: {
      // 自定义规则
    },
  },
];