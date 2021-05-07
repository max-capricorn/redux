/*
 * @Author: sheng.wang
 * @Date: 2021-04-30 12:01:01
 * @LastEditTime: 2021-05-06 19:47:51
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/redux/applyMiddleware.js
 */
import compose from './compose.js';

const applyMiddleware = function (...middlewares) {
  return function (oldCrateStore) {
    return function (reducer, initState) {
      const store = oldCrateStore(reducer, initState);
      const simpleStore = { getState: store.getState };
      const chain = middlewares.map((middleware) => middleware(simpleStore))
      const dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}
export default applyMiddleware