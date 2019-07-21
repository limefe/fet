/* eslint-disable no-unused-vars */
/*
 * @file: virtual dom的简单实现
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-31 00:47:57
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-08-04 00:55:09
 */

/**
 * @desc 实际上所谓Virtual DOM的实现，就是实现一个JavaScript表达的HTML元素，这个元素具有类似于Html tag或body tag或div tag的类似属性和能力即可。
 * @desc 我认为
 */
class VElement {
  constructor(tagName, attrs, children) {
    this.tagName = tagName || ''
    this.attributes = attrs || []
    this.children = children || []
  }

  // 渲染元素实例到真实的dom中
  render() {
    const ele = document.createElement(this.tagName)
    Object.keys(k => {
      ele.setAttribute(k, this.attributes[k])
    })
    this.children.forEach(item => {
      // 如果某个孩子是文本，说明不是VElement类型，就把他当做文本节点来创建
      const childEle = item instanceof VElement ? item.render() : document.createTextNode(item)
      ele.appendChild(childEle)
    })
    // 返回的ele已经是真正的浏览器dom元素类型(可直接append到浏览器)
    return ele
  }
}

/**
 * 虚拟dom的diff算法
 * @param {VElement} ele1 VElement类型的dom元素(即一棵虚拟dom树)
 * @param {VElement} ele2 VElement类型的dom元素(即一棵虚拟dom树)
 */
export function diff(ele1, ele2) {}
