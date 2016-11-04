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

const ProductOneInfo = React.createClass({
	render(){
		const {title,sellNumber,price,buyNumber,tag,sellMoney,info,img} = this.props;
		return(
			<View style={styles.root}>
				<View style={styles.title}>
					<Text style={styles.titletext}>商品简介</Text>
				</View>
				<View style={styles.info}>
					<Text numberOfLines={5} style={styles.infotext}>{info}</Text>
				</View>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#fff',
		flexDirection:"column",
		marginTop:10,
		paddingLeft:10,
		paddingRight:10,
	},
	title:{
		height:40,
		borderBottomWidth:1,
		borderBottomColor:"#999",
		justifyContent:"center",
		marginLeft:-10,
		marginRight:-10
	},
	titletext:{
		fontSize:18,
		color:"rgb(100,100,100)",
		marginLeft:10
	},
	info:{
		paddingTop:10,
		paddingBottom:10
	},
	infotext:{
		color:"rgb(100,100,100)",
		letterSpacing:1,
		lineHeight:22
	}
});

export default ProductOneInfo;