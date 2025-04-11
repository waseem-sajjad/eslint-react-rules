# eslint-react-rules

A comprehensive collection of ESLint rules optimized for React applications, bundling best practices for React, React Hooks, accessibility, imports, and more.

## Installation

```bash
# Using npm
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-react-rules

# Using yarn
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-react-rules

# Using pnpm
pnpm add -D eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-react-rules
```

## Usage

If you are using ESLint 9 or later, you can easily extend the recommended configuration provided by this package.
To use the recommended configuration, add the following to your ESLint `eslint.config.js` file:

```js
import eslintReactRules from 'eslint-react-rules';
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config({
  extends: [
    // other configs...
    pluginReact.configs.flat.recommended,
    importPlugin.flatConfigs.recommended,
    eslintReactRules.recommended,
  ],
  plugins: {
    // other plugins...
    'jsx-a11y': jsxA11y,
  },
  rules: {
    // other rules...
    "react/react-in-jsx-scope": "off"
  },
  ...

```

If you are using ESLint 8 or earlier, you can add the recommended configuration to your `.eslintrc.js` or `.eslintrc.json` file:

```js
module.exports = {
  extends: [
    // other configs...
    "eslint-plugin-import/recommended",
    "eslint-react-rules/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    // other plugins...
    "jsx-a11y",
  ],
  // Your other ESLint configuration
};
```

## What's Included

This package includes curated rule sets for:

- **React** - Core React best practices
- **React Hooks** - Rules for proper React Hooks usage
- **Accessibility (a11y)** - Ensuring your React applications are accessible
- **Best Practices** - General JavaScript best practices
- **Variables** - Variable declaration and usage rules
- **Imports** - Module import/export rules
- **Errors** - Common error prevention
- **Style** - Code style consistency
- **Node** - Node.js specific rules
- **ES6** - Modern JavaScript rules

## Rule Sets

The package provides the following rule sets:

- `best-practices.cjs` - Common JavaScript best practices
- `react-hooks.cjs` - Rules for React Hooks
- `react-a11y.cjs` - Accessibility rules for React
- `variables.cjs` - Variable usage rules
- `imports.cjs` - Import/export rules
- `errors.cjs` - Error prevention rules
- `style.cjs` - Code style rules
- `react.cjs` - React-specific rules
- `node.cjs` - Node.js-specific rules
- `es6.cjs` - ES6+ JavaScript rules

## Customization

You can also extend individual rule sets for more granular control:

```js
module.exports = {
  extends: [
    // Base rules
    "eslint-react-rules/rules/best-practices",
    "eslint-react-rules/rules/react",
    // Add only the rule sets you need
  ],
  rules: {
    // Your custom rule overrides
  },
};
```
