module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-nested-ternary': 'off',
        'no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/no-use-before-define': ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'no-debugger': 0,
        'no-alert': 0,
        'no-unused-vars': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'all'
          }
        ],
        'no-unused-expressions': [
          2,
          {
            allowTaggedTemplates: true
          }
        ],
        'no-param-reassign': [
          2,
          {
            props: false
          }
        ],
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'no-console': 'error',
        'func-names': 0,
        'space-before-function-paren': 0,
        'max-len': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'react/display-name': 1,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unescaped-entities': 'off',
        'jsx-a11y/accessible-emoji': 0,
        'react/require-default-props': 0,
        'react/jsx-indent': [2, 2],
        'react/jsx-indent-props': [2, 2],
        'no-trailing-spaces': 1,
        'no-extra-parens': 0,
        'react/prop-types': 0,
        semi: [1, 'always'],
        'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
        'space-in-parens': [1, 'never'],
        'spaced-comment': ['error', 'always'],
        'no-this-before-super': 'warn',
        'no-undef': 'warn',
        'no-unreachable': 'warn',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'react/jsx-uses-vars': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-closing-bracket-location': 'warn',
        'comma-dangle': ['error', 'never'],
        'global-require': 'off',
        'one-var': 'off',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        ],
        radix: 0,
        'no-shadow': 'off',
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true
          }
        ],
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'none',
            singleQuote: true,
            printWidth: 100,
            bracketSpacing: true,
            jsxBracketSameLine: false
          }
        ]
      }
    }
  ]
};
