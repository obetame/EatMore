/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator,
	Text,
	View,
	Image
} from 'react-native';
import {Provider} from "react-redux";
import codePush from "react-native-code-push";
import configureStore from "./app/store/Store";

import {Width,Height,Scale} from "./app/components/DeviceInfo";//获取设备信息

import Root from "./app/Root";

class EatMore extends Component {
	state = {
		isLoading:true,
		store:configureStore(()=>{})
	}
	render() {
		if(this.state.isLoading){
			return (
				<View>
					<Image style={{width:Width,height:Height,resizeMode:'stretch'}} source={require("./app/assest/start.jpg")} />
				</View>
			)
		}
		return (
			<Provider store={this.state.store}>
				<Root />
			</Provider>
		);
	}
	componentWillMount(){
		let down = setTimeout(()=>{
			this.setState({isLoading:false});
		},2000);
	}
	componentDidMount(){
    codePush.sync({
    	updateDialog:{ 
    		title: "有一个可用升级!",
    		appendReleaseDescription: true
    	},
    	installMode: codePush.InstallMode.ON_NEXT_RESTART
  });
  }
}

AppRegistry.registerComponent('EatMore', () => EatMore);

// 热更新步骤
// 首先编译:react-native bundle --platform android --entry-file index.android.js --bundle-output ./bundles/index.android.bundle --assets-dest ./bundles/assets --dev false
// 再发布:code-push release EatMore ./bundles/index.android.bundle 0.0.1 --description "修复bug" --mandatory true