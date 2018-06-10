


import {loadScript} from './loadresource'
import * as qs from './querystring'


/**
 * jsonp跨域请求(仅能发起get请求)
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 */
export function jsonp(url, params) {
  let callback = params.callback || `jsonpCb${Date.now()}`
  window[callback] = res => resolve(res)
  url += (/\?/.test(url) ? '&' : '?')
  url += qs.stringify(params)
  loadScript(url).catch(()=>reject())
}

