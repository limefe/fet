/**
 * @file 屏蔽页面的音视频播放(最好在页面主逻辑)
 * @author sheldon<websheldoncui@gmail.com>
 * @date 2018-06-28
 */

export default mask = function () {
  document.querySelectorAll('audio, video').forEach(ele=>{
    ele.autoplay = false;
    ele.pause();
  })
  [HTMLAudioElement, HTMLVideoElement].forEach(cons=>{
    cons.prototype.play = function () {}
  })
}
