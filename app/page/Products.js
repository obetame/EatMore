import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	ScrollView,
	StatusBar,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import LoginForm from "./log/LoginForm";
import LogupForm from "./log/LogupForm";
import Header from "../components/Header";
import ProductOne from "./product/ProductOne";

const Products = React.createClass({
	propTypes:{
		title:PropTypes.string.isRequired,
		productID:PropTypes.string.isRequired
	},
	getDefaultProps(){
		return {
			isLogin:false
		}
	},
	getInitialState(){
		return {
			title:this.props.title,
			productID:this.props.productID
		}
	},
	render(){
		const {RootNavigator} = this.props;
		return(
			<View style={styles.root}>
				<StatusBar translucent={true} backgroundColor="#fff" barStyle="default"/>
				<Header bgColor="rgb(251,56,8)" title="产品页" RootNavigator={RootNavigator} />
				<ScrollableTabView
					style={styles.container}
					tabBarTextStyle={{color:"#000"}}
					tabBarBackgroundColor="#fff"
					tabBarUnderlineStyle={{backgroundColor:"rgb(251,56,8)"}}
					initialPage={0}>
					<ProductOne {...this.props} tabLabel="商品" />
					<LogupForm tabLabel="详情" />
					<LoginForm tabLabel="评价" />
				</ScrollableTabView>
			</View>
		)
	},
	componentDidMount(){
		// Alert.alert("参数",this.props.productnumber+"name:"+this.props.productname)
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column",
		backgroundColor:"#fff",
		flex:1,
		shadowColor:"#000",
		shadowOffset:{width:10,height:10},
		shadowRadius:10
	},
	container:{
		flex: 1, 
		position: 'relative', 
		flexDirection: 'column', 
		backgroundColor: 'transparent'
	}
});

export default Products;