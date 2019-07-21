/*
 * @file: 这是一个observer，用来监听data数据对象的变更，并向订阅者watcher发布消息(watcher和observer之间通过pubsub发布订阅器来联系, watcher是订阅者)
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-22 11:31:33
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-22 12:39:30
 */

/**
 *  实现一个简单的发布订阅器。由于只有一个data change的消息，因此不需要区分消息名了
 *
 */
var _Dep = function() {
  this.subs = []
}
// 消息发布
_Dep.prototype.notify = function() {
  this.subs.forEach(sub => {
    sub.update()
  })
}
// 消息订阅
_Dep.prototype.addSub = function(sub) {
  this.subs.push(sub)
}

/**
 * data的Observer监听器 构造函数
 */
function Observer(data) {
  this.data = data // 原始数据内部挂载一下
  // walk所有属性，递归建立setter监听
  this.walk(data)
}

// walk建立setter监听
Observer.prototype.walk = function(data) {
  Object.keys(this.data).forEach(k => {
    this.defineReactive(this.data, k)
  })
}
Observer.prototype.defineReactive = function(data, k) {
  var dep = new _Dep()
  if (data[k] && typeof data[k] === 'object') {
    this.walk(data[k])
  }
  Object.defineProperty(data, k, {
    enumerable: true,
    configurable: false,
    set(val) {
      if (val !== data[k]) {
        data[k] = val
        this.walk(val) // 新值有可能是Object类型，则继续进行递归监听
        // 通知watcher订阅者 (订阅者是每个属性key都会有一个独立的订阅器)
        dep.notify()
      }
    },
    get() {},
  })
}

/**
 * 对外给vm暴露的监听函数，协助vm实例创建对data的监听器
 */
export function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}
