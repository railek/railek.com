const path = require('path');
const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
    settings: {
        'import/core-modules': ['gatsby'],
    },
    globals: {
        graphql: true,
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'no-underscore-dangle': 'off',
        'react/forbid-prop-types': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
};
