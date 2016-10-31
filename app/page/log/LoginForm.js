import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	TextInput,
	ScrollView,
	Alert
} from 'react-native';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {LogIn} from "../../action/ActionUser";

let Dimensions = require("Dimensions");
const Width = Dimensions.get("window").width;//设备的宽度
const Hight = Dimensions.get("window").height;
const Scale = PixelRatio.get();//设备的像素密度

class LoginForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			phone:"",
			password:""
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
						placeholder="请输入密码" 
						underlineColorAndroid="transparent"
						onChangeText={(value)=>{
							this.setState({password:value}
						)}} 
						style={styles.input} />
				</View>
				<Button fontSize={20} onPress={()=>{this._onPress()}} buttonStyle={styles.btn} raised title="登录" />
				<View style={styles.other}>
					<Text style={styles.big}>忘记密码?</Text>
				</View>
				<View style={styles.otherlogin}>
					<View style={styles.lines}>
						<View style={styles.line}></View>
						<View style={styles.linecenter}>
							<Text style={styles.linetext}>其它账号登录</Text>
						</View>
						<View style={styles.line}></View>
					</View>
					<View style={styles.loginway}>
						<View style={styles.way}>
							<Icon style={[styles.icon,styles.qqway]} name="qq" size={40} color="#999" />
							<Text>QQ</Text>
						</View>
						<View style={styles.way}>
							<Icon style={[styles.icon,styles.wechatway]} name="wechat" size={40} color="#999" />
							<Text>微信</Text>
						</View>
						<View style={styles.way}>
							<Icon style={[styles.icon,styles.weiboway]} name="weibo" size={40} color="#999" />
							<Text>微博</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
	_onPress(){
		const {dispatch,RootNavigator} = this.props;

		if(this.state.phone==="123456" && this.state.password==="0000"){
			dispatch(LogIn());
			RootNavigator.pop();
		}
		else{
			Alert.alert("用户名或密码错误!","请重新登录");
		}
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
		marginBottom:20
	},
	input:{
		height:50,
		fontSize:18,
		borderWidth:0,
		borderColor:"#fff",
		borderRadius:10,
		marginLeft:20
	},
	left:{
		position:"absolute",
		top:15,
		left:5
	},
	btn:{
		backgroundColor:"#b5b5b5",
		width:Width-20,
		marginLeft:10,
		marginRight:10,
		borderRadius:10,
		height:60,
		marginTop:25
	},
	other:{
		width:Width,
		position:"relative",
		height:60,
	},
	big:{
		fontSize:18,
		position:"absolute",
		top:30,
		right:10,
	},
	otherlogin:{
		width:Width,
		flexDirection:"column",
		height:300
	},
	lines:{
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center",
		marginRight:20,
		marginLeft:20,
		marginBottom:20,
		marginTop:20
	},
	line:{
		flex:0.3,
		borderTopColor:"#999",
		borderTopWidth:1,
		justifyContent:"center",
		alignItems:"center",
	},
	linecenter:{
		flex:0.4,
		height:20,
		justifyContent:"center",
		alignItems:"center",
	},
	linetext:{
		fontSize:14
	},
	loginway:{
		width:Width,
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center"
	},
	way:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	qqway:{
		color:"#56abe4"
	},
	wechatway:{
		color:"#11cd6e"
	},
	weiboway:{
		color:"#ea8010"
	},
	icon:{
		justifyContent:"center",
		alignItems:"center"
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,
		status:store.userStore.status,
		user:store.userStore.user
	}
}

export default connect(select)(LoginForm);