/*
 * @Author: sheng.wang
 * @Date: 2021-04-29 14:15:56
 * @LastEditTime: 2021-04-30 11:17:22
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/reducers/counter.js
 */

export default function reducer (state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default: return state
  }
}
