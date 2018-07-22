/*
 * @file: 事件发射器（事件发射订阅模式）
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-21 14:07:51
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-21 14:13:33
 */

import inherit from '../lang/inherit'


 // 基类


class EventEmiiter {
  constructor () {
    this.listners = {} // 订阅者
  }

  on (type, listener) {
    let typeLists = this.listners[type] = this.listners[type] || []
    if (typeLists.indexOf(listener) === -1) {
      typeLists.push(listener)
    }
  }

  off (type, listener) {
    let typeLists = this.listners[type]
    if (Array.isArray(typeLists)) {
      if (listener) {
        typeLists.splice(typeLists.indexOf(listener), 1)
      }
      else {
        this.listners[type].length = 0
      }
    }
  }

  emit (type) {
    let [type, ...args] = arguments
    let typeListeners = this.listners[type] || []
    for (let i = 0, fn; fn = typeListeners[i++];) {
      typeListeners.apply(this, args)
    }
  }
}


export {EventEmiiter}


 // 创建一个具有发布订阅事件的能力的类
export function getEventSuperClass() {
  let aClass = function () {
    if (!(this instanceof aClass)) {
      return new aClass()
    }
    // 子类来维护订阅者列表
    EventEmiiter.call(this)
  }
  // 原型继承EventEmitter，获得添加订阅和发布事件的能力
  inherit(EventEmiiter, aClass)
  return aClass
}


// 备注: 要实现once, 参考 https://github.com/ecomfe/saber-emitter/blob/master/test/spec/emitter.js
