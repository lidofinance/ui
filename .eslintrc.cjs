const { resolve } = require('node:path')
const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'node', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    // Hacky workaround to enforce extensions in ESM imports. See:
    // https://github.com/import-js/eslint-plugin-import/issues/2170#issuecomment-1149473239
    'import/extensions': ['error', 'always', { ts: 'never', tsx: 'never' }],
    'node/no-missing-import': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
    {
      files: ['*.stories.*', '.storybook/**'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['!.storybook'],
}
