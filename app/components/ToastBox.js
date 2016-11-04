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
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class ToastBox extends Component{
	state = {
		TopX:new Animated.Value(0),
		TopY:new Animated.Value(0),
	}
	render(){
		return(
			<View style={styles.container}>
				<Animated.View style={[
					styles.body,{
					transform: [{
					 translateY: this.state.TopX.interpolate({
						 inputRange: [0, 1],
						 outputRange: [0, Width/2]
					 })
				 },{
					 translateY: this.state.TopY.interpolate({
						 inputRange: [0, 1],
						 outputRange: [0, -Width/2]
					 })
				 }
				 ]
				}]}>
					<View>
						<Text>我是飞翔的字体</Text>
					</View>
				</Animated.View>
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
		justifyContent:"center",
		backgroundColor:"rgba(255,255,255,0.6)"
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

export default ToastBox;