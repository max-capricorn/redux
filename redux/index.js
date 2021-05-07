/*
 * @Author: sheng.wang
 * @Date: 2021-04-28 17:27:40
 * @LastEditTime: 2021-05-07 11:30:12
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /1/redux/index.js
 */
import createStore from './createStore.js';
import combineReducers from './combineReducers.js';
import applyMiddleware from './applyMiddleware.js'
import bindActionCreators from './bindActionCreators.js'
export { createStore, combineReducers, applyMiddleware, bindActionCreators }