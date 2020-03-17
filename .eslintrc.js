module.exports = {
    // extends: ['eslint:recommended', 'prettier'],
    env: {
        node: true,
        browser: true,
        es6: true,
        'react-native/react-native': true,
    },
    parser: 'babel-eslint',
    plugins: ['react', 'react-native'],
    rules: {
        'arrow-parens': 'off',
        'react/jsx-filename-extension': [
            'warning',
            { extensions: ['.js', '.jsx'] },
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-use-before-define': 'off',
        'no-mixed-operators': ['error', { allowSamePrecedence: true }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'linebreak-style': 0,
    },
    overrides: [
        {
            files: ['src/**/*.test.js'],
            env: {
                jest: true,
            },
        },
        {
            files: [
                'storybook/**/*.js',
                'src/mocks/**/*.js',
                'src/**/*.stories.js',
            ],
            rules: {
                'import/no-extraneous-dependencies': [
                    'error',
                    { devDependencies: true },
                ],
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ios.js', 'android.js'],
            },
        },
    },
};
