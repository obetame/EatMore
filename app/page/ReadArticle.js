import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	WebView,
	ListView,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈
import Load from "../components/Load";//加载动画显示

const ReadArticle = React.createClass({
	propTypes:{
		articles:PropTypes.array.isRequired,
	},
	getDefaultProps(){
		return {
			articles:[]
		}
	},
	getInitialState(){
		return {
			isLoad:true
		}
	},
	render(){
		const {RootNavigator} = this.props;
		return(
			<View style={styles.root}>
				<Load ref="Load" navigator={RootNavigator} />
				<WebView onLoad={()=>{this._onLoad()}} source={{uri:"http://1yhp.net/webapp"}} />
			</View>
		)
	},
	_onLoad(){
		this.refs.Load.CloseLoad();
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column",
		backgroundColor:"#fff",
		flex:1,
		marginTop:20
	}
});

export default ReadArticle;