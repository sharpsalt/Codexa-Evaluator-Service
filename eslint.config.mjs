import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // 1. No multi spaces
      'no-multi-spaces': 'error',

      // 2. Space in parens -> ( x )
      // 'space-in-parens': ['error', 'always'],

      // 3. No multiple empty lines (max 1 empty line allowed)
      'no-multiple-empty-lines': ['error', { max: 1 }],

      // 4. Prefer const over let
      'prefer-const': 'error',

      // 5. Require semicolons
      'semi': ['error', 'always'],
    },
  }
);