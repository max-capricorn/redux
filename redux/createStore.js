/*
 * @Author: sheng.wang
 * @Date: 2021-04-28 17:27:35
 * @LastEditTime: 2021-04-30 14:05:21
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/redux/createStore.js
 */

export default function createStore (reducer, initialState, rewriteCreateStoreFunc) {
  if (rewriteCreateStoreFunc) {
    const nextCreateStore = rewriteCreateStoreFunc(createStore)
    return nextCreateStore(reducer, initialState)
  }

  let state = initialState;
  let listeners = [];
  function subscribe (listener) {
    listeners.push(listener)
  }
  function getState () {
    return state;
  }

  function dispatch (action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  dispatch({ type: Symbol() })
  return {
    subscribe,
    getState,
    dispatch
  }
}
