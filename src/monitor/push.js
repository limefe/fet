/**
 * 上报到服务器
 */



/**
 * 传统beacon图片方式上报
 */
function beacon(params, url) {
  let img = new Image()
  let qs = ''
  Object.keys(params).forEach(key=>{
    qs += ((qs === '' ? '' : '&') + `${key}=${params[key]}`)
  })
  img.src = `${url}?${qs}`
}



/**
 * beacon api 方式
 */
function newBeacon(url, data) {
  navigator.sendBeacon(url, data);
}
