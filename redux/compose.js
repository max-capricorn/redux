/*
 * @Author: sheng.wang
 * @Date: 2021-04-30 11:56:30
 * @LastEditTime: 2021-05-06 19:47:03
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/redux/compose.js
 */


export default function compose (...func) {
  if (func.length === 0) {
    return (arg) => arg
  }
  if (func.length === 1) {
    return func[0];
  }

  return func.reduce((a, b) => (args) => a(b(args)))
}