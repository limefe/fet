/*
 * @file: html转义，防止html注入
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-15 10:16:48
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-08-04 00:55:33
 */

export function htmlEscape(html) {
  return html.replace(/[<>"&]/g, matched => {
    switch (matched) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '"':
        return '&quot;'
    }
  })
}
