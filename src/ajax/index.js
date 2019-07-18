/**
 * @file 异步请求
 * @author yongjiancui<websheldoncui@gmail.com>
 */

import createXHR from './createXHR'

/**
 * 最基本的ajax请求函数
 * @param {Object} options 请求配置
 * @return {Promise} 返回一个Promise
 */
function ajax(options) {
  if (fetch) {
    return fetch(options)
  } else {
    return new Promise((resolve, reject) => {
      const xhr = createXHR()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(new Error())
        }
      }
      xhr.open(options.method, options.url, false)
      xhr.send(options.data)
    })
  }
}

export default {
  fetch: ajax,
}
