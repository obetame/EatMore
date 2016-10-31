import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	TouchableOpacity,
	Platform
} from 'react-native';
import {Width,Height,Scale} from "../../components/DeviceInfo";//获取设备信息
import Swiper from 'react-native-swiper';

const ProductOneImage = React.createClass({
	render(){
		const {title,sellNumber,price,buyNumber,tag,sellMoney,info,img} = this.props;
		return(
			<Swiper style={styles.container} height={170}>
				<View style={styles.slider}>
					<Image style={styles.img} source={{uri:img}} />
				</View>
				<View style={styles.slider}>
					<Image style={styles.img} source={{uri:img}} />
				</View>
				<View style={styles.slider}>
					<Image style={styles.img} source={{uri:img}} />
				</View>
			</Swiper>
		)
	}
})

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

export default ProductOneImage;