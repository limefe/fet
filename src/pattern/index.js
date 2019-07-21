/**
 * 简单设计模式实现
 */

export const singleFactory = (function singleFactory() {
  const obj = null
  return function(YourClass) {
    // eslint-disable-next-line no-unused-vars
    const constructorArgs = [].slice.call(arguments, 1)
    return obj && obj instanceof YourClass ? obj : new YourClass()
  }
})()
