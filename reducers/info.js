/*
 * @Author: sheng.wang
 * @Date: 2021-04-29 14:16:53
 * @LastEditTime: 2021-04-29 14:18:56
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/reducers/info.js
 */
export default function reducer (state, action) {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.name
      }
    }
    case 'SET_DESCRIPTION': {
      return {
        ...state,
        description: action.description
      }
    }
    default: return state
  }
}