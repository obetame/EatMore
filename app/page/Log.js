import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	StatusBar,
	Alert
} from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Header from "../components/Header";
// import LoginLogup from "./log/LoginLogup";
import LoginForm from "./log/LoginForm";
import LogupForm from "./log/LogupForm";

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

class Log extends Component{
	constructor(props){
		super(props);
		this.state = {
			page:"login",//默认为登录页
		};
	}
	render() {
		const {RootNavigator} = this.props;
		return (
			<View style={styles.container}>
				<StatusBar translucent={true} backgroundColor="#ed4746" barStyle="light-content"/>
				<Header title="登录/注册" RootNavigator={RootNavigator} style={styles.logtab} />
				{
					// <LoginLogup 
					// onPress={(value)=>{
					// 	this.setState({page:value})
					// }} 
					// selected={this.state.page} 
					// navigator={navigator}/>
					// {
					// 	this.state.page==="login"?(
					// 		<LoginForm RootNavigator={RootNavigator}/>
					// 	):(
					// 		<LogupForm RootNavigator={RootNavigator}/>
					// 	)
					// }
				}
				<ScrollableTabView 
					style={styles.container}
					tabBarTextStyle={{color:"#000"}}
					tabBarBackgroundColor="#fff"
					tabBarUnderlineStyle={{backgroundColor:"rgb(251,56,8)"}}
					initialPage={0}>
					<LoginForm RootNavigator={RootNavigator} tabLabel="登录" />
					<LogupForm RootNavigator={RootNavigator} tabLabel="注册" />
				</ScrollableTabView>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,
		status:store.userStore.status,
		user:store.userStore.user
	}
}

export default connect(select)(Log);