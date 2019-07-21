// sematic 语义版本号对比. 1 表示前者大，-1表示前者小，0表示相等。

export const compare = (first, second) => {
  const firstVersion = first.split('.').map(item => parseInt(item))
  const secondVersion = second.split('.').map(item => parseInt(item))

  for (let i = 0; i < 3; i++) {
    if (firstVersion[i] < secondVersion[i]) {
      return -1
    }
    if (firstVersion[i] > secondVersion[i]) {
      return 1
    }
  }

  return 0
}
