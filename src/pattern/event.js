/**
 * 事件发布订阅模式
 */


import inherit from '../lang/inherit'


 // 基类


class EventEmiiter {
  constructor () {
    this.listners = {} // 订阅者
  }

  on (type, listener) {
    let typeLists = this.listners[type] = this.listners[type] || []
    typeLists.push(listener)
  }

  emit (type) {
    let typeListeners = this.listners[type] || []
    for (let i = 0, fn; fn = typeListeners[i++];) {
      typeListeners.apply(this, [].slice.call(arguments, 1))
    }
  }
}


export


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

