/**
 * @file 加载外部资源
 * @author sheldoncui<websheldoncui@gmail.com>
 * @date 2018-06-08
 */


let _loadScript = function (src, callback, errFun, isCrossOrigin) {
if (!/(http|https):\/\/[\w.-_]+/) {
    return
  }
  let s = document.createElement('script')
  s.src = src // 脚本来源
  s.async = 'async' // 异步加载
  isCrossOrigin && (s.crossOrigin = 'anonymous')
  (typeof errFun == 'function') && (s.onerror = errFun)
  (typeof callback == 'function') && (s.onload = callback)
  s.onload = callback
  s.onerror = errFun
  document.head.appendChild('s')
}

/**
 * @param {String} src 资源地址
 * @param {String} id html标签的id
 * @param {Boolean} isCrossOrigin 资源是否跨域
 * @return {Promise} 一个Promise对象
 */
export default function loadScript(src, isCrossOrigin) {
  return new Promise((resolve, reject) => {
    _loadScript(src, resolve, reject, isCrossOrigin)
  })
}



