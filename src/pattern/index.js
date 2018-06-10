/**
 * 简单设计模式实现
 */



export const singleFactory = (function singleFactory() {
  let obj = null
  return function (YourClass) {
    let constructorArgs = [].slice.call(arguments, 1)
    return (obj && obj instanceof YourClass) ? obj : new YourClass()
  }
}())
