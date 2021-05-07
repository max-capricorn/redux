/*
 * @Author: sheng.wang
 * @Date: 2021-04-30 11:31:31
 * @LastEditTime: 2021-04-30 11:40:42
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/middlewares/loggerMiddleware.js
 */
const loggerMiddleware = store => next => action => {
  console.log('⏰ this.state', store.getState())
  console.log('🍇 action', action)
  next(action)
  console.log('🍎 next state', store.getState())
}

export default loggerMiddleware