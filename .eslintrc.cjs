module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
}
