'use strict';

module.exports = {
    extends: [
        'eslint-config-spt',
    ].map(require.resolve),

    rules: {
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'computed-property-spacing': 'error',
        'eqeqeq': ['error', 'smart'],
        'max-depth': ['error'],
        'max-len': ['error', { code: 140, ignoreTrailingComments: true, ignoreUrls: true }],
        'max-params': ['error', 5],
        'newline-per-chained-call': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-confusing-arrow': ['error', { allowParens: true }],
        'no-console': 'error',
        'no-debugger': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'off',
        'no-eq-null': 'off',
        'no-negated-condition': 'error',
        'no-negated-in-lhs': 'error',
        'no-shadow': ['error', { builtinGlobals: true, allow: ['resolve', 'reject', 'cb', 'err'] }],
        'no-shadow-restricted-names': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-undefined': 'off',
        'no-use-before-define': ['error', { functions: false }],
        'no-useless-call': 'error',
        'no-useless-escape': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'space-before-function-paren': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'template-curly-spacing': 'error',
        'vars-on-top': 'off',
        'yoda': 'error',
    },
};
