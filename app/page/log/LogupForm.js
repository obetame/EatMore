import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let Dimensions = require("Dimensions");
const Width = Dimensions.get("window").width;//设备的宽度
const Hight = Dimensions.get("window").height;
const Scale = PixelRatio.get();//设备的像素密度

class LogupForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			phone:"",
			password:"",
			countdown:"",
			code:"",
			getCode:"获取验证码",
			codeNumber:59,
			getCodeColor:"#ed4746"
		};
	}
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.form}>
					<Icon style={styles.left} name="mobile-phone" size={25} color="#999" />
					<TextInput 
						keyboardType="numeric" 
						maxLength={11} 
						underlineColorAndroid="transparent"
						onChangeText={(value)=>{
							this.setState({phone:value}
						)}} 
						value={this.state.phone} 
						placeholder="请输入手机号" 
						style={styles.input} />
				</View>
				<View style={styles.form}>
					<Icon style={styles.left} name="lock" size={20} color="#999" />
					<TextInput 
						secureTextEntry={true}
						value={this.state.password} 
						placeholder="请设置密码" 
						underlineColorAndroid="transparent"
						onChangeText={(value)=>{
							this.setState({password:value}
						)}} 
						style={styles.input} />
				</View>
				<View style={styles.form}>
					<Icon style={styles.left} name="code" size={16} color="#999" />
					<TextInput 
						value={this.state.code} 
						placeholder="请输入验证码" 
						underlineColorAndroid="transparent"
						onChangeText={(value)=>{
							this.setState({password:value}
						)}} 
						style={styles.code} />
					<TouchableOpacity 
						onPress={(el)=>{
							// console.warn("number:"+this.state.codeNumber)
							// 检查是否已经在倒计时
							if(this.state.codeNumber<59)return;
							// 开始倒计时
							this.state.countdown = setInterval(()=>{
								this.setState({getCode:"重新获取("+this.state.codeNumber+")"});
								
								if(this.state.codeNumber===0){
									// 关闭倒计时
									this.setState({getCode:"获取验证码"});
									this.state.codeNumber = 60;
									clearInterval(this.state.countdown);
								}
								this.state.codeNumber--;
							},1000)
						}}
						activeOpacity={0.8} 
						style={styles.checkcode}>
						<Text style={styles.codetext}>{this.state.getCode}</Text>
					</TouchableOpacity>
				</View>
				<Button fontSize={18} buttonStyle={styles.btn} raised title="立即注册" />
				<View style={styles.other}>
					<Text style={styles.big}>点击立即注册即代表同意</Text>
					<Text style={styles.red}>《用户协议》</Text>
				</View>
			</View>
		);
	}
	componentWillUnmount(){
		clearInterval(this.state.countdown);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',//左右的中间
		flexDirection:"column",
		justifyContent: 'center',//上下的中间
		width:Width,
		marginTop:10
	},
	form:{
		marginLeft:10,
		marginRight:10,
		width:Width-20,
		borderWidth:1,
		borderColor:"#999",
		borderRadius:10,
		marginBottom:20,
	},
	code:{
		height:50,
		fontSize:18,
		borderWidth:0,
		borderColor:"#c9c9c9",
		borderRadius:10,
		marginLeft:20,
		marginRight:150,
	},
	input:{
		height:50,
		fontSize:18,
		borderWidth:0,
		borderColor:"#c9c9c9",
		borderRadius:10,
		marginLeft:20
	},
	left:{
		position:"absolute",
		top:15,
		left:5,
	},
	btn:{
		backgroundColor:"#b5b5b5",
		width:Width-20,
		marginLeft:10,
		marginRight:10,
		borderRadius:10,
		height:50,
		marginTop:20
	},
	checkcode:{
		backgroundColor:"#fff",
		width:150,
		borderRadius:10,
		height:50,
		borderWidth:1,
		borderColor:"#ed4746",
		position:"absolute",
		top:0,
		right:0,
		justifyContent:"center",
		alignItems:"center"
	},
	codetext:{
		color:"#ed4746",
		fontSize:18,

	},
	other:{
		width:Width,
		marginLeft:20,
		marginTop:20,
		flexDirection:"row",
		alignItems:"flex-start"
	},
	big:{
		fontSize:14,
	},
	red:{
		color:"#ed4746",
		fontSize:14,
	}
});

export default LogupForm;