// 测试脚本 add.specs.js
import { expect } from 'chai' // 断言库
import lang from '../src/lang'

describe('fet.lang 模块的测试', () => {
  it('lang is a object', () => {
    expect(lang).to.be.an.instanceof(Object)
  })
  it('lang.Promise is a function', () => {
    expect(lang.Promise).to.be.an.instanceof(Function)
  })
  const { type } = lang.type
  it('lang.type is a Object', () => {
    expect(lang.type).to.be.an.instanceOf(Object)
  })
  it('lang.type.type({}) is equal to string "object"', () => {
    expect(type({})).to.equal('object')
  })

  it('lang.type.type([]) is Array', () => {
    expect(type([])).to.equal('array')
  })
})
