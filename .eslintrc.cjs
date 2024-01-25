module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true,
    "jest": true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'eslint-plugin-import', ' plugin:cypress/recommended'],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: [
    'cypress'
  ],
  rules: {
    'import/no-unresolved': 2,
    'import/default': 0,
    'no-unused-vars': 0,
    'unused-imports/no-unused-imports-ts': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
}



