/**
 * 互联网技术领域常用正则
 */




/**
 * url统一资源定位符的正则
 * 这里简化了，仅校验http、ftp、https格式
 *
 * 解析:
 * (http|ftp|https):\/\/ 表示http://  https:// 这样的匹配
 * [-\w_]+(\.[-\w_]+)+  表示abc.com  abc.com.cn 这样的匹配
 * [\w\-\.,@?^=%&:/~\+#]* 表示重复零个或多个这些字符。用来匹配url后跟的path和queryString等内容
 *
 * 另外有一种简便不严谨的url匹配方式: 协议部分+斜杠部分+host部分+path部分   ([A-z]+)(://)([^ /]+)(/[^ ]*)?
 */
export const url = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+[\w\-\.,@?^=%&:/~\+#]*/.toString()






// https鉴定


/**
 * 获取html标签里面内容的正则
 * 中间内容部分也可以把 .* 换成 [^<>]*
 */
export const tagContent = /'(?<=<(\w+)>).*(?=<\/\1>)'/.toString()

/**
 * html 一个 tag标签的解析
 *
 * 解释: 匹配类似<a> <a href="www.baidu.com"> <a href='www.c.com/>' > 这样的标签
 * 思路: 两边是尖括号。中间是除了闭合尖括号的任意字符，或单引号括起来的任意字符 或双引号括起来的任意字符
 * 参考 http://imweb.io/topic/56e804ef1a5f05dc50643106
 */
export const tag = /<([^>'"]|'[^']*'|"[^"]*")+>/.toString()

// 判断ua是不是某个浏览器
let uaMap = {
  'android-browser': //,
    'xiaomi-browser': //,
    'safari-browser': //,
    'chrome-browser': //,
    'firefox-browser': //,
    'edge-browser': //,
    'ie-browser': //,
    'qq-browser': //,
    'uc-browser': //,
    'qq-app': //,
    'wechat-app': //,
}

let desktop = []



// cookie
export const cookie = /aaa/.toString()


/**
 * 用户名。 6-16位，只能包含大小写字母，数字下划线和减号
 * 第一位必须是字母
 */
export const username = /^[a-zA-Z]{1}[\w-]{7,15}$/.toString()


export const ip = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/
