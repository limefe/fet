export function addEventListener(ele, type, handler) {
  if (document.addEventListener) {
    ele.addEventListener(type, handler, false)
  } else if (document.attatchEvent) {
    ele.attatchEvent(`on${type}`, handler)
  } else {
    ele[`on${type}`] = handler
  }
}

export function preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault()
  } else {
    e.returnValue = false
  }
}

export function stopPropagaion(e) {
  if (e.stopPropagaion) {
    e.stopPropagaion()
  } else {
    e.cancelBubble = true
  }
}
