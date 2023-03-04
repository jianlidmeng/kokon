/**
 * 获取当前url的参数
 * @param {String} paramName
 * @param {String} url
 * @returns
 */
const getUrlParameter = (paramName, url) => {
  if (!url) {
    url = window.location.href
  }
  const paramArr = url.slice(url.indexOf('?') + 1).split('&')
  const params = {}
  paramArr.map((param) => {
    const [key, val] = param.split('=')
    params[key] = decodeURIComponent(val)
  })
  return params[paramName]
}

/**
 * @name urlAddHttp
 * @description 添加http/https
 * @function
 * @param { String } url url
 * @return { String } url
 * @example
 * urlAddHttp('baidu.com')
 * //http://baidu.com
 */

const urlAddHttp = (url) => {
  return url ? (url.includes('http') ? url : `${location.protocol}//${url}`) : ''
}

export { getUrlParameter, urlAddHttp }
