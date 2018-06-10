

/**
 * 将查询字符串转换为js对象
 * @param {String} str 查询字符串
 */
export function parse(str) {
  str.split('&')
  // 是否可以用正则来直接把()=()类似的字符给匹配出来直接用呢。
}


/**
 * 把js对象转换为查询字符串queryString
 * @param {Object} qs 包含若干个key-value对的js对象
 * @return {String} 查询字符串
 */
export function stringify(qs) {
  let arr = []
  Object.keys(qs).forEach(k=>{
    let v = qs[k]
    arr.push(`${k}=${v}`)
  })
  return arr.join('&')
}
