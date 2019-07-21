/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/*
 * @file: 对url进行的相关操作函数
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-15 14:22:15
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-28 18:11:53
 */

/**
 * 正则判断是否是合法的url格式
 * @param {String} url url字符串
 */
export function isUrl(url) {}

/**
 * 将url转换为html a链接的形式。 常用语编辑器内发布链接的场景
 * @param {String} url 待转换的url
 */
export function toLink(url) {
  const reg = /(http:\/\/|https:\/\/).+/
  return url.replace(reg, '<a href="$1$2">$2</a>')
}

/**
 * 解析url的各个部分
 * @param {String} url
 */
export function parseUrl(url) {
  Poly9.URLParser.prototype._parse = function(url) {
    this._initValues()
    var r = this._regex.exec(url)
    if (!r) throw new Error('DPURLParser::_parse -> Invalid URL')

    for (var f in this._fields)
      if (typeof r[this._fields[f]] !== 'undefined') {
        this._values[f] = r[this._fields[f]]
      }
  }
}

this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^/?:]+):?(\d+)?(\/?[^?#]+)?\??([^#]+)?#?(\w*)/
