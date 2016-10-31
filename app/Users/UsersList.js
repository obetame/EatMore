import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {Routes,jumpUseName} from "../components/RouteStack";//路由栈
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from 'react-native-elements';
const list = [
	{
		name: 'Amy Farha',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: 'Chris Jackson',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	}
];
const UsersList = React.createClass({
	propTypes:{
		username:PropTypes.string,
		userlist:PropTypes.array
	},
	getDefaultProps(){
		return {
			isLogin:false,
			userlist:[
				{
					name:"我的钱包",
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
				},
				{
					name:"会员卡",
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
				},
				{
					name:"积分商城",
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
					subtitle:"0元好物随时抢"
				},
				{
					name:"我的收藏",
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
				},
				{
					name:"抵用券",
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
				},
				{
					name:"服务中心",
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
				}
			]
		}
	},
	getInitialState(){
		return {
			
		}
	},
	render(){
		return (
			<List containerStyle={{marginBottom: 10,marginTop:10}}>
				{
					this.props.userlist.map((item, i) => (
						<ListItem
							roundAvatar
							avatar={{uri:item.avatar_url}}
							key={i}
							subtitle={item.subtitle}
							title={item.name}
							onPress={()=>{this._onPress(i)}}
						/>
					))
				}
			</List>
		)
	},
	_onPress(index){
		Alert.alert("点击","点击了"+index);
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column"
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
		height:30,
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
	}
});

export default UsersList;