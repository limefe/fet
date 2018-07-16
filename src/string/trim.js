/*
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-13 23:47:14
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-15 14:16:49
 */

/**
 * 去除字符串左右的空内容(包括 空格\x32、制表符\t、latin1字符集中的表象空格\xa0、unicode字符集中的全角空格\u3000)
 * \x**(十六进制字符表示法) 和 \u****(十六进制unicode字符表示法) 是字符串类型的字符字面量表示法的一种，参考《JavaScript高级程序设计第三版》p33
 * 实际上再严格点，也可以把 \x0b垂直定位符号 \x0c换页符(告诉打印机该换页了) 也当做空白符；因此严格来说应该用这样的正则: [\t\n\x0B\f\r\x0C ], 其实就是\s. 不过我们这里暂时没有这么严格
 *
 * @param {String} str 源字符串
 * @return 左右去掉空内容后的字符串
 */
export function trim(str) {
  return str.replace(/^([\s\t\xa0\u3000)+|[\s\t\xa0\u3000]+$/, '')
}
