import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  // .gitignore
  {
    ignores: ['node_modules/'],
  },
  // JS
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
      },
    },
  },
  // TS
  tseslint.configs.strict,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  // React
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...react.configs.flat.recommended,
    ...reactHooks.configs.flat.recommended,
  },
  // Prettier
  prettier,
]);
