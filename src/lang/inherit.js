import {create as objCreate} from './objectShim'


function inherit (SuperClass, SubClass) {
  let originPrototype = SubClass.prototype
  // 为避免丢掉constructor，建立原型关系的同时创建constructor
  SubClass.prototype = objCreate(SuperClass, {
    value: SuperClass,
    configurable: true,
    enurable: false,
    writable: false
  })
  // 恢复子类原型的自有属性 (这里浅拷贝即可)
  for (prop in originPrototype) {
    if (originPrototype.hasOwnProperty(prop)) {
      SubClass.prototype[prop] = originPrototype[prop]
    }
  }
}


export default inherit
