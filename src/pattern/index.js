/**
 * 简单设计模式实现
 */



export const singleFactory = (function singleFactory() {
  let obj = null
  return function (YourClass) {
    return (obj && obj instanceof YourClass) ? obj : new YourClass()
  }
}())
