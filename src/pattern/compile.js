/*
 * @file: 解析模板指令，替换模板数据，为指令绑定更新函数添加订阅者
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-22 12:45:51
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-22 13:42:20
 */


export function Compile(el, vm) {
  this.$vm = vm
  this.$el = this.isElementNode(el) ? el : document.querySelector(el)
  if (this.$el) {
    // 将模板转换为内存文档碎片
    this.$elFragment = this.node2Fragment(this.$el)
    // 进行模板解析, 指令绑定更新函数
    this.init()
    // 结果渲染
    this.$el.appendChild(this.$elFragment)
  }
}


Compile.prototype = {
  // 是否是Element类型的节点
  isElementNode: function (node) {
    return node.nodeType === 1
  },
  node2Fragment: function (node) {
    var fragment = document.createDocumentFragment(),
      child
    // 把el下所有节点移动到fragment节点内
    while (child = node.firstChild) {
      fragment.appendChild(child)
    }
    return fragment
  },
  init: function () {
    this.compileElement(this.$fragment);
  },
  compileElement: function (el) {
    var childNodes = el.childNodes,
      me = this;
    [].slice.call(childNodes).forEach(function (node) {
      var text = node.textContent;
      var reg = /\{\{(.*)\}\}/; // 表达式文本
      // 按元素节点方式编译
      if (me.isElementNode(node)) {
        me.compile(node);
      } else if (me.isTextNode(node) && reg.test(text)) {
        me.compileText(node, RegExp.$1);
      }
      // 遍历编译子节点
      if (node.childNodes && node.childNodes.length) {
        me.compileElement(node);
      }
    });
  },
  compile: function (node) {
    var nodeAttrs = node.attributes,
      me = this;
    [].slice.call(nodeAttrs).forEach(function (attr) {
      // 规定：指令以 v-xxx 命名
      // 如 <span v-text="content"></span> 中指令为 v-text
      var attrName = attr.name; // v-text
      if (me.isDirective(attrName)) {
        var exp = attr.value; // content
        var dir = attrName.substring(2); // text
        if (me.isEventDirective(dir)) {
          // 事件指令, 如 v-on:click
          compileUtil.eventHandler(node, me.$vm, exp, dir);
        } else {
          // 普通指令
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
        }
      }
    });
  },
  compileText: function (node, exp) {
    compileUtil.text(node, this.$vm, exp);
  },
  isDirective: function (attr) {
    return attr.indexOf('v-') == 0;
  },
}



// 指令处理集合
var compileUtil = {
  // node当前发现的文本节点；vm当前vm实例；exp当前模板节点{{xx}}中间的变量名
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },

  html: function (node, vm, exp) {
    this.bind(node, vm, exp, 'html');
  },

  model: function (node, vm, exp) {
    this.bind(node, vm, exp, 'model');

    var me = this,
      val = this._getVMVal(vm, exp);
    node.addEventListener('input', function (e) {
      var newValue = e.target.value;
      if (val === newValue) {
        return;
      }

      me._setVMVal(vm, exp, newValue);
      val = newValue;
    });
  },

  class: function (node, vm, exp) {
    this.bind(node, vm, exp, 'class');
  },

  bind: function (node, vm, exp, dir) {
    var updaterFn = updater[dir + 'Updater'];

    updaterFn && updaterFn(node, this._getVMVal(vm, exp));

    new Watcher(vm, exp, function (value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue);
    });
  },

  // 事件处理
  eventHandler: function (node, vm, exp, dir) {
    var eventType = dir.split(':')[1],
      fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },

  _getVMVal: function (vm, exp) {
    // 根据模板中绑定的变量名 获取到 vm上对应的属性值
    var val = vm;
    exp = exp.split('.');
    exp.forEach(function (k) {
      val = val[k];
    });
    return val;
  },

  _setVMVal: function (vm, exp, value) {
    var val = vm;
    exp = exp.split('.');
    exp.forEach(function (k, i) {
      // 非最后一个key，更新val的值
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  }
};


// 返回对应指令类型的update函数
var updater = {
  textUpdater: function (node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },

  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value;
  },

  classUpdater: function (node, value, oldValue) {
    var className = node.className;
    className = className.replace(oldValue, '').replace(/\s$/, '');

    var space = className && String(value) ? ' ' : '';

    node.className = className + space + value;
  },

  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value;
  }
};
