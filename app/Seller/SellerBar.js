import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class SellerBar extends Component{
	state = {
		onselect:this.props.onselect?this.props.onselect:0
	};
	onAlert(tip){
		Alert.alert('Alert Title',tip,[
			{text: '不好', onPress: () => console.log('OK Pressed!')},
			{text: '好的', onPress: () => console.log('OK Pressed!')}
			]);
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity onPress={()=>{this.onAlert('zhouyuexie')}} style={styles.bar1} activeOpacity={0.8}>
					<Icon name="location-arrow" size={20} color="rgb(6,193,174)" />
				</TouchableOpacity>
				<View style={styles.bar2}>
					<TouchableOpacity onPress={()=>{
						this.setState({onselect:0});
						// this.state.onselect = 0;
					}} style={this.state.onselect===0?styles.bar2contentActivity:styles.bar2content} activeOpacity={0.8}>
						<Text style={[styles.bar2text,{color:this.state.onselect===0?"#fff":"rgb(6,193,174)"}]}>全部商家</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{
						this.setState({onselect:1});
						// this.state.onselect = 1;
					}} style={this.state.onselect===1?styles.bar2contentActivity:styles.bar2content}  activeOpacity={0.8}>
						<Text style={[styles.bar2text,{color:this.state.onselect===1?"#fff":"rgb(6,193,174)"}]}>优惠商家</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.bar3} activeOpacity={0.8}>
					<View style={styles.bar3content}>
						<Icon name="search" size={20} color="rgb(6,193,174)" />
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"row",
		backgroundColor: '#fff',
		...Platform.select({
			ios:{
				height:60,
				paddingTop:15
			},
			android:{
				height:50
			}
		}),
		alignItems:"center",
		borderBottomWidth:1,
		borderBottomColor:"#d5d5d5"
	},
	bar1:{
		flex:0.2,
		alignItems:"flex-start",
		paddingLeft:10
	},
	bar2:{
		flex:0.6,
		alignItems:"center",
		flexDirection:"row",
		borderWidth:1,
		borderColor:"rgb(6,193,174)",
		height:35,
		borderRadius:5
	},
	bar2content:{
		flex:1,
		alignItems:"center",
		backgroundColor:"#fff"
	},
	bar2contentActivity:{
		flex:1,
		alignItems:"center",
		backgroundColor:"rgb(6,193,174)",
		height:35,
		borderRadius:5,
		justifyContent:"center"
	},
	bar2text:{
		color:"rgb(6,193,174)",
		fontSize:14
	},
	bar3:{
		flex:0.2,
		alignItems:"flex-end",
		paddingRight:10
	}
});

export default SellerBar;