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
	Platform
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
		isFirst:true
	}
	render(){
		let alpha = this.props.updateAlpha;
		if (alpha < 0) alpha = 0;
    if (alpha > 1) alpha = alpha.toFixed(2);
		let bgColor = null;
		if(alpha!==0 && alpha>0.1){
			bgColor = {backgroundColor:"rgba(251,56,8,"+alpha+")"};
		}
		else{
			bgColor = {backgroundColor:"rgba(0,0,0,0.4)"};
		}
		const {RootNavigator} = this.props;
		return(
			<View style={[styles.container,bgColor]}>
				<TouchableOpacity
				 style={styles.bar1} 
				 activeOpacity={0.8}
				 onPress={(one)=>{
				 	jumpUseName(RootNavigator,"Test");
				 }}>
					<Icon name="th-large" size={20} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bar2} activeOpacity={0.8}>
					<View style={styles.bar2content}>
						<Icon name="search" size={18} color="#fff" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.bar3} activeOpacity={0.8}>
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
		justifyContent:"center",
		position:"absolute",
		top:0,
		zIndex:10
	},
	bar1:{
		flexDirection:'column',
		justifyContent:"center",
		width:0.1*Width,
		alignItems:"flex-start"
	},
	bar2:{
		flexDirection:'row',
		alignItems:"center",
		width:0.7*Width,
		borderRadius:10,
		borderBottomWidth:1,
		borderBottomColor:"#fff",
		height:30
	},
	bar3:{
		flexDirection:'column',
		justifyContent:"center",
		width:0.1*Width,
		alignItems:"flex-end"
	},
	bar2content:{
		marginLeft:10,
		flexDirection:"row"
	},
	bar2text:{
		color:"#999",
		fontSize:16,
		marginLeft:5
	},
	bartext:{
		color:"#fff",
		fontSize:16
	}
});

export default HomeBar;