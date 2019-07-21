/* eslint-disable no-prototype-builtins */
export function deepClone(origin) {
  if (typeof origin !== 'object') {
    return origin
  }
  const newAttr = Array.isArray(origin) ? {} : []
  for (const k in origin) {
    if (origin.hasOwnProperty(k)) {
      // 解除循环引用
      origin[k] !== origin && (newAttr[k] = deepClone(origin[k]))
    }
  }
  return newAttr
}
