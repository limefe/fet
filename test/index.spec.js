import fet from '../src/index'
import { expect } from 'chai'

describe('fet 的测试', function() {
  it('fet is a object', function() {
    expect(fet).to.be.an.instanceof(Object)
  })
  it('fet.string is a Object', function() {
    expect(fet.string).to.be.an.instanceof(Object)
  })
  it('fet.lang is a Object', function() {
    expect(fet.lang.Promise).to.be.an.instanceof(Object)
  })
})
