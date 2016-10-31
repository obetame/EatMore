import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { LogIn, skipLogIn } from '../action/ActionUser';
import {Routes,jumpUseName} from "../components/RouteStack";//路由栈

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class Tabs extends Component{
	propTypes:{
		onselect:React.PropTypes.number,
		RootNavigator:React.PropTypes.object.isRequired
	}
	state = {
		onselect:this.props.onselect?this.props.onselect:0
	};

	onPress(index){
		const { RootNavigator,isLogin } = this.props;

		if(RootNavigator){
			switch(index){
				case 0:
					jumpUseName(RootNavigator,"Home");
					break;
				case 1:
					jumpUseName(RootNavigator,"Seller");
					break;
				case 2:
					jumpUseName(RootNavigator,"Users");
					break;
			}
			
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity onPress={()=>{
					this.onPress(0)
				}} style={styles.tab} activeOpacity={0.8}>
					<Icon name="home" size={26} color={this.state.onselect===0?"rgb(251,56,8)":"#999"} />
					<Text style={[styles.tabtext,{color:this.state.onselect===0?"rgb(251,56,8)":"#999"}]}>首页</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{
					this.onPress(1)
				}} style={styles.tab} activeOpacity={0.8}>
					<Icon name="rebel" size={26} color={this.state.onselect===1?"rgb(251,56,8)":"#999"} />
					<Text style={[styles.tabtext,{color:this.state.onselect===1?"rgb(251,56,8)":"#999"}]}>发现</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{
					this.onPress(2)
				}} style={styles.tab} activeOpacity={0.8}>
					<Icon name="user" size={26} color={this.state.onselect===2?"rgb(251,56,8)":"#999"} />
					<Text style={[styles.tabtext,{color:this.state.onselect===2?"rgb(251,56,8)":"#999"}]}>我的</Text>
				</TouchableOpacity>
				{/*<TouchableOpacity onPress={()=>{
									this.onPress(3)
								}} style={styles.tab} activeOpacity={0.8}>
									<Icon name="info-circle" size={26} color={this.state.onselect===3?"rgb(6,193,174)":"#999"} />
									<Text style={[styles.tabtext,{color:this.state.onselect===3?"rgb(6,193,174)":"#999"}]}>更多</Text>
								</TouchableOpacity>*/}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"row",
		backgroundColor: '#fff',
		height:50,
		alignItems:"center",
		position:"absolute",
		bottom:0,
		left:0,
		width:Width
	},
	tab:{
		flex:1,
		height:50,
		justifyContent:"center",
		alignItems:"center"
	},
	tabtext:{
		fontSize:12
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,
		status:store.userStore.status,
		user:store.userStore.user
	}
}

export default connect(select)(Tabs);