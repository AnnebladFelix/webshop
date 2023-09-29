module.exports = {
    env: {
    es2016: true,
    node: true,
    },
    extends: ['eslint: recommended', 'plugin:@typescript-es lint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
    ecmaVersion: 'es2016',
    sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
}