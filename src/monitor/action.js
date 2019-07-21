/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { newBeacon } from './push'

/**
 * 点击上报 可用于创建热力图
 * 需要页面进行 monitor-id属性的埋点
 */

function clickReport() {
  document.addEventListener(
    'click',
    e => {
      const ele = e.target
      var formData = new FormData()
      formData.append('tp', 'click')
      formData.append('n', ele.tagName)
      formData.append('id', ele.getAttribute('monitor-id'))
      formData.append('t', Date.now())
      navigator.sendBeacon(url, formData)
    },
    false,
  )
}
