export function add(a, b, ...args) {
  console.log('window', window.j, process.env, args)
  console.log(new Set())
  return a + b
}

// eslint-disable-next-line no-unused-vars
var a = 123
export async function addEvent() {
  await Promise.resolve(123)
  console.log('jquery', $)
  document.addEventListener('scroll', () => {
    console.log('page scroll')
  })
}
