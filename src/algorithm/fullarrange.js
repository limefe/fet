/*
 * @file: 数据矩阵相关算法
 * @Author: sheldoncui(websheldoncui@gmail.com)
 * @Date: 2018-07-28 16:33:34
 * @Last Modified by: sheldoncui
 * @Last Modified time: 2018-07-28 17:10:01
 */

// 二维数组的全排列. 假设输入 arr=[[1,2],[3,4],[5,6]], 需要输出 [1,3,5] [1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]
export function arrangeArr(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    // 外层i是二维数组的行号
    for (let j = 0, len = arr[i].length; j < len; j++) {
      // 内层j是二维数组的列号
      // todo: https://blog.csdn.net/qq_20567691/article/details/80286682
    }
  }
}
