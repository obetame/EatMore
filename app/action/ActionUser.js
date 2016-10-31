"use strict";
// 这个是定义的动作,每个动作都是一个函数
// 调用动作来改变对应的数据

import {Alert} from "react-native";
import {LOG} from "./ActionType";

let testUser = {
	'phone': '13531082733',
	'password': 'mama'
};

let skipUser = {
	'phone': '00000000000',
	'password': '0000'
};

// 登录操作
export function LogIn(){
	return (dispatch) => {
		dispatch({"type":LOG.LOG_IN,"user":testUser});
		// dispatch({"type":LOG.LOG_ING});
		// let inner_get = fetch('http://www.baidu.com')
		// 	.then((res)=>{
		// 		dispatch({"type":LOG.LOG_IN,"user":testUser});
		// 	})
		// 	.catch((error)=>{
		// 		Alert.alert(error.message);
		// 		dispatch({"type":LOG.LOG_ERROR,"error":error});
		// 	})
	}
}

// 跳过登录
export function skipLogIn(){
	return {
		"type":LOG.LOG_IN,
		"user":skipUser
	}
}

// 退出登录
export function LogOut(){
	return {
		"type":LOG.LOG_OUT
	}
}