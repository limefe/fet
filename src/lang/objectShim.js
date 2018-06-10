

export function create(prototype) {
  if (Object.create && typeof Object.create === 'function') {
    return Object.create(prototype)
  }
  let proxyFn = new Function()
  proxyFn.prototype = prototype
  return new proxyFn()
}
