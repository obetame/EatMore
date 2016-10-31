import React, {Component,PropTypes} from 'react';
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
	Platform
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {Routes,jumpUseName} from "../components/RouteStack";//路由栈
import Icon from 'react-native-vector-icons/FontAwesome';

const UsersHeader = React.createClass({
	propTypes:{
		username:PropTypes.string
	},
	getDefaultProps(){
		return {
			username:"未登录",
			isLogin:false,
			bgColor:"rgb(251,56,8)"
		}
	},
	getInitialState(){
		return {
			username:this.props.username,
			searchIconSize:this.props.searchIconSize
		}
	},
	render(){
		return(
			<View style={styles.root}>
				<View style={styles.top}>
					<TouchableOpacity 
						activeOpacity={0.8}
						style={styles.topleft}>
						<Icon name="commenting" size={26} color="#fff" />
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.8}
						style={styles.topright}>
						<Icon name="cog" size={26} color="#fff" />
					</TouchableOpacity>
				</View>
				<View style={styles.user}>
					<Image style={styles.profile} source={require("../assest/profile.jpg")}></Image>
					{this._isLogin()}
				</View>
			</View>
		)
	},
	_isLogin(){
		const {isLogin,username,RootNavigator} = this.props;
		if(isLogin){
			return (
				<Text style={styles.username}>{username}</Text>
			)
		}
		else{
			return (
				<TouchableOpacity 
					style={styles.gologin}
					onPress={()=>{
						jumpUseName(RootNavigator,"Log");
					}}
					activeOpacity={0.9}>
					<Icon name="sign-in" size={16} color="#fff" />
					<Text style={styles.gologintext}>去登陆</Text>
				</TouchableOpacity>
			)
		}
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column",
		backgroundColor:"rgb(251,56,8)",
		...Platform.select({
			ios:{
				height:150,
				paddingTop:10
			},
			android:{
				height:155,
				paddingTop:20
			}
		})
	},
	top:{
		flexDirection:"row",
		width:Width,
		height:40,
		position:"relative"
	},
	topleft:{
		position:"absolute",
		top:10,
		left:10,
		width:30,
		height:30
	},
	topright:{
		position:"absolute",
		top:10,
		right:10,
		width:30,
		height:30
	},
	user:{
		height:80,
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"center"
	},
	profile:{
		width:60,
		height:60,
		borderRadius:30
	},
	username:{
		color:"#fff",
		marginTop:10,
		fontSize:18
	},
	gologin:{
		backgroundColor:"rgb(123,184,65)",
		height:30,
		width:100,
		justifyContent:"center",
		alignItems:"center",
		borderRadius:10,
		flexDirection:"row",
		marginTop:10
	},
	gologintext:{
		color:"#fff",
		marginLeft:5
	}
});

export default UsersHeader;