import React, { Component,PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	Platform,
	Animated,
	Alert
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

class Load extends Component{
	static get defaultProps(){
		return {
			onLoadEnd:()=>{}
		}
	}
	constructor(props){
		super(props);
		this.state = {
			data:[],
			fadeIn: new Animated.Value(0),
			fadeOut: new Animated.Value(0),
			zIndex:10,
		}
	}
	render() {
		return (
			<Animated.View style={[styles.container,{zIndex:this.state.zIndex}]}>
				<View style={styles.center}>
					<Image style={styles.img} onPress={()=>{this._onPress()}} source={require("../assest/load1.gif")} />
					{/*<TouchableOpacity 
											style={styles.close}
											activeOpacity={0.9}
											onPress={()=>{this._onPress()}}>
											<Icon name="times" size={16} color="#fff"></Icon>
										</TouchableOpacity>*/}
				</View>
			</Animated.View>
		);
	}
	_onPress(){
	// 	const {navigator} = this.props;
	// 	navigator.pop();
	}
	CloseLoad(){
		this.setState({
			zIndex:-10
		});
		// this.state.fadeIn.setValue(0);
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',//上下的中间
		justifyContent: 'center',//左右的中间
		width:Width,
		height:Height,
		zIndex:10,
		backgroundColor:"#fff",
		// backgroundColor:"#3ca7f4",
		position:"absolute",
		top:0,
		left:0
	},
	center:{
		position:"relative"
	},
	img:{
		width:100,
		height:100,
		borderRadius:20,
		resizeMode:"cover"
	},
	close:{
		position:"absolute",
		top:10,
		right:10,
		backgroundColor:"#3ca7f4",
		borderRadius:12,
		width:24,
		height:24,
		borderWidth:1,
		borderColor:"#fff",
		justifyContent:"center",
		alignItems:"center"
	}
});

export default Load;