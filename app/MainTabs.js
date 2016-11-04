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
import {Routes,jumpUseName} from "./components/RouteStack";//路由栈

import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./Home";
import Seller from "./Seller";
import Users from "./Users";

class MainTabs extends Component{
	propTypes:{
		onselect:React.PropTypes.number,
		RootNavigator:React.PropTypes.object.isRequired
	}
	state = {
		onselect:0
	};

	onPress(index){
		const { RootNavigator,isLogin } = this.props;
		
	}
	renderPage(){
		return (
			<View style={styles.root}>
				<Home style={{zIndex:10,width:Width}} />
				<Seller style={{zIndex:9,width:Width}} />
				<Users style={{zIndex:8,width:Width}}/>
			</View>
		)
	}
	render(){
		return(
			<View style={styles.allroot}>
				{this.renderPage()}
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
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	root:{
		flexDirection:"row"
	},
	allroot:{
		flexDirection:"column",
		position:"relative"
	},
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

export default connect(select)(MainTabs);