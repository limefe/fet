


export function deepClone(origin) {
  if (typeof origin != 'object') {
    return origin
  }
  let newAttr = Array.isArray(origin) ? {} : []
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      // 解除循环引用
      origin[k] != origin && (newAttr[k] = deepClone(origin[k]))
    }
  }
  return newAttr
}
