/*
 * @file: 字符串的相关用例
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-14 21:13:02
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-14 21:13:45
 */

import { expect } from 'chai' // 断言库
import search from '../src/string/search'

describe('search模块的测试', () => {
  it('add is a function', () => {
    expect(add).to.be.an.instanceof(Function)
  })
  it('2 + 4 = 6', () => {
    expect(add(2, 4)).equal(6);
  })
});
