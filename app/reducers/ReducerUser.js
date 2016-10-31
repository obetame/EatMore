"use strict";

import {LOG} from "../action/ActionType";
import {UserData} from "../Configure";//导入用户数据

// 根据动作类型的返回值改变用户数据
export default function ReducerUser(state=UserData,action){
	switch(action.type){
		// 正在登录
		case LOG.LOG_ING:
			// ...state是ES7提案对象展开运算符
			return {
				...state,
				status:"doing"
			};
		// 登录后
		case LOG.LOG_IN:
			// Object.assign是es6的方法,使用 Object.assign() 新建了一个副本
			return Object.assign({},state,{
				status:"done",
				isLogin:true,
				user:action.user
			})
		// 退出登录
		case LOG.LOG_OUT:
			return {
				...state,
				status:"out",
				isLogin:false,
				user:{}
			}
		case LOG.LOG_ERROR:
			return {
				...state,
				status:"error",
				isLogin:false,
				user:{}
			}
		default:
			// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
			return state;
	}
}