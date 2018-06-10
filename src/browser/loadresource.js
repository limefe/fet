/**
 * @file 加载外部资源
 * @author sheldoncui<websheldoncui@gmail.com>
 * @date 2018-06-08
 */


/**
 * @param {String} src 资源地址
 * @param {String} id html标签的id
 * @param {Boolean} isCrossOrigin 资源是否跨域
 * @return {Promise} 一个Promise对象
 */
export default function loadScript(src, id, isCrossOrigin) {
  return new Promise((resolve, reject) => {
    // 检查是否已有该id，有则直接resolve
    if (id) {
      let o = null
      try {
        let o = eval(id)
      }
      catch(err) {
      }
      if (o) {
        resolve()
      }
    }
    // 开始加载
    let script = document.createElement('script')
    if (isCrossOrigin) {
      script.setAttribute('crossOrigin', 'anonymous')
    }
    script.src = src
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject()
    }
    document.head.appendChild(script)
  })
}

