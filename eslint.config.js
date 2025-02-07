import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules/',
      'build/',
      'jest.config.js',
      'metro.config.js',
      'commitlint.config.js',
      'babel.config.js',
      '*.d.ts',
      '.husky/',
      '.vscode/',
      '.github/',
      '*.json',
      '*.config.js',
      '.storybook/',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...storybook.configs['flat/recommended'],
      ...pluginQuery.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      import: importPlugin,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'prettier/prettier': 'error',
      'import/no-duplicates': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-undefined': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'storybook/default-exports': 'off',
      'storybook/hierarchy-separator': 'error',
      'storybook/prefer-pascal-case': 'warn',
    },
  }
);
