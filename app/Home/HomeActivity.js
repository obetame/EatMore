// home中的活动部分

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity
} from 'react-native';

import CountDown from "./CountDown";

const Url = "http://192.168.31.116:3000/activeity";
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈

class HomeActivity extends Component{
	static get defaultProps() {
		return {
			data:[
				{
					productname:"新品上架",
					productnumber:"100001",
					sellNumber:"2223",
					tag:["包邮","满100减10"],
					sellMoney:"19.9",
					info:"烧烤肉制品,肉脯.100g一袋装,休闲类零食,有微辣,中辣,超级辣三种可选"
				},
				{
					productname:"今日特惠",
					productnumber:"100002",
					sellNumber:"2223",
					tag:["包邮","满100减10"],
					sellMoney:"19.9",
					info:"烧烤肉制品,肉脯.100g一袋装,休闲类零食,有微辣,中辣,超级辣三种可选"
				},
				{
					productname:"吃货必备",
					productnumber:"100003",
					sellNumber:"2223",
					tag:["包邮","满100减10"],
					sellMoney:"19.9",
					info:"烧烤肉制品,肉脯.100g一袋装,休闲类零食,有微辣,中辣,超级辣三种可选"
				},
				{
					productname:"帮你挑",
					productnumber:"100004",
					sellNumber:"2223",
					tag:["包邮","满100减10"],
					sellMoney:"19.9",
					info:"烧烤肉制品,肉脯.100g一袋装,休闲类零食,有微辣,中辣,超级辣三种可选"
				}
			]
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.lines}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={()=>{this._onPress(0)}}>
						<Image style={styles.img} source={require("../assest/1_pic_4kinds.png")}/>
					</TouchableOpacity>
					<View style={{position:"relative"}}>
						<TouchableOpacity
							activeOpacity={0.9}
							onPress={()=>{this._onPress(1)}}>
							<Image style={styles.img} source={require("../assest/2_pic_4kinds.png")}/>
						</TouchableOpacity>
						<CountDown style={{top:10,right:10}} time={1000} />
					</View>
				</View>
				<View style={styles.lines}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={()=>{this._onPress(2)}}>
						<Image style={styles.img} source={require("../assest/3_pic_4kinds.png")}/>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={()=>{this._onPress(3)}}>
						<Image style={styles.img} source={require("../assest/4_pic_4kinds.png")}/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	_onPress(index){
		// 跳转到产品页,带参数
		const {data,RootNavigator} = this.props;
		jumpUseName(RootNavigator,"Products",data[index]);
	}
	getActivity(){
		fetch(Url)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				data:res.data,
				state:true
			})
		})
		.catch((error)=>{
			console.warn(error)
		})
	}

	componentDidMount(){
		// this.getActivity();
		// Reactotron.log(this.props.data)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#fff',
		height:200,
		marginTop:20,
		marginBottom:10
	},
	lines:{
		flexDirection:"row",
		flex:1,
		justifyContent:"center"
	},
	img:{
		width:Width/2,
		height:100,
		justifyContent:"center",
		alignItems:"center",
		resizeMode:"stretch"
	}
});

export default HomeActivity;