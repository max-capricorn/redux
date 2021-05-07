/*
 * @Author: sheng.wang
 * @Date: 2021-05-07 11:18:26
 * @LastEditTime: 2021-05-07 11:20:24
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/actions/info.js
 */
function setName () {
  return {
    type: 'SET_NAME',
    name: 'I am Capricorn'
  }
}

export { setName }