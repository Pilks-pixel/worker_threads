/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.+(js|ts)": ["eslint"],
  "**/*.+(json|js|ts)": ["prettier --write"],
};
