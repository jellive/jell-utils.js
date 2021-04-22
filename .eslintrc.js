/**
 * @from https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
 */

module.exports = {
  root: true,
  //   parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  //   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended']
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    project: './tsconfig.json',
    // project: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ignorePatterns: ['dist/', 'node_modules/']
}
