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
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductOneEvaluation = React.createClass({
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
				<View style={styles.title}>
					<Text style={styles.titletext}>商品评价</Text>
					<TouchableOpacity
						activeOpacity={0.9}
						style={styles.allevaluation}>
						<Text style={styles.allevaluationtext}>2条评价</Text>
						<Icon name="angle-right" size={16} color="#999"></Icon>
					</TouchableOpacity>
				</View>
				<View style={styles.evaluationinfo}>
					<View style={styles.body}>
						<Text numberOfLines={2} style={styles.infotext}>好吃又实惠,赶上活动,节省了不少钱</Text>
						<Text style={styles.infodate}>今天</Text>
						<View style={styles.people}>
							<Text style={styles.name}>T***0</Text>
							<Image style={styles.profile} source={require("../../assest/profile.jpg")}></Image>
						</View>
					</View>
					<View style={styles.body}>
						<Text numberOfLines={2} style={styles.infotext}>好吃又实惠,赶上活动,节省了不少钱</Text>
						<Text style={styles.infodate}>今天</Text>
						<View style={styles.people}>
							<Text style={styles.name}>T***0</Text>
							<Image style={styles.profile} source={require("../../assest/profile.jpg")}></Image>
						</View>
					</View>
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
		marginBottom:20
	},
	title:{
		height:40,
		borderBottomWidth:1,
		borderBottomColor:"#999",
		marginRight:-10,
		marginLeft:-10,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"flex-start"
	},
	titletext:{
		fontSize:18,
		color:"rgb(100,100,100)",
		marginLeft:10
	},
	allevaluation:{
		flexDirection:"row",
		alignItems:"center",
		position:"absolute",
		right:15,
		top:15
	},
	allevaluationtext:{
		fontSize:14,
		color:"#999",
		marginRight:5
	},
	evaluationinfo:{
		paddingTop:10,
		flexDirection:"column"
	},
	body:{
		flexDirection:"column",
		marginBottom:10,
		backgroundColor:"#fff",
		justifyContent:"center",
		borderBottomColor:"#d5d5d5",
		borderBottomWidth:1,
		paddingBottom:5
	},
	infotext:{
		color:"rgb(100,100,100)",
		fontSize:14,
		lineHeight:14,
		marginBottom:5
	},
	infodate:{
		color:"#999"
	},
	people:{
		position:"absolute",
		right:5,
		top:0,
		flexDirection:'row',
		alignItems:"center"
	},
	name:{
		color:"#999"
	},
	profile:{
		width:26,
		height:26,
		borderRadius:13
	}
});

export default ProductOneEvaluation;