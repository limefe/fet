var ArrayList = function() {
  this.arr = []
}
ArrayList.prototype.insert = function(item) {
  this.arr.push(item)
}
ArrayList.prototype.toString = function() {
  return this.arr.join()
}
ArrayList.prototype.bubbleSort = function() {
  // 外层循环控制循环轮数
  for (var i = 0, len = this.arr.length; i < len - 1; i++) {
    // 内层循环控制两两比较的次数 (由于大的元素会在每轮沉底，所以随着轮数增加，两两比较次数会减少)
    for (var j = 0; j < len - i - 1; j++) {
      if (this.arr[j] > this.arr[j + 1]) {
        // 交换以使其沉底
        this.swap(j, j + 1)
      }
    }
  }
}
ArrayList.prototype.selectionSort = function() {
  var minIndex = Number.NEGATIVE_INFINITY
  // 寻找最小值来交换
  // 外层决定找几轮。因为每一轮都会缩小数组范围，缩小到2个元素时就没必要再进行一轮，因此可以少进行一轮
  for (var i = 0, len = this.arr.length; i < len - 1; i++) {
    // 内层从当前可选择的范围内进行最小值获取，并把小的交换到当前范围的最前面
    minIndex = i // 假设当前范围最小值是第一个元素
    for (var j = i; j < len; j++) {
      if (this.arr[j] < this.arr[minIndex]) {
        // 小于当前范围的最小值，则记录下最小索引
        minIndex = j
      }
    }
    if (minIndex !== i) {
      this.swap(minIndex, i)
    }
  }
}
ArrayList.prototype.mergeSort = function() {
  function mergeSortRec(arr) {
    if (arr.length === 1) {
      return arr
    }
    var mid = Math.floor(arr.length / 2)
    var leftArr = arr.slice(0, mid)
    var rightArr = arr.slice(mid)
    return merge(mergeSortRec(leftArr), mergeSortRec(rightArr))
  }
  function merge(leftArr, rightArr) {
    // 合并2部分数组，由于是有序的，所以可以按照index递增合并
    var ileft = 0
    var iright = 0
    var result = []
    while (ileft < leftArr.length && iright < rightArr.length) {
      // 只要两个数组都同时还有元素，就可以比较。
      if (leftArr[ileft] < rightArr[iright]) {
        result.push(leftArr[ileft++])
      } else {
        result.push(rightArr[iright++])
      }
    }
    // 剩下的有元素的数组，直接放进来即可
    while (ileft < leftArr.length) {
      result.push(leftArr[ileft++])
    }
    while (iright < rightArr.length) {
      result.push(rightArr[iright])
    }
    return result
  }
  this.arr = mergeSortRec(this.arr)
}

ArrayList.prototype.swap = function(index1, index2) {
  var tmp = this.arr[index1]
  this.arr[index1] = this.arr[index2]
  this.arr[index2] = tmp
}
