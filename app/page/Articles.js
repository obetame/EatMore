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
import Load from "../components/Load";

const Articles = React.createClass({
	propTypes:{
		articles:PropTypes.array.isRequired,
	},
	getDefaultProps(){
		return {
			articles:[]
		}
	},
	getInitialState(){
		return {
			NoShowLoad:false
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
				{/*<Load opacity={0.5} ref="Load" />*/}
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
		fetch("http://192.168.31.86/api/Topic/GetDetail/"+item.uniqueid, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}).then((response)=>response.json()).then((res)=>{
			jumpUseName(RootNavigator,"ReadArticle",res.data);
		}).catch((e)=>{
			Reactotron.log(e);
		});
	},
	componentDidMount(){
		// this.refs.Load.OpenLoad();
	}
})

const styles = StyleSheet.create({
	root:{
		// width:Width,
		// flexDirection:"column",
		backgroundColor:"#fff",
		flex:1
	},
	container:{
		flex: 1, 
		position: 'relative', 
		flexDirection: 'column', 
		backgroundColor: '#fff'
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