// 这是home最开头的文件，包含了定位和查找商家功能

import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Platform,
	LayoutAnimation
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈

import Icon from 'react-native-vector-icons/FontAwesome';

class HomeBar extends Component{
	propTypes:{
		updateAlpha:PropTypes.number
	}
	state = {
		isFirst:true,
		width:0.7*Width,
		bgColor:{backgroundColor:"rgba(251,56,8,0)"},
		bar3right:0.05*Width
	}
	render(){
		LayoutAnimation.linear();
		let alpha = this.props.updateAlpha;
		if (alpha < 0) alpha = 0;
    if (alpha > 1) alpha = alpha.toFixed(2);
		let bgColor = null;
		this.state.bgColor = {backgroundColor:"rgba(251,56,8,"+alpha+")"};
		// if(alpha!==0 && alpha>0.1){
		// 	bgColor = {backgroundColor:"rgba(251,56,8,"+alpha+")"};
		// }
		// else{
		// 	bgColor = {backgroundColor:"rgba(0,0,0,0.4)"};//设置有默认的底色
		// }
		if(this.props.updateAlpha>1){
			this.state.width = 130;
			this.state.bar3right = 0.45*Width;
		}
		else{
			this.state.width = Width*0.75;
			this.state.bar3right = 0.05*Width;
		}
		const {RootNavigator} = this.props;
		return(
			<View style={[styles.container,this.state.bgColor]}>
				<TouchableOpacity
				 style={styles.bar1} 
				 activeOpacity={0.8}
				 onPress={(one)=>{
				 	jumpUseName(RootNavigator,"Test");
				 }}>
					<Icon name="th-large" size={20} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.bar2,{width:this.state.width}]} activeOpacity={0.8}>
					<View style={styles.bar2content}>
						<Icon name="search" size={18} color="#fff" />
						<Text style={styles.bar2text}>台北经典小吃</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity 
					style={[styles.bar3,{right:this.state.bar3right}]} 
					activeOpacity={0.8}
					onPress={(one)=>{
					 	jumpUseName(RootNavigator,"MainTabs");
					}}>
					<Icon name="envira" size={20} color="#fff" />
				</TouchableOpacity>
			</View>
		)
	}
	// shouldComponentUpdate(){
	// 	console.log(this.props.updateAlpha);
	// 	return true;
	// }
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"row",
		backgroundColor: 'rgba(0,0,0,0.2)',
		...Platform.select({
			ios:{
				height:55,
				paddingTop:10
			},
			android:{
				height:60,
				paddingTop:20
			}
		}),
		width:Width,
		alignItems:"center",
		position:"absolute",
		top:0,
		zIndex:10
	},
	bar1:{
		flexDirection:'column',
		justifyContent:"center",
		alignItems:"center",
		position:"absolute",
		left:0.05*Width,
		bottom:10
	},
	bar2:{
		flexDirection:'row',
		alignItems:"center",
		borderRadius:10,
		borderWidth:1,
		borderColor:"#fff",
		// borderBottomWidth:1,
		// borderBottomColor:"#fff",
		height:25,
		marginLeft:45,
		marginTop:5
	},
	bar3:{
		flexDirection:'column',
		justifyContent:"center",
		position:"absolute",
		right:0.05*Width,
		bottom:10
	},
	bar2content:{
		marginLeft:10,
		flexDirection:"row",
		alignItems:"center"
	},
	bar2text:{
		color:"#fff",
		fontSize:13,
		marginLeft:5
	},
	bartext:{
		color:"#fff",
		fontSize:16
	}
});

export default HomeBar;