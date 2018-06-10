/**
 * @file 路由类
 * @author websheldoncui@gmail.com
 * @date 2018-06-05
 */

import {type} from '../lang/type'


class Router {
  // 构造函数
  constructor(config) {
    if (type(config) === 'object') {
      this._config = config
      this._init(config)
    }
  }

  // 初始化路由配置
  _init(config) {
    this._rules = [] // 路由规则
    this.mode = (config.mode === 'history' && !!(history.pushState)) ? 'history' : 'hash'
    config.rules && config.rules.forEach(this.add) // 遍历、编译并添加路由规则
  }

  // 开启路由监听
  start() {

  }

  // add 动态增加路由项. path, name, handler
  add(rule) {
    if (!rule.path || !rule.handler) {
      return
    }
    if (!rule.name) {
      rule.name = rule.path
    }

  }

  // remove 动态删减路由项
  remove() {

  }

  // go 动态编程导航
  go() {

  }

}







// var Router = function (router, iframeSelector) {
//   this.router = router
//   this.iframe = document.querySelector(iframeSelector)
//   if (!this.router || !this.iframe) {
//   }
//   this.initEvent()
// }
// /*
//   路由切换方法
//   routeName: 要切换到的页面name
//   ele: 由哪个dom元素触发的切换（内部会给该ele加上active的样式）
// */
// Router.prototype.go = function (routeName, ele) {
//   if (ele === this.activeBtn) {
//       return
//   }
//   var pageUrl = this.router[routeName]
//   if (pageUrl) {
//       this.iframe.src = pageUrl
//       // 修改页面上对应routeName的id的元素的active样式
//       if (ele) {
//           ele.classList.add('active')
//           this.activeBtn && (this.activeBtn.classList.remove('active'))
//           this.activeBtn = ele
//       }
//   }
// }
// Router.prototype.initEvent = function () {
//   var self = this
//   // 给页面上的v-link绑定路由切换事件
//   var links = document.querySelectorAll('[v-link]')
//   links.forEach(function (item) {
//       item.addEventListener('click', function (e) {
//           window.location.hash = e.target.attributes['v-link'].value
//           e.preventDefault()
//           e.stopPropagation()
//       }, false)
//   })
//   window.onload = function () {
//       // 页面刚进来，进行一次页面初始化
//       var loadHash = window.location.hash.slice(1)
//       if (loadHash) {
//           var ele = document.querySelector('[v-link='+ loadHash +']')
//           self.go(loadHash, ele)
//       }
//       else {
//           // 默认路由
//           var ele = document.querySelector('[v-link]')
//           window.location.hash = ele.attributes['v-link'].value
//       }
//   }
//   // 监听页面hashChange事件, 从而支持前端的：前进后退
//   window.addEventListener('hashchange', function(e){
//       var hash = window.location.hash.slice(1)
//       if (hash) {
//           var ele = document.querySelector('[v-link='+ hash +']')
//           self.go(window.location.hash.slice(1), ele)
//       }
//       e.preventDefault()
//   },false)
// }
