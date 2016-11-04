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
	StatusBar,
	Image,
	Animated
} from 'react-native';
import { connect } from 'react-redux';
const InteractionManager = require('InteractionManager');

import {Routes} from "./components/RouteStack";//路由栈
import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import Update,{PromiseRefreshing} from "./Update";

class Root extends Component {
	state = {
		ready:true,
		fadeAnim:new Animated.Value(0.2)
	}
	render() {
		if(this.state.ready){
			return (
				<Animated.Image 
					style={{
						width:Width,height:Height,resizeMode:'stretch',
						opacity: this.state.fadeAnim
					}} 
					source={require("./assest/start1.jpg")} 
					/>
			)
		}
		return (
			<Navigator 
				initialRoute={Routes.Home}
				// initialRouteStack={RouteStack}
				configureScene={(route)=>{
					return route.animationType || Navigator.SceneConfigs.FadeAndroid;
				}}
				renderScene={(route,navigator)=>{
					let Component = route.component;
					return <Component {...route.params} RootNavigator={navigator} />
				}}/>
		);
	}
	componentWillMount(){
		Animated.timing(          // Uses easing functions
			 this.state.fadeAnim,    // The value to drive
			 {toValue: 1},           // Configuration
		 ).start();                // Don't forget start!
		
		InteractionManager.runAfterInteractions(()=>{
			PromiseRefreshing(this.props).then(()=>{
				this.setState({
					ready:false
				})
			});
		})
		
	}
}

function select(store){
	return {
		isLogin:store.userStore.isLogin,
		status:store.userStore.status,
		user:store.userStore.user,
		HomeList:store.homeStore.HomeList,
		Link:store.homeStore.Link
	}
}

export default connect(select)(Root);