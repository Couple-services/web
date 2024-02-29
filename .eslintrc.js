module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'sonarjs',
        'eslint-plugin-tss-unused-classes',
    ],
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:sonarjs/recommended',
    ],
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
    rules: {
        curly: 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: ['./tsconfig.eslint.json'],
                tsconfigRootDir: __dirname,
            },
            extends: [
                'react-app',
                'eslint:recommended',
                'plugin:react/jsx-runtime',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'prettier',
            ],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-shadow': 'warn',
                '@typescript-eslint/no-unsafe-assignment': 'warn',
                '@typescript-eslint/no-unsafe-call': 'warn',
                '@typescript-eslint/no-unsafe-member-access': 'warn',
                '@typescript-eslint/no-unsafe-return': 'warn',
                'import/no-anonymous-default-export': 'off',
                'react/jsx-no-constructed-context-values': 'warn',
                'react-hooks/exhaustive-deps': 'error',
                'sonarjs/no-duplicate-string': 'off',
                'tss-unused-classes/unused-classes': 'warn',
            },
        },
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
            rules: {
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/unbound-method': 'off',
            },
        },
        {
            files: ['**/*.stories.*'],
            rules: {
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/require-await': 'off',
            },
            extends: ['plugin:storybook/recommended'],
        },
    ],
};
