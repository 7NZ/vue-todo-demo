// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // https://eslint.org/docs/rules/
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-extra-semi": 2,//禁止多余的冒号
    "quotes": [ 2, "single" ],
    "semi": [2, "always",{"omitLastInOneLineBlock": true}],
    "no-extra-parens": 2,//禁止非必要的括号
    "no-func-assign": 2,//禁止重复的函数声明
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "no-redeclare": 2,//禁止重复声明变量
    "no-trailing-spaces": 1//一行结束后面不要有空格
  }
}
