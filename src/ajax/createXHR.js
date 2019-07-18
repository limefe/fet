export function createXHR() {
  if (XMLHttpRequest) {
    return new XMLHttpRequest()
  }
  if (ActiveXObject) {
    return new ActiveXObject('MSXML2.XMLHttp')
  }
}
