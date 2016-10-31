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

const ProductOneAddress = React.createClass({
	propTypes:{
		
	},
	getDefaultProps(){
		return {
			
		}
	},
	getInitialState(){
		return {
			
		}
	},
	render(){
		return(
			<View style={styles.root}>
				<Text style={styles.titletext}>送至</Text>
				<Text numberOfLines={1} style={styles.infotext}>广东-广州-天河区</Text>
				<Text style={styles.dot}>...</Text>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#fff',
		flexDirection:"row",
		marginTop:10,
		height:40,
		paddingLeft:10,
		alignItems:"center"
	},
	titletext:{
		fontSize:14,
		width:Width*0.1,
		color:"#999"
	},
	infotext:{
		color:"rgb(100,100,100)",
		width:Width*0.8
	},
	dot:{
		width:Width*0.1
	}
});

export default ProductOneAddress;