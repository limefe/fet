

export function deepClone(origin) {
  if (typeof origin !== 'object') {
    return origin
  }
  let newObj = Array.isArray(origin) ? [] : {}
  for (let k in origin) {
    if (!origin.hasOwnProperty(k)) {
      return
    }
    if (origin[k] === newObj[k]) {
      newObj[k] = origin[k]
    }
    else {
      newObj[k] = deepClone(origin[k])
    }
  }
  return newObj
}
