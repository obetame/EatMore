"use strict";

import {HOME} from "../action/ActionType";
import {Home} from "../Configure";//导入主页数据

// 根据动作类型的返回值改变主页数据
export default function ReducerHome(state=Home,action){
	switch(action.type){
		case HOME.CHANGE_LINK:
			// ...state是ES7提案对象展开运算符
			return {
				...state
			};
		case HOME.CHANGE_SLIDER:
			// Object.assign是es6的方法,使用 Object.assign() 新建了一个副本
			return Object.assign({},state,{})
		case HOME.CHANGE_MENU:
			return {
				...state
			}
		case HOME.CHANGE_ACTIVEITY:
			return {
				...state
			}
		case HOME.CHANGE_KILL:
			return {
				...state
			}
		case HOME.CHANGE_SLIDER2:
			return {
				...state
			}
		case HOME.CHANGE_LIST:
			return {
				...state,
				HomeList:action.HomeList
			}
		default:
			// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
			return state;
	}
}