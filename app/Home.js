import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	StatusBar,
	PixelRatio,
	BackAndroid,
	ToastAndroid,
	Navigator,
	Alert,
	Image,
	RefreshControl,
	Platform
} from 'react-native';

import Reactotron from 'reactotron-react-native';

import HomeSlider from "./Home/HomeSlider";//轮播图
import HomeSlider2 from "./Home/HomeSlider2"//第二个轮播图
import HomeBar from "./Home/HomeBar";//标头
import HomeList from "./Home/HomeList";//列表
import Tabs from "./components/Tabs";//底部
import HomeMenu from "./Home/HomeMenu"//菜单
import HomeActiveity from "./Home/HomeActivity";//活动
import HomeKill from "./Home/HomeKill";//秒杀
import Load from "./components/Load";

import { connect } from 'react-redux';
import { LogIn, skipLogIn } from './action/ActionUser';

import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import {Refreshing,PromiseRefreshing} from "./Update";
import {routesNumber} from "./components/RouteStack";//路由信息

class Home extends Component{
	static get defaultProps(){
		return {
			style:{}
		}
	}
	state = {
		exitStartTime:null,
		isRefreshing : false,
		updateAlpha:0
	};
	render(){
		const { RootNavigator } = this.props;
		return(
			<View key={"Home"} style={[styles.root,this.props.style]}>
				<StatusBar translucent={true} barStyle="light-content" />
				<HomeBar RootNavigator={RootNavigator} updateAlpha={this.state.updateAlpha} />
				<ScrollView 
					style={styles.container}
					refreshControl={
						<RefreshControl 
							refreshing={this.state.isRefreshing}
							onRefresh={()=>{this._onRefresh()}}
							title="小二努力刷新中..."
							color="#999"
							tintColor="#ffdc7e"
							progressBackgroundColor="#fff"
						/>
					}
					scrollEventThrottle={10}
					onScroll={(e)=>{this._handleScroll(e)}}>
					<HomeSlider RootNavigator={RootNavigator} />
					<HomeMenu RootNavigator={RootNavigator} />
					<HomeActiveity RootNavigator={RootNavigator} />
					<HomeKill RootNavigator={RootNavigator} />
					<HomeSlider2 RootNavigator={RootNavigator} />
					<HomeList RootNavigator={RootNavigator} />
				</ScrollView>
				<Tabs onselect={0} RootNavigator={RootNavigator} />
				<Load isShow={true} bgColor="#000" hasChildren={false} Image={0} showBtn={false} BtnStyle={{backgroundColor:"#000"}} opacity={0.6} fadeWay="up" bgAnimate="default" ref="Load">
					<Image style={{width:100,height:100}} source={require("./assest/load1.gif")}></Image>
				</Load>
			</View>
		)
	}
	componentWillMount(){
		const { RootNavigator } = this.props;
		if(Platform.OS === "android"){
			BackAndroid.addEventListener("hardwareBackPress",()=>{
				const number = routesNumber(RootNavigator);//多少个路由
				// 监听android返回键
				if(!this.state.exitStartTime){
					this.state.exitStartTime = Date.now();
					ToastAndroid.show("再按一次退出程序",3);
					return true;
				}
				else{
					if(this.state.exitStartTime+3000>Date.now()){
						// 说明可以退出
						return false;
					}
					else{
						this.state.exitStartTime = Date.now();
						ToastAndroid.show("再按一次退出程序",3);
						return true;
					}
				}
			});
		}
		// this.refs.Load.OpenLoad();
	}
	componentWillUnmount(){
		if(Platform.OS === 'android'){
			BackAndroid.removeEventListener("hardwareBackPress");
		}
	}
	_onRefresh(){
		this.setState({isRefreshing:true});
		PromiseRefreshing(this.props).then(()=>{
			this.refs.Load.setTimeClose();
			this.setState({
				isRefreshing:false
			});
			// Alert.alert("列表刷新完毕","可以继续刷新");
		})
		// Refreshing(this.props,()=>{
		// 	this.setState({
		// 		isRefreshing:false
		// 	});
		// 	Alert.alert("列表刷新完毕","可以继续刷新");
		// });
	}
	_handleScroll(e){
		// 改变头部透明度
		let alpha = (e.nativeEvent.contentInset.top + e.nativeEvent.contentOffset.y) / 200;

    this.setState({
    	updateAlpha:alpha
    });
	}
	componentDidMount(){
		setTimeout(()=>{
			this.refs.Load.CloseLoad();
		},2000)
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1
	},
	container: {
		flexDirection:"column",
		backgroundColor: 'rgb(234,234,234)',
		marginBottom:50
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,
		status:store.userStore.status,
		user:store.userStore.user,
		HomeList:store.homeStore.HomeList
	}
}

export default connect(select)(Home);