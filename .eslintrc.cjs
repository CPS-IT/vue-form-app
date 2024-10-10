/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: ['@html-eslint', 'prettier'],
    overrides: [
        {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
        },
    ],
    rules: {
        '@html-eslint/require-closing-tags': [
            'error',
            {
                selfClosing: 'always',
            },
        ],
        '@html-eslint/no-extra-spacing-attrs': [
            'error',
            {
                enforceBeforeSelfClose: true,
            },
        ],
    },
};
