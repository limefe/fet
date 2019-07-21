/* eslint-disable no-new-func */
/**
 * 模拟Object.create
 * @param {*} prototype
 */
export function create(prototype) {
  if (Object.create && typeof Object.create === 'function') {
    return Object.create(prototype)
  }
  const proxyFn = new Function()
  proxyFn.prototype = prototype
  // eslint-disable-next-line new-cap
  return new proxyFn()
}
