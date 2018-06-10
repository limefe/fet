

export function type(variable) {
  return Object.prototype.toString.call(variable).slice(8, -2).toLowerCase()
}




export function isPlainObject(variable) {
  return type(variable) === 'object' && Object.prototype.isPrototypeOf(variable)
}



export function isEmptyObject(variable) {
  return type(variable) === 'object' && Object.keys(variable).length === 0
}
