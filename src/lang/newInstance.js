
// 模拟创建实例

export default function newInstance(YourClass) {
  let o = Object.create(YourClass.prototype)
  let k = YourClass.apply(o, [].slice.call(arguments, 1))
  return k || o
}
