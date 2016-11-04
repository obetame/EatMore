// home中的活动部分

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
	LayoutAnimation,
	PanResponder,
	Animated
} from 'react-native';

import CountDown from "./CountDown";
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";

class HomeKill extends Component{
	state = {
		width:0,//设置显示和隐藏
		continuePull:false,//继续下来,显示不同的文本
		NowGo:false,//是否开始跳转,
		bounceValue:new Animated.Value(0),
		isAnim:true,
		imgwidth:0,
	};
	render(){
		return(
			<View style={styles.container} >
				<View style={styles.title}>
					<Image style={styles.titleimg} source={require("../assest/title_miaosha.png")}/>
					<Text>15点场</Text>
					<CountDown style={{top:5,marginLeft:10}} time={1000} />
				</View>
				<ScrollView 
					showsHorizontalScrollIndicator={false} 
					style={styles.lines} 
					horizontal ={true}
					scrollEventThrottle={200}
					onScroll={(e)=>{this._handleScroll(e)}}>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(1)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(2)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(3)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity 
						activeOpacity={0.9} 
						onPress={()=>{this._onPress(4)}}
						style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={styles.body}>
						<Image style={styles.img} source={require("../assest/pic_miaosha.png")}/>
					</TouchableOpacity>
					
				</ScrollView>
				<View style={styles.containimg}>
					<Image style={[styles.continueimg,{width:this.state.imgwidth}]} source={require("../assest/plane.png")}></Image>
				</View>
				<Animated.View style={styles.continue}>
					<Text style={[styles.continuetext,{width:this.state.width}]}>{this.state.continuePull?"即将起飞":"起飞准备"}</Text>
				</Animated.View>
			</View>
		)
	}
	_handleScroll(e){
		const {RootNavigator} = this.props;
		// LayoutAnimation.easeInEaseOut();
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		let offsetX = e.nativeEvent.contentOffset.x;//左边距离开始的距离
		let ScrollWidth = e.nativeEvent.contentSize.width;//整个滚动的长度
		// 如果左边距离加屏幕宽度大于整个滚动条的长度
		this.state.imgwidth = offsetX+Width-ScrollWidth;

		if(offsetX+Width>ScrollWidth){
			if(offsetX+Width-ScrollWidth>70){
				// 如果拉的更多就可以释放更新,再记录下来
				if(this.state.NowGo&&this.state.continuePull&&this.state.width===20){
					this.setState({
						NowGo:false
					});
					jumpUseName(RootNavigator,"TimeKill",{id:1})
				}
				this.setState({
					continuePull:true,
					NowGo:true,
					width:20
				});
			}
			else{
				this.setState({
					width:20,
					continuePull:false,
				});
			}
			
		}
		else{
			this.setState({
				width:0,
				continuePull:false,
			});
		}
	}
	componentWillMount(){
		
	}
	_onPress(id){
		const { RootNavigator } = this.props;
		jumpUseName(RootNavigator,"TimeKill",{
			id:id
		});
	}
	_onRefresh(){
		// setTimeout(()=>{
		// 	this.setState({isRefreshing:false});
		// },2000)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#fff',
		height:120,
		marginTop:10,
		marginBottom:10,
		position:"relative"
	},
	title:{
		flexDirection:"row",
		height:30,
		alignItems:"center"
	},
	titleimg:{
		width:80,
		height:15,
		marginLeft:5,
		alignItems:"center",
		resizeMode:"stretch"
	},
	lines:{
		flexDirection:"row"
	},
	body:{
		width:100
	},
	img:{
		width:40,
		height:80,
		alignItems:"center",
		alignSelf:"center",
		resizeMode:"stretch"
	},
	continue:{
		alignItems:"center",
		position:"absolute",
		right:0,
		top:30,
		justifyContent:"center",
		flexDirection:"row",
		backgroundColor:"#999",
		width:20
	},
	containimg:{
		width:20,
		position:"absolute",
		top:30,
		right:0
	},
	continueimg:{
		width:42,
		height:50,
		resizeMode:"contain",
		position:"absolute",
		top:10,
		right:20
	},
	continuetext:{
		width:0,
		color:"#000",
		// opacity:0,
		backgroundColor:"transparent",
		position:"absolute",
		right:0
	}
});

export default HomeKill;