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
import Reactotron from 'reactotron-react-native';

const ReadArticle = React.createClass({
	propTypes:{
		title:PropTypes.string.isRequired,
		url:PropTypes.string,
		avatar:PropTypes.string,
		abstract:PropTypes.string,
		source:PropTypes.string.isRequired,
		content:PropTypes.string,
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
		console.log(this.props.source)
		return(
			<View style={styles.root}>
				<WebView onLoad={()=>{}} source={{html:this.props.source}} />
			</View>
		)
	},
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