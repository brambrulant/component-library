module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'class-methods-use-this': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/no-named-as-default': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars-experimental': ['off'],
    'no-useless-constructor': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    // This rule doesn't work with TS
    'react/static-property-placement': ['off'],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
