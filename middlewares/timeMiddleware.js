/*
 * @Author: sheng.wang
 * @Date: 2021-04-30 11:44:05
 * @LastEditTime: 2021-04-30 11:47:13
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/middlewares/timeMiddleware.js
 */
const timeMiddleware = store => next => action => {
  console.log('⌚️ ', new Date().toLocaleDateString())
  next(action)
}

export default timeMiddleware