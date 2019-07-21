function Stack() {
  // 其实this.items这样会暴漏items给外部的，这是js的缺陷，无法避免。 (我们最好把这里的item命名为_items以表示他是私有的)
  // 除非我们在函数内部用局部变量，然后用闭包形式才能隐藏局部变量。然而方法一般放在Stack的原型上，为了方便拿到这个items只能放在this上，无法进行私有化
  this.items = []
}

Stack.prototype.pop = function(item) {
  return this.items.pop()
}

Stack.prototype.push = function(item) {
  this.items.push(item)
}

Stack.prototype.peek = function() {
  if (!this.isEmpty) {
    return this.items[this.size() - 1]
  } else {
    return null
  }
}

Stack.prototype.isEmpty = function() {
  return this.items.length === 0
}

Stack.prototype.size = function() {
  return this.items.length
}

Stack.prototype.clear = function() {
  this.items = []
}

/**
 * 获取栈中数字的最大值(前提是push进栈的是数字哦)
 *
 * @desc 这是个面试题咯。要求使用O(1)的时间复杂度获得栈中的最大值
 */
Stack.prototype.max = function() {
  // 思路是维护一个辅助栈as, 在栈的push、pop操作时始终把当前的最大值push到辅助栈as里面；as栈始终保持栈顶到栈底是倒序
  // 取max时，直接取辅助栈as的栈顶元素即可
  return this.as.pop()
}
