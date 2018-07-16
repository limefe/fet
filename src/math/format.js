/*
 * @file: 数学上的数据格式化相关
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-15 21:45:10
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-15 21:45:53
 */


/**
 * 格式化为千分位表示法
 * @param {Number} num 要格式化的数字
 */
export function digit(num) {
  return (num).toLocaleString('en-us')
}
