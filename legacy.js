module.exports = {
  extends: [
    'eslint-config-richardkall/rules/best-practices',
    'eslint-config-richardkall/rules/errors',
    'eslint-config-richardkall/rules/node',
    'eslint-config-richardkall/rules/strict',
    'eslint-config-richardkall/rules/style',
    'eslint-config-richardkall/rules/variables',
    'eslint-config-richardkall/rules/legacy'
  ],
  env: {
    browser: true
  }
};
