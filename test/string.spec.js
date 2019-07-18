/*
 * @file: 字符串的相关用例
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-14 21:13:02
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-08-04 00:55:47
 */

import { expect } from 'chai' // 断言库
import string from '../src/string'

// 套件
describe('fet.string 模块的测试', () => {
  // 用例
  it('string.trim 去除留白测试', () => {
    expect(string.trim(' abc ')).to.equal('abc')
  })
  // 用例
  it('string.version.compare 测试', () => {
    expect(string.version.compare('1.0.0', '1.0.1')).to.equal(-1)
    expect(string.version.compare('1.0.2', '0.3.3')).to.equal(1)
  })
})
