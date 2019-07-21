// 获取变量的确切类型
export function type(variable) {
  return Object.prototype.toString
    .call(variable)
    .slice(8, -1)
    .toLowerCase()
}

// 空对象，且对象的直接原型是否是 Object.prototype
export function isPlainObject(variable) {
  // eslint-disable-next-line no-prototype-builtins
  return type(variable) === 'object' && Object.prototype.isPrototypeOf(variable)
}

// 对象无key，数组为空数组
export function isEmptyObject(variable) {
  return type(variable) === 'object' && Object.keys(variable).length === 0
}
