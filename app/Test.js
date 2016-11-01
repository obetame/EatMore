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
	Animated
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class Test extends Component{
	state = {
		Atop:new Animated.Value(0),
		Abottom:new Animated.Value(0),
		rotation:new Animated.Value(0),
		rotation0:new Animated.Value(0),
		rotation1:new Animated.Value(0),
		rotation2:new Animated.Value(0),
		rotation3:new Animated.Value(0),
		Scale:new Animated.Value(0),
		Lines1Top:new Animated.Value(0),
		Lines1Bottom:new Animated.Value(0),
		Lines2Top:new Animated.Value(0),
		Lines2Bottom:new Animated.Value(0),
		top:-140
	}
	render(){
		let body = {top:this.state.top};
		return(
			<View style={styles.container}>
				<Animated.View style={[
					styles.body,{
					transform: [{
					 translateY: this.state.Atop.interpolate({
						 inputRange: [0, 1],
						 outputRange: [0, 140]
					 })
				 },{
					 translateY: this.state.Abottom.interpolate({
						 inputRange: [0, 1],
						 outputRange: [0, -140]
					 })
				 },
				 {
				 	scale:this.state.Scale
				 }
				 ]
				}]}>
					<Animated.View style={[styles.lines,{
						transform:[{
							translateY: this.state.Lines1Top.interpolate({
								inputRange: [0, 1],
								outputRange: [0, 140]
							})
						},
						{
							translateY: this.state.Lines1Bottom.interpolate({
								inputRange: [0, 1],
								outputRange: [0, -140]
							})
						 }
						]
					}]}>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation0.interpolate({
									inputRange: [0,1],
									outputRange: ['0deg', '360deg']
								})
						}]
						}]} source={require("./assest/1_icon_kinds.png")}></Animated.Image>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation1.interpolate({
									inputRange: [0,1],
									outputRange: ['0deg', '360deg']
								})
						}]
						}]} source={require("./assest/2_icon_kinds.png")}></Animated.Image>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation2.interpolate({
									inputRange: [0,1],
									outputRange: ['0deg', '360deg']
								})
						}]
						}]} source={require("./assest/1_icon_kinds.png")}></Animated.Image>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation3.interpolate({
									inputRange: [0,1],
									outputRange: ['0deg', '360deg']
								})
						}]
						}]} source={require("./assest/2_icon_kinds.png")}></Animated.Image>
					</Animated.View>
					<Animated.View style={[styles.lines,{
						transform:[{
							translateY: this.state.Lines2Top.interpolate({
								inputRange: [0, 1],
								outputRange: [0, 140]
							})
						},
						{
							translateY: this.state.Lines2Bottom.interpolate({
								inputRange: [0, 1],
								outputRange: [0, -140]
							})
						 }
						]
					}]}>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation.interpolate({
									inputRange: [0,0.6,1],
									outputRange: ['0deg',"60deg",'0deg']
								})
						}]
						}]} source={require("./assest/1_icon_kinds.png")}></Animated.Image>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation.interpolate({
									inputRange: [0,0.6,1],
									outputRange: ['0deg',"60deg", '0deg']
								})
						}]
						}]} source={require("./assest/2_icon_kinds.png")}></Animated.Image>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation.interpolate({
									inputRange: [0,0.6,1],
									outputRange: ['0deg',"60deg", '0deg']
								})
						}]
						}]} source={require("./assest/1_icon_kinds.png")}></Animated.Image>
						<Animated.Image style={[styles.img,{
							transform: [{
								rotateZ: this.state.rotation.interpolate({
									inputRange: [0,0.6,1],
									outputRange: ['0deg',"60deg", '0deg']
								})
						}]
						}]} source={require("./assest/2_icon_kinds.png")}></Animated.Image>
					</Animated.View>
				</Animated.View>
				<View style={styles.btns}>
					<TouchableOpacity
						activeOpacity={0.9}
						style={styles.btn}
						onPress={()=>{this._Start()}}>
						<Text style={styles.text}>开始执行</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.9}
						style={styles.btn}
						onPress={()=>{this._End()}}>
						<Text style={styles.text}>退出执行</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	_Start(){
		this.state.Atop.setValue(0);
		Animated.parallel([
			Animated.spring(
				this.state.Atop,
				{toValue: 1,duration: 1000,friction:6,tension:60},
			),
			Animated.spring(this.state.Scale,{
				toValue:1,
				duration:1000
			}),
			Animated.timing(this.state.rotation0,{
				toValue:1,duration:250,delay:0
			}),
			Animated.timing(this.state.rotation1,{
				toValue:1,duration:250,delay:50
			}),
			Animated.timing(this.state.rotation2,{
				toValue:1,duration:250,delay:100
			}),
			Animated.timing(this.state.rotation3,{
				toValue:1,duration:250,delay:150
			}),
		]).start(()=>{
			this.state.rotation0.setValue(0);
			this.state.rotation1.setValue(0);
			this.state.rotation2.setValue(0);
			this.state.rotation3.setValue(0);
		})
		
		this.state.Abottom.setValue(0);
		// this.state.Lines1Top.setValue(0);
		// this.state.Lines2Top.setValue(0);
		// Animated.sequence([
		// 	Animated.spring(this.state.Lines2Top,{
		// 		toValue: 1,duration: 100,friction:6,tension:60
		// 	}),
		// 	Animated.spring(this.state.Lines1Top,{
		// 		toValue: 1,duration: 100,friction:6,tension:60
		// 	})
		// ]).start()
	}
	_End(){
		this.state.Abottom.setValue(0);
		Animated.parallel([
			Animated.spring(
				this.state.Abottom,
				{toValue: 1,duration: 1000,friction:6},
			),
			Animated.spring(this.state.Scale,{
				toValue:0,
				duration:1000
			})
		]).start(()=>{
			this.state.rotation.setValue(0);
		});
		// this.state.Lines1Bottom.setValue(0);
		// this.state.Lines2Bottom.setValue(0);
		// Animated.sequence([
		// 	Animated.spring(this.state.Lines1Bottom,{
		// 		toValue: 1,duration: 500,friction:6,tension:60
		// 	}),
		// 	Animated.spring(this.state.Lines2Bottom,{
		// 		toValue: 1,duration: 500,friction:6,tension:60
		// 	})
		// ]).start()
	}
	// shouldComponentUpdate(){
	// 	console.log(this.props.updateAlpha);
	// 	return true;
	// }
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center"
	},
	body:{
		flexDirection:"column",
		alignItems:"center",
		position:"absolute",
		height:140,
		top:-140
	},
	lines:{
		flexDirection:"row",
		width:Width,
		justifyContent:"space-around",
		height:80
	},
	img:{
		width:50,
		height:50
	},
	btns:{
		position:"absolute",
		top:400
	},
	btn:{
		height:40,
		backgroundColor:"#999"
	},
	text:{
		color:"#fff"
	}
});

export default Test;