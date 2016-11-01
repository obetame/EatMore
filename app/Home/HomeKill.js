// home中的活动部分

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import CountDown from "./CountDown";

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";

class HomeKill extends Component{
	state = {
		data:""
	};
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.title}>
					<Image style={styles.titleimg} source={require("../assest/title_miaosha.png")}/>
					<Text>15点场</Text>
					<CountDown style={{top:5,marginLeft:10}} time={1000} />
				</View>
				<ScrollView showsHorizontalScrollIndicator={false} style={styles.lines} horizontal ={true}>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(1)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(2)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(3)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(4)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
				</ScrollView>
			</View>
		)
	}
	_onPress(id){
		const { RootNavigator } = this.props;
		jumpUseName(RootNavigator,"TimeKill",{
			id:id
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#fff',
		height:120,
		marginTop:10,
		marginBottom:10
	},
	title:{
		flexDirection:"row",
		height:30,
		alignItems:"center"
	},
	titleimg:{
		width:80,
		height:15,
		marginLeft:5,
		alignItems:"center",
		resizeMode:"stretch"
	},
	lines:{
		flexDirection:"row"
	},
	body:{
		width:100
	},
	img:{
		width:40,
		height:80,
		alignItems:"center",
		alignSelf:"center",
		resizeMode:"stretch"
	}
});

export default HomeKill;