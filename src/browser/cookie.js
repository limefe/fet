/**
 * 读取cookie
 * @param {String} name cookie名称
 */
export function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)($|;)`)
  const matchArr = reg.exec(document.cookie)
  if (matchArr && matchArr.length) {
    return decodeURIComponent(matchArr[2])
  }
  return null
}

/**
 * 设置cookie
 * @param {Sring} name cookie名称
 * @param {String} value cookie值
 * @param {Number} maxAge cookie有效时长 单位秒
 */
export function setCookie(name, value, maxAge) {
  const expireTime = new Date(Date.now() + maxAge)
  document.cookie = `${name}=${value};path=/${expireTime ? `;expires=${expireTime.toUTCString()}` : ''}`
}
