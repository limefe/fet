
/**
 * 统计页面可交互时间
 */
export function interactive() {
  return performance.timing.domInteractive - performance.timing.navigationStart
}
