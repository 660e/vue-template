import js from '@eslint/js'
import skipFormatting from 'eslint-config-prettier/flat'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

import eslintrcAutoImport from './.eslintrc-auto-import.js'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...eslintrcAutoImport.globals,
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
])
