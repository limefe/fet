/*
 * @file: 字符串搜索相关
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-14 21:11:54
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-14 21:12:52
 */

/**
 * 从源串中查找出所有子串所在的坐标，以数组形式返回
 *
 * @param {String} substr 子串
 * @param {String} str 源串
 * @return {Array} 源串中出现的所有子串的下标组成的数组，如 [1, 4, 10]
 */
export function search(substr, str) {
  let pos = str.indexOf(substr)
  let positions = []
  while (pos > -1) {
    positions.push(pos)
    pos = str.indexOf(substr, pos + 1)
  }
  return positions
}
