module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'eslint-plugin-import', ' plugin:cypress/recommended'],

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:import/typescript', 'plugin:import/errors'],
  ignorePatterns: [
    'cypress'
  ],
  rules: {
    'import/no-unresolved': 2,
    'import/default': 0,
    'no-unused-vars': 0,
    'unused-imports/no-unused-imports-ts': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
}



