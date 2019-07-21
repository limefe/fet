/*
 * @file: 斐波那契数列
 * @desc: 也用于解决青蛙跳楼梯等问题
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-28 15:47:48
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-28 17:09:41
 */

// 斐波那契数列
export function fibonacci(num) {
  if (num === 1 || num === 2) {
    // 终止条件
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// 循环版fibonacci
export function loopFibonacci(num) {
  let increaseResult = 0
  let pre1 = 1
  let pre2 = 1
  for (let i = 3; i < num; i++) {
    increaseResult = pre1 + pre2
    pre1 = pre2
    pre2 = increaseResult
  }
  return increaseResult
}

/**
 * 青蛙一次可以跳1层或2层。请问一个n层的楼梯青蛙有多少种跳法，如1层有1种跳法，2->2种, 3->3种, 4->5种, 5->8种
 * 理解: 比如3层楼梯时，可以这样思考: 如果青蛙首次跳一层，则有f(2)种方法；首次跳2层则有f(1)种方法，因此f(3)=f(1)+f(2)
 * TODO: 动态规划法 https://www.cnblogs.com/a294098789/p/5404377.html
 *
 * 变态版: 变态版是指的青蛙能力比较强，可以一次跳任意阶梯，求多少种跳法。可参考: https://blog.csdn.net/cassie327/article/details/73917360
 * @param {Number} n 楼层数
 */
export function jump(n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  }
  return jump(n - 1) + jump(n - 2)
}

// 基本青蛙跳楼梯循环迭代版本
export function loopJump(n) {
  const pre1 = 1
  let pre2 = 2
  let counts = 0
  for (let i = 3; i < n; i++) {
    counts = pre1 + pre2
    pre2 = pre1
    pre2 = counts
  }
  return counts
}

// 打印出青蛙跳的所有方式
export function jumpStep(n) {
  // TODO: https://blog.csdn.net/u010582082/article/details/77479995
}
