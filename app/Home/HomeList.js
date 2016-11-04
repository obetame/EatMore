// 列表

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	PixelRatio,
	TouchableOpacity,
	ListView
} from 'react-native';
import { connect } from 'react-redux';
import { ChangeList,EmptyList } from '../action/ActionHome';
import Reactotron from 'reactotron-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {Home} from "../Configure";//获取首页配置
import {jumpUseName} from "../components/RouteStack";//路由栈

class HomeList extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[],
		}
	}
	render(){
		let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		// ds放这里定义,刷新列表才有效,否则看不到效果
		return(
			<View style={styles.container}>
				<View style={styles.title}>
					<Icon name="empire" size={20} color="rgb(214,92,95)" />
					<Text style={styles.titletext}>热门商品</Text>
				</View>
				<ListView
					pageSize={2}
					onEndReached={()=>{this._onEndReached()}}
					onEndReachedThreshold={100}
					contentContainerStyle={styles.lists}
					dataSource={ds.cloneWithRows(this.props.HomeList)}
					renderRow={(rowData)=> this._renderList(rowData)}
					/>
			</View>
		)
	}
	_renderList(data){
		return (
			<TouchableOpacity 
				style={styles.body}
				activeOpacity={1}
				onPress={()=>{this._onPress(data)}}>
				<Image source={{uri:data.img}} style={styles.bodyimg} />
				<Text numberOfLines={1} style={styles.text}>{data.title}</Text>
				<View style={styles.infotext}>
					<Text style={styles.red}>¥{data.price}</Text>
					<Text style={styles.gray}>{data.buyNumber}人付款...</Text>
				</View>
			</TouchableOpacity>
		)
	}
	_onEndReached(){
		// Reactotron.log("yes");
	}
	_onPress(item){
		const {RootNavigator} = this.props;
		jumpUseName(RootNavigator,"Products",item);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#fff',
		marginTop:10,
		flex:1
	},
	title:{
		backgroundColor:"rgb(234,234,234)",
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"center",
		height:30
	},
	titletext:{
		color:'rgb(214,92,95)',
		fontSize:16,
		marginLeft:5
	},
	lists:{
		flexDirection:"row",
		flexWrap:"wrap"
	},
	body:{
		width:Width/2,
		height:Width/2+60,
		alignItems:"center"
	},
	bodyimg:{
		width:Width/2-5,
		height:Width/2,
		resizeMode:"contain"
	},
	text:{
		color:"#000"
	},
	red:{
		color:"rgb(221,40,55)",
		fontSize:20,
		alignSelf:"flex-start",
		marginLeft:5
	},
	gray:{
		color:"#999",
		position:"absolute",
		bottom:0,
		right:5
	},
	infotext:{
		flexDirection:"row",
		width:Width/2-5,
		marginTop:10
	}
});

function select(store){
	return {
		HomeList:store.homeStore.HomeList
	}
}

export default connect(select)(HomeList);