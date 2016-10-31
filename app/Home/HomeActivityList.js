import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Alert
} from 'react-native';

import Reactotron from 'reactotron-react-native';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

class HomeActivityList extends Component{
	state = {
		url:this.props.url,
		isOne:this.props.isOne,
		maintitle:this.props.maintitle
	};
	render(){
		let {url,isOne,maintitle} = this.props;
		let imglist = this.showImg(isOne,url,maintitle);
		return imglist;
	}
	_onPress(maintitle="活动"){
		Alert.alert("点击了",maintitle);
	}
	showImg(isOne,url,maintitle){
		if(isOne){
			return (
				<TouchableOpacity onPress={()=>{this._onPress(maintitle)}} activeOpacity={0.9}>
					<Image style={styles.img1} source={{uri:url}} />
				</TouchableOpacity>
			)
		}
		else{
			return (
				<TouchableOpacity style={styles.touchimg} activeOpacity={0.9}>
					<Image style={styles.img2} source={{uri:url}} />
				</TouchableOpacity>
			)
		}
	}

	componentDidMount(){
		// console.warn(this.props.url)
	}
}

const styles = StyleSheet.create({
	img1:{
		resizeMode:"stretch",
		width:Width,
		height:70
	},
	body2:{
		flexDirection:"column",
		width:Width,
		marginTop:0
	},
	list:{
		flexDirection:"row",
		flex:1
	},
	img2:{
		resizeMode:"stretch",
		width:Width/2,
		height:70
	}
});

export default HomeActivityList;