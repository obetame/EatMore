import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

class HomeSlider2 extends Component{
	state = {
		
	};
	render(){
		return(
			<Swiper style={styles.container} height={150} autoplay={false}>
				<View style={styles.slider}>
					<Image style={styles.img} source={require("../assest/1_lunbo.png")} />
				</View>
				<View style={styles.slider}>
					<Image style={styles.img} source={require("../assest/1_lunbo.png")} />
				</View>
				<View style={styles.slider}>
					<Image style={styles.img} source={require("../assest/1_lunbo.png")} />
				</View>
			</Swiper>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height:150
	},
	slider:{
		justifyContent:"center",
		alignItems:"center",
		height:140,
		width:Width-20,
		marginLeft:10,
		marginRight:10,
		marginTop:5,
		marginBottom:5
	},
	img:{
  	width:Width-20,
  	height:140,
  	resizeMode:"stretch"
  }
});

export default HomeSlider2;