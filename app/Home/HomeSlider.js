import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

class HomeSlider extends Component{
	state = {
		
	};
	render(){
		return(
			<Swiper style={styles.container} height={170} autoplay={true}>
				<View style={styles.slider}>
					<Image style={styles.img} source={require("../assest/banner1_sy.png")} />
				</View>
				<View style={styles.slider}>
					<Image style={styles.img} source={require("../assest/banner1_sy.png")} />
				</View>
				<View style={styles.slider}>
					<Image style={styles.img} source={require("../assest/banner1_sy.png")} />
				</View>
			</Swiper>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flexDirection:"row"
	},
	slider:{
		justifyContent:"center",
		alignItems:"center",
		height:170
	},
	img:{
  	width:Width,
  	height:170,
  	resizeMode:"stretch"
  }
});

export default HomeSlider;