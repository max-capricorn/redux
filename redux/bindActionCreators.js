/*
 * @Author: sheng.wang
 * @Date: 2021-05-06 16:11:37
 * @LastEditTime: 2021-05-07 11:39:17
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/redux/bindActionCreators.js
 */

function bindActionCreator (actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
export default function bindActionCreators (actionCreators, dispatch) {
  const boundActionCreators = {}
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
