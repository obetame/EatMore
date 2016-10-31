import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Alert
} from 'react-native';

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class SelectAddress extends Component{
	state = {
		onselect:this.props.onselect?this.props.onselect:0
	};
	onAlert(tip){
		
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.select}>
					<TouchableOpacity style={styles.bar} activeOpacity={0.8}>
						<Text style={styles.bartext}>全部分类</Text>
						<View style={styles.iconcontent}>
							<Icon name="sort-down" style={styles.icon} size={16} color="#999" />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.bar} activeOpacity={0.8}>
						<Text style={styles.bartext}>全城</Text>
						<View style={styles.iconcontent}>
							<Icon name="sort-down" style={styles.icon} size={16} color="#999" />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.bar} activeOpacity={0.8}>
						<Text style={styles.bartext}>智能排序</Text>
						<View style={styles.iconcontent}>
							<Icon name="sort-down" style={styles.icon} size={16} color="#999" />
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.selectshow}>
					<Text style={styles.selecttext}>当前:
						<Text style={styles.selecttext}>番禺区大石街中心北路</Text>
					</Text>
					<TouchableOpacity style={styles.selecticon}>
						<Icon name="refresh" size={16} color="#999" />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#fff',
		
		alignItems:"center",
		borderBottomWidth:1,
		borderBottomColor:"#d5d5d5"
	},
	select:{
		flexDirection:"row",
		height:50
	},
	selectshow:{
		height:35,
		flexDirection:"row",
		backgroundColor:"#d5d5d5",
		width:Width,
		justifyContent:"flex-start",
		alignItems:"center"
	},
	selecttext:{
		color:"#999",
		marginLeft:10
	},
	selecticon:{
		position:"absolute",
		right:0,
		top:0,
		alignSelf:"center",
		width:30,
		height:35,
		alignItems:"center",
		justifyContent:"center"
	},
	bar:{
		width:Width/3,
		alignItems:"center",
		flexDirection:"row",
		justifyContent:"center",
		height:50
	},
	bartext:{
		color:"#999"
	},
	iconcontent:{
		height:50,
		justifyContent:"center"
	},
	icon:{
		marginBottom:5,
		marginLeft:5
	}
});

export default SelectAddress;