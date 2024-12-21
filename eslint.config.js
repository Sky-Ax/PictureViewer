import pluginVue from "eslint-plugin-vue"
import vueTsEslintConfig from "@vue/eslint-config-typescript"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"

export default [
  {
    "name": "app/files-to-lint",
    "files": ["**/*.ts", "**/*.mts", "**/*.tsx", "**/*.vue"]
  },

  {
    "name": "app/files-to-ignore",
    "ignores": ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]
  },
  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
  skipFormatting,

  // 添加你自己的规则配置
  {
    "rules": {
      "quotes": ["error", "double"], // 强制使用双引号
      "semi": ["error", "never"],     // 禁止使用分号
      // 禁止多余的空行
      "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
      // 报告未使用的变量
      "@typescript-eslint/no-unused-vars": ["error"],
    }
  }
]
