"use strict";
// 动作类型

// 登录,对应Configure中的UserData
export const LOG = {
	LOG_IN:"LOG_IN",//登录成功
	LOG_OUT:"LOG_OUT",//退出登录
	LOG_ERROR:"LOG_ERROR",//登录出错
	LOG_ING:"LOG_ING"//正在登录
}

// app配置,对应Configure中的AppInfo
export const APPCONFIG = {
	CHANGE_VERSION:"CHANGE_VERSION",//修改版本
	CHANGE_AUTHOR:"CHANGE_AUTHOR",//修改作者(一般不用改)
	CHANGE_ISFIRSTSTART:"CHANGE_ISFIRSTSTART",//修改是否第一次运行app
	CHANGE_YOUMENGID:"CHANGE_YOUMENGID",//友盟id
}

// Home页面配置设置
export const HOME = {
	CHANGE_LINK:"CHANGE_LINK",//更改链接
	CHANGE_SLIDER:"CHANGE_SLIDER",
	CHANGE_MENU:"CHANGE_MENU",
	CHANGE_ACTIVEITY:"CHANGE_ACTIVEITY",
	CHANGE_KILL:"CHANGE_KILL",
	CHANGE_SLIDER2:"CHANGE_SLIDER2",
	CHANGE_LIST:"CHANGE_LIST"
}

// Seller页面配置设置
export const SELLER = {

}