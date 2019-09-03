module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended'
    ],
    plugins: [
        'import'
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'arrow-body-style': 0,
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'comma-spacing': [
            'error',
            { before: false, after: true }
        ],
        'implicit-arrow-linebreak': 0,
        'import/newline-after-import': [
            'error'
        ],
        'import/no-cycle': [
            'error'
        ],
        'import/no-unresolved': [
            'error',
            { commonjs: true, caseSensitive: true }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { optionalDependencies: false, devDependencies: ['test/**'] }
        ],
        'import/order': [
            'error',
            { groups: ['builtin', 'external', 'internal'] }
        ],
        'indent': [
            'error',
            2,
            { SwitchCase: 1 }
        ],
        'keyword-spacing': [
            'error'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'newline-per-chained-call': 0,
        'no-multi-spaces': [
            'error'
        ],
        'no-shadow': [
            'error',
            { builtinGlobals: true, hoist: 'all' }
        ],
        'no-underscore-dangle': 0,
        'no-unused-expressions': 0,
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': [
            'error',
            { before: false, after: true }
        ],
        'spaced-comment': [
            'error',
            'always'
        ]
    }
}
