module.exports = {
  env: {
    browser: true, // 开启浏览器全局变量
    node: true, // 开启 node 全局变量
    es6: true, // 开启 es6 全局变量 如 Set
    jquery: true, // jquery 全局变量
    mocha: true // mocha 全局变量
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
    'plugin:prettier/recommended',
  ], // 因为我们要用prettier风格规范替代eslint的，所以prettier要放在最后
  rules: {
    semi: ['error', 'never'],
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
};
