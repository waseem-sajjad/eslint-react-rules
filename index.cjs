module.exports = {
  recommended: [
    "./rules/best-practices.cjs",
    "./rules/react-hooks.cjs",
    "./rules/react-a11y.cjs",
    "./rules/variables.cjs",
    "./rules/imports.cjs",
    "./rules/errors.cjs",
    "./rules/style.cjs",
    "./rules/react.cjs",
    "./rules/node.cjs",
    "./rules/es6.cjs",
  ].map(require),
};
