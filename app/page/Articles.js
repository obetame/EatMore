import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	WebView,
	ListView,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈
import Reactotron from 'reactotron-react-native';

const Articles = React.createClass({
	propTypes:{
		articles:PropTypes.array.isRequired,
	},
	getDefaultProps(){
		return {
			articles:[]
		}
	},
	render(){
		let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		const {RootNavigator} = this.props;
		return(
			<View style={styles.root}>
				<ListView
					pageSize={2}
					contentContainerStyle={styles.lists}
					dataSource={ds.cloneWithRows(this.props.articles)}
					renderRow={(rowData)=> this._renderList(rowData)}
					/>
			</View>
		)
	},
	_renderList(data){
		return (
			<TouchableOpacity 
				style={styles.body}
				activeOpacity={1}
				onPress={()=>{this._onPress(data)}}>
				<Text numberOfLines={1} style={styles.title}>{data.title}</Text>
				<Text numberOfLines={1} style={styles.text}>{data.publish_time}</Text>
			</TouchableOpacity>
		)
	},
	_onPress(item){
		const {RootNavigator} = this.props;
		Reactotron.log(item.uniqueid)
		fetch("http://192.168.31.86/api/Topic/GetDetail", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				UniqueId: item.uniqueid
			})
		}).then((response)=>response.json()).then((res)=>{
			Reactotron.log(res)
			jumpUseName(RootNavigator,"ReadArticle",res.data);
		});
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column",
		backgroundColor:"#fff",
		flex:1,
	},
	container:{
		flex: 1, 
		position: 'relative', 
		flexDirection: 'column', 
		backgroundColor: 'transparent'
	},
	lists:{
		flexDirection:"row",
		flexWrap:"wrap",
	},
	body:{
		width:Width,
		height:60,
		alignItems:"center"
	},
	title:{
		color:"#000",
		fontSize:16,
		alignSelf:"flex-start",
		marginLeft:10,
		fontWeight:"bold"
	},
	text:{
		color:"#999",
		alignSelf:"flex-start",
		marginLeft:10
	},
});

export default Articles;