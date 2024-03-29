module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': 2,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': [2, {allowArrowFunctions: true}],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': [2, {callbacksLast: true}],
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': [2, {callbacksLast: true}],
    'react/wrap-multilines': 2
  }
};
