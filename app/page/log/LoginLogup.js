import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let Dimensions = require("Dimensions");
const Width = Dimensions.get("window").width;//设备的宽度
const Hight = Dimensions.get("window").height;
const Scale = PixelRatio.get();//设备的像素密度

class LoginLogup extends Component{
	constructor(props){
		super(props);
		this.state = {
			selected:this.props.selected,//如果有指定的就使用指定的
		};
	}
	onPress(name){
		if(this.props.onPress){
			this.props.onPress(name);
		}
		else{
			this.setState({selected:name});
		}
	}
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.logs}>
					<TouchableOpacity 
						onPress={(el)=>{
							this.setState({selected:"login"});
							this.props.onPress("login");
						}}
						activeOpacity={0.8} 
						style={[styles.log,styles.login]}>
						<Text style={this.state.selected==="login"?styles.logTextActive:styles.text}>登录</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={(el)=>{
							this.setState({selected:"logup"});
							this.props.onPress("logup");
						}}
						activeOpacity={0.8} 
						style={styles.log}>
						<Text style={this.state.selected==="logup"?styles.logTextActive:styles.text}>注册</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.hrtext}>
					<Text style={[styles.hr,this.state.selected==="login"?styles.hrActive:""]}></Text>
					<Text style={[styles.hr,this.state.selected==="logup"?styles.hrActive:""]}></Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',//左右的中间
		flexDirection:"column",
		justifyContent: 'center',//上下的中间
		backgroundColor:"#fff",
		width:Width
	},
	logs:{
		flex:1,
		flexDirection:"row",
		top:5
	},
	log:{
		flex:1,
		alignItems: 'center',//左右的中间
		justifyContent:"center"
	},
	login:{
		borderRightWidth:1,
		borderRightColor:"#999"
	},
	logTextActive:{
		fontSize:20,
		color:"#ed4746",
	},
	text:{
		fontSize:20,
		color:"#999"
	},
	hrtext:{
		flex:1,
		flexDirection:"row",
		top:15,
	},
	hr:{
		flex:1,
		height:2,
		backgroundColor:"#dbd6d6",
		justifyContent:"center"
	},
	hrActive:{
		backgroundColor:"#ed4746",
	}
});

export default LoginLogup;