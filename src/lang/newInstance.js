// 模拟创建实例

export default function newInstance(YourClass) {
  const o = Object.create(YourClass.prototype)
  const k = YourClass.apply(o, [].slice.call(arguments, 1))
  return k || o
}
