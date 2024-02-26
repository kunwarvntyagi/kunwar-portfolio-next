module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
  ],
  globals: {
    COMMITHASH: 'readonly',
    LASTCOMMITDATETIME: 'readonly',
    BRANCH: 'readonly',
    VERSION: 'readonly'
  }
  // "rules": {
  //   "@next/next/no-img-element": "off",
  //   'no-console': "off",
  // },
  // "plugins": [],
  // "extends": "next/core-web-vitals"
}
