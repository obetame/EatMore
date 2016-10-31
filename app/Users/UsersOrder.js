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
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {Routes,jumpUseName} from "../components/RouteStack";//路由栈
import Icon from 'react-native-vector-icons/FontAwesome';

const UsersOrder = React.createClass({
	propTypes:{
		username:PropTypes.string
	},
	getDefaultProps(){
		return {
			isLogin:false
		}
	},
	getInitialState(){
		return {
			
		}
	},
	render(){
		return(
			<View style={styles.root}>
				<View style={styles.top}>
					<Text style={styles.topleft}>我的订单</Text>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.topright}
						onPress={()=>{this._onPress(5)}} 
						>
						<Text style={{color:"#999"}}>查看全部订单</Text>
						<Icon name="angle-right" size={16} color="#999"></Icon>
					</TouchableOpacity>
				</View>
				<View style={styles.info}>
					<TouchableOpacity onPress={()=>{this._onPress(0)}} activeOpacity={0.8} style={styles.infoitem}>
						<Image style={styles.infoimg} source={require("../assest/icon_1_self.png")}></Image>
						<Text style={styles.infotext}>待付款</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this._onPress(1)}} activeOpacity={0.8} style={styles.infoitem}>
						<Image style={styles.infoimg} source={require("../assest/icon_2_self.png")}></Image>
						<Text style={styles.infotext}>待发货</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this._onPress(2)}} activeOpacity={0.8} style={styles.infoitem}>
						<Image style={styles.infoimg} source={require("../assest/icon_3_self.png")}></Image>
						<Text style={styles.infotext}>待收货</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this._onPress(3)}} activeOpacity={0.8} style={styles.infoitem}>
						<Image style={styles.infoimg} source={require("../assest/icon_4_self.png")}></Image>
						<Text style={styles.infotext}>待评价</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this._onPress(4)}} activeOpacity={0.8} style={styles.infoitem}>
						<Image style={styles.infoimg} source={require("../assest/icon_5_self.png")}></Image>
						<Text style={styles.infotext}>售后/退款</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	},
	_onPress(index){
		const {RootNavigator,isLogin} = this.props;
		if(!isLogin){
			Alert.alert("未登录","登录后才能查看,是否现在登录?",
				[
					{text: '取消', onPress: () => {}},
					{text: '确认', onPress: () => {
						// 去登陆页
						jumpUseName(RootNavigator,"Log");
					}}
				]
			);
			return;
		}
		switch(index){
			case 0:
				Alert.alert("你查看的是待付款页面!");
				break;
			case 1:
				Alert.alert("你查看的是待发货页面!");
				break;
			case 2:
				Alert.alert("你查看的是待收货页面!");
				break;
			case 3:
				Alert.alert("你查看的是待评价页面!");
				break;
			case 4:
				Alert.alert("你查看的是售后退款页面!");
				break;
			case 5:
				Alert.alert("你查看的是全部订单页面!");
				break;
		}
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column",
		backgroundColor:"#fff"
	},
	top:{
		flexDirection:"row",
		width:Width,
		height:40,
		position:"relative",
		borderWidth:1,
		borderColor:"#d5d5d5"
	},
	topleft:{
		position:"absolute",
		top:10,
		left:10,
		height:20,
		fontSize:20,
		color:"rgb(89,89,89)",
		alignItems:"center"
	},
	topright:{
		position:"absolute",
		top:10,
		right:10,
		height:20,
		flexDirection:"row",
		alignItems:"center"
	},
	info:{
		flexDirection:"row",
		height:100,
		alignItems:"center"
	},
	infoitem:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	infoimg:{
		width:35,
		height:35,
		resizeMode:"contain"
	},
	infotext:{
		color:"rgb(89,89,89)",
		marginTop:5
	}
});

export default UsersOrder;