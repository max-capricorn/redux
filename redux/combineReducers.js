/*
 * @Author: sheng.wang
 * @Date: 2021-04-29 13:55:06
 * @LastEditTime: 2021-04-30 11:11:05
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/redux/combineReducers.js
 */

export default function combineReducers (reducers) {
  const reduceKeys = Object.keys(reducers)
  return function combination (state = {}, action) {
    const nextState = {}
    for (let i = 0; i < reduceKeys.length; i++) {
      const key = reduceKeys[i]
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState;
  }
}

