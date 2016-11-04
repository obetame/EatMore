import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	ScrollView,
	PixelRatio,
	StatusBar,
	TouchableOpacity,
	Alert
} from 'react-native';

import { connect } from 'react-redux';
import { LogIn, skipLogIn,LogOut } from './action/ActionUser';

// 记录屏幕信息
import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from "./components/Tabs";
import UsersHeader from "./Users/UsersHeader";
import UsersOrder from "./Users/UsersOrder";
import UsersList from "./Users/UsersList";

class Users extends Component{
	state = {
		isLogin:this.props.isLogin
	};
	static get defaultProps(){
		return {
			style:{}
		}
	}
	render(){
		const {isLogin,RootNavigator,user} = this.props;
		
		return(
			<View style={[styles.root,this.props.style]}>
				<StatusBar backgroundColor="#999" style={{color:"#000"}} barStyle="light-content" />
				<UsersHeader isLogin={isLogin} RootNavigator={RootNavigator} username={user.phone} />
				<ScrollView style={styles.container}>
					<UsersOrder isLogin={isLogin} RootNavigator={RootNavigator} />
					<UsersList />
					{this._showLogout(isLogin)}
				</ScrollView>
				<Tabs onselect={2} RootNavigator={RootNavigator} />
			</View>
		)
	}
	componentWillMount(){
		// const {isLogin,dispatch,status,user,RootNavigator} = this.props;
		// if(!isLogin){
		// 	RootNavigator.jumpToName("Log");
		// }
	}
	_LogOut(){
		const {dispatch} = this.props;
		Alert.alert("退出登录","确认退出吗?",
			[
				{text: '取消', onPress: () => {}},
				{text: '确认', onPress: () => {
					// 退出登录
					dispatch(LogOut());
				}}
			]
		)
	}
	_showLogout(isLogin){
		if(isLogin){
			return (
				<TouchableOpacity 
					activeOpacity={0.8}
					style={styles.logout}
					onPress={()=>{this._LogOut()}}>
						<Text style={styles.logouttext}>退出登录</Text>
				</TouchableOpacity>		
			)
		}
		return null;
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1
	},
	container: {
		flex: 1,
		flexDirection:"column",
		marginBottom:50,
		backgroundColor:"rgb(230,230,230)"
	},
	logout:{
		width:Width-40,
		marginLeft:20,
		marginRight:20,
		backgroundColor:"rgb(240,1,7)",
		height:40,
		justifyContent:"center",
		alignItems:"center",
		marginBottom:20
	},
	logouttext:{
		color:"#fff",
		fontSize:18
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,
		status:store.userStore.status,
		user:store.userStore.user
	}
}

export default connect(select)(Users);