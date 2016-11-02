import React, { Component,PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	Platform
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

class Header extends Component{
	static get defaultProps(){
		return {
			title:"产品页面",
			bgColor:"rgb(251,56,8)",
			titleColor:"#fff"
		}
	}
	propTypes:{
		title:PropTypes.string.isRequired,
		bgColor:PropTypes.string
	}
	onPress(){
		const {RootNavigator} = this.props;
		RootNavigator.pop();
	}
	render() {
		const {title} = this.props;
		return (
			<View style={[styles.container,{backgroundColor:this.props.bgColor}]}>
				<TouchableOpacity onPress={()=>{this.onPress();}} activeOpacity={0.8} style={styles.icon}>
					<Icon style={styles.left} name="chevron-left" size={22} color="#fff" />
				</TouchableOpacity>
				<Text style={styles.text}>{title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',//上下的中间
		flexDirection:"row",
		justifyContent: 'center',//左右的中间
		...Platform.select({
			ios:{
				height:60,
				paddingTop:15
			},
			android:{
				height:50,
				marginTop:20
			}
		}),
		backgroundColor:"#ed4746",
		width:Width
	},
	icon:{
		position:"absolute",
		left:0,
		bottom:1,
		width:45,
		height:45
	},
	left:{
		position:"absolute",
		top:15,
		left:15
	},
	text:{
		fontSize:25,
		color:"#fff"
	}
});

export default Header;