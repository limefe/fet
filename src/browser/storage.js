




/**
 * 由于localStorage只能存储字符串类型的数据，因此本工具函数封装了JSON处理的过程，协助你进行对象存储
 */
export const localStorage = {
  setItem(k, v) {
    try {
      v && (v = JSON.stringify(v)) // 这样可以防止把undefine和null进行JSON序列化
      window.localStorage.setItem(k, v)
    }
    catch (err) {
      window.localStorage.setItem(k, JSON.stringify(''))
    }
  },
  getItem(k) {
    // 不可信任存储读来的数据；（因为可能会因为字符串不符合json规范，或者根本不是String类型而报错）
    try {
      let v = window.localStorage.getItem(k)
      return JSON.parse(v)
    }
    catch(err) {
      return null
    }
  },
  removeItem(k) {
    window.localStorage.removeItem(k)
  },
  clear() {
    window.localStorage.clear()
  }
}



/**
 * 同localStorage
 */
export const sessionStorage = {
  setItem(k, v) {
    try {
      v && (v = JSON.stringify(v))
      window.localStorage.setItem(k, v)
    }
    catch (err) {
      console.warn('不支持或设置失败')
    }
  },
  getItem(k) {
    try {
      return JSON.parse(window.localStorage.getItem(k))
    }
    catch (err) {
      return null
    }
  },
  removeItem(k) {
    window.localStorage.removeItem(k)
  },
  clear() {
    window.localStorage.clear()
  }
}
