const js = require('@eslint/js');
const vue = require('eslint-plugin-vue');
const prettier = require('eslint-config-prettier');
const autoImportGlobals = require('./.eslintrc-auto-import.json').globals;

const vueEssential = vue.configs['flat/essential'].map((config) => {
  if (config.files) return config;

  return {
    ...config,
    files: ['**/*.vue']
  };
});

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**']
  },
  {
    files: ['eslint.config.cjs', 'prettier.config.js', 'vite.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly'
      }
    }
  },
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...autoImportGlobals,
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        process: 'readonly'
      }
    }
  },
  ...vueEssential,
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        ...autoImportGlobals,
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        process: 'readonly'
      }
    }
  },
  prettier
];
