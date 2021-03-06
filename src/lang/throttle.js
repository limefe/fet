/**
 * @file 函数节流 throttle
 * @author sheldon<websheldoncui@gmail.com>
 *
 * @desc throttle【发音: 司如啊套】表示掐死的意思，即对于时间间隔内的多余的函数调用都掐掉
 *
 * @desc debounce 防抖/去抖: 顾名思义, 防止函数被过快地连续触发，他采取的策略是不触发，直到你event停了才触发. 防抖采取的方案是太快的话，在我的时间节奏之内如果你触发很多次，无论你触发多少次我只以你最后触发的那一次来触发.
 * @desc throttle 节流: 也是防止函数被过快连续触发，他采取的策略是按照一定的时间间隔来触发。也可以这样说: 你触发太快的话，我还是按我的节奏来触发，可能你触发很多次的时候才到达我的某次节奏。
 *
 * @desc 比喻: 防抖/去抖 上电梯时如果不断的有人(事件)进来，我电梯门就一直会等待，直到没人进来；而不会上来一个人就开始上楼。这叫防抖
 * @desc 比喻: 流水发车的车站，半小时走一趟车。半小时之内有多少人(事件)进来，车也只在半小时到了的时候才发出，不会让每个人上车就发车. 这叫节流。
 *
 * @desc 去抖应用: 在页面按钮点击触发ajax请求时，为了避免用户快速点击n次发送n多个请求，可以进行去抖，只在用户不点击按钮了的时候才触发一次
 * @desc 去抖应用: 在input框里输入内容时，vue框架做了debounce，延迟了对data的数据更新。因此你无法在input事件持续触发时watch到你的数据。只有用户停下敲键盘了，vue的data才会变化
 * @desc 节流应用: 要实现元素的贴顶效果，例如多屏的商城，用户滑到下面查看商品详情时，"评论""规格"这几个tab应该吸顶。你要监听页面的scroll事件来去让tab在移出屏幕时吸顶。但scroll事件太多，你需要节流
 */

/**
 * 函数节流
 *
 * @param {Function} fn 要节流的函数
 * @param {number} duration 单位: 秒。 最小的触发时间，即函数被多次被调时，达到最小时间间隔才会触发
 *
 * 理解记忆: 节流是有时间频率的
 */
export function throttle(fn, duration) {
  let preTime = Date.now()
  return function() {
    if (Date.now() - preTime >= duration) {
      setTimeout(fn.bind(this), 0) // 这里用setTimeout合适吗，会不会event事件一直触发导致无法执行目标函数呢?
      preTime = Date.now()
    }
  }
}
