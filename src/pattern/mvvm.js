/*
 * @file: 一个简易mvvm双向绑定实现; 本模块是MVVM构造器函数的实现
 * @refer: https://github.com/DMQ/mvvm
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-22 11:22:01
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-22 12:17:26
 */

/**
 * MVVM视图模型构造器
 * @param {Object} options vm视图模型的类配置对象
 */
export function MVVM(options) {
  this.$options = options // 原始配置参数挂载在实例的$options属性上
  this.$data = options.data // 模仿vue, 把data属性挂载在vm.$data上一份
  // 把data的属性拦截并代理到vm对象下 （这里应该可以用es6的Proxy, 此处暂使用简单的getter特性拦截）
  Object.keys(options.data).forEach(dataKey => {
    this._proxyProperty(dataKey)
  })

  // 初始化属性监听
  // eslint-disable-next-line no-undef
  observe(data, this)

  // 编译模板 并初始化dom监听
  // eslint-disable-next-line no-undef
  this.$compile = new Compile(options.el || document.body, this)
}

// 代理data属性key到vm对象桑
MVVM.prototype._proxyProperty = function(k) {
  const me = this
  Object.defineProperty(this, k, {
    enumerable: true,
    configurable: false,
    get: function proxyGetter() {
      return me.$data[k]
    },
    set: function proxySetter(val) {
      me.$data[k] = val
    },
  })
}
