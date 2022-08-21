module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'next',
    'prettier',
  ],
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-exports': 'off',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter
          ['^@?\\w'],
          // Types
          ['^[^/\\.].*\u0000$', '^.*\u0000$', '^\\..*\u0000$'],
          // Relative imports
          ['^\\.'],
          // CSS imports
          ['^.+\\.?(css)$'],
          // Anything not matched in another group
          ['^'],
        ],
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
