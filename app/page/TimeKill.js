import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	ScrollView,
	PixelRatio,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import CustomTabBar from "../components/CustomTabBar";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeList from "../Home/HomeList";
import Header from "../components/Header";

class TimeKill extends Component{
	state = {
		title:"TimeKill"
	};
	render(){
		const { RootNavigator } = this.props;
		return(
			<View key={"TimeKill"} style={styles.root}>
				<StatusBar backgroundColor="#fff" style={{color:"#000"}} barStyle="default" />
				<Header title="限时秒杀" bgColor="#fff"/>
				<ScrollableTabView 
					style={styles.container}
					tabBarTextStyle={{color:"#000"}}
					tabBarBackgroundColor="#fff"
					tabBarUnderlineStyle={{backgroundColor:"rgb(251,56,8)"}}
					renderTabBar={() => <CustomTabBar />}
					initialPage={2}>
					<HomeList tabLabel="12:00|已开抢"></HomeList>
					<HomeList tabLabel="13:00|已开抢"></HomeList>
					<HomeList tabLabel="15:00|已开抢"></HomeList>
					<HomeList tabLabel="17:00|已开抢"></HomeList>
					<HomeList tabLabel="19:00|已开抢"></HomeList>
				</ScrollableTabView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1
	},
	container: {
		marginTop:10
	},
	tabBarTextStyle:{
		color:"#fff"
	}
});

export default TimeKill;