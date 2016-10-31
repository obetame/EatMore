// 路由栈
import {
	Navigator
} from 'react-native';

import Home from "../Home";//主页
import Seller from "../Seller";//发现页
import Users from "../Users";//个人中心页
import Log from "../page/Log";//登录页
import Products from "../page/Products";//产品页
import Test from "../Test";//测试页

let NavigatorSceneConfigs = require('NavigatorSceneConfigs');//转场动画

const switchMain = {
	...NavigatorSceneConfigs.FadeAndroid,
	defaultTransitionVelocity:0,
	springTension:1000
}

// 直接使用
export const Routes = {
	Home:{
		name:"Home",component:Home,index:0,animationType:switchMain,params:{}
	},
	Seller:{
		name:"Seller",component:Seller,index:1,animationType:switchMain,params:{}
	},
	Users:{
		name:"Users",component:Users,index:2,animationType:switchMain,params:{}
	},
	Log:{
		name:"Log",component:Log,index:3,animationType:NavigatorSceneConfigs.FloatFromRight,params:{}
	},
	Products:{
		name:"Products",component:Products,index:4,animationType:NavigatorSceneConfigs.FloatFromRight,params:{}
	},
	Test:{
		name:"Test",component:Test,index:4,animationType:NavigatorSceneConfigs.FloatFromRight,params:{}
	}
}

// 跳到指定的page
export const jumpUseName = (RootNavigator,Name,Params)=>{
	// console.log(RootNavigator.getCurrentRoutes())
	const allRoutes = RootNavigator.getCurrentRoutes();//获取所有的路由
	let n = 0;
	allRoutes.map((route)=>{
		if(route.name===Name){
			// 如果路由栈里已经有了这个
			// 就直接跳转到哪里
			n=1;
			RootNavigator.jumpTo(route);
		}
	});
	// 否则push
	if(n===0){
		Routes[Name].params = {
			...Routes[Name].params,
			...Params
		}//可以传参数
		// Object.assign({},Routes[Name].params,Params);
		RootNavigator.push(Routes[Name]);
	}
}

// 常看有多少路由
export const routesNumber = (RootNavigator) =>{
	return RootNavigator.getCurrentRoutes().length;
}
