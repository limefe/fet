/*
 * @file: 对url进行的相关操作函数
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-15 14:22:15
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-15 14:25:36
 */

/**
 * 将url转换为html a链接的形式。 常用语编辑器内发布链接的场景
 * @param {String} url 待转换的url
 */
export function toLink(url) {
  let reg = /(http:\/\/|https:\/\/).+/
  return url.replace(reg, '<a href="$1$2">$2</a>')
}
