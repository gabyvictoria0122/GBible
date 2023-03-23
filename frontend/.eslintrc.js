// require("@rushstack/eslint-patch/modern-module-resolution")
module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "@vue/eslint-config-prettier",
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'vue/require-prop-types': 0,
    'arrow-parens': 0,
    'object-curly-spacing': 0,
    'camelcase': 0,
    "no-console": "off",
    "no-debugger": "off",
    "space-before-function-paren": "off",
    "indent": "off"
  }
}
