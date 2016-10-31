"use strict";
// 这个是定义的动作,每个动作都是一个函数
// 调用动作来改变对应的数据
import Reactotron from 'reactotron-react-native';
import {HOME} from "./ActionType";
import {Home} from "../Configure";//获取数据
const Link = Home.Link;

// 获取主页列表数据操作(改变的意思是只有当数据源改变的时候才会从服务器获取数据,如果没有改变则直接拿本地数据)
export function ChangeList(){
	return (dispatch) => {
		fetch(Link.HomeList)
			.then((response)=>response.json())
			.then((res)=>{
				dispatch({"type":HOME.CHANGE_LIST,HomeList:res.data});
			})
			.catch((error)=>{
				// dispatch({"type":HOME.LOG_ERROR,"error":error});
			})
	}
}

export function EmptyList(){
	return (dispatch) => {
		dispatch({"type":HOME.CHANGE_LIST,HomeList:[]});
	}
}