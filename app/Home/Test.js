import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio
} from 'react-native';

import HomeMenu from "./HomeMenu";//菜单

// 记录屏幕信息
let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get("window").height;
let Scale = PixelRatio.get();//返回设备的像素密度

class Test extends Component{
	state = {
		title:"Test"
	};
	render(){
		let defaultName = "HomeMenu";
		let defaultComponent = HomeMenu;
		return(
			<Navigator 
				initialRoute={{name:defaultName,component:defaultComponent}}
				configureScene={(route)=>{
					return Navigator.SceneConfigs.VerticalDownSwipeJump;
				}}
				renderScene={(route,navigator)=>{
					let Component = route.component;
					return <Component {...route.params} navigator={navigator} />
				}}/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#F5FCFF',
	}
});

export default Test;