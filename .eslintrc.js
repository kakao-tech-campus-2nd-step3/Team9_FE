module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'json-format',
    'simple-import-sort',
    '@emotion',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js built-ins and external imports.
          ['^\\u0000', '^react', '^@?\\w'],
          // Absolute imports and other imports.
          ['^@?\\w'],
          // Imports starting with `@/` (your internal modules).
          ['^@'],
          // Relative imports.
          ['^\\.'],
          // Side effect imports (e.g., polyfills or styles).
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.ts', '.js'],
      },
    ],
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignorePatterns: ['**/build/**/*', '.eslintrc.js', 'craco.config.js'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
