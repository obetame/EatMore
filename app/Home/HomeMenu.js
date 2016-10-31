import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	PixelRatio,
	Animated,
	TouchableOpacity
} from 'react-native';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

class HomeMenu extends Component{
	state = {
		tip:"home",
		roation:new Animated.Value(0)
	};
	onPress(){
		const { RootNavigator } = this.props;
	}
	componentDillMount(){
		this.state.roation.setValue(1.5);
		Animated.timing(this.state.roation,{
			toValue:1
		}).start();
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.lines}>
					<TouchableOpacity activeOpacity={0.8} onPress={()=>{this.onPress()}} style={styles.list}>
						<Image style={styles.img} source={require("../assest/1_icon_kinds.png")} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.list}>
						<Image style={styles.img} source={require("../assest/2_icon_kinds.png")} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.list}>
						<Image style={styles.img} source={require("../assest/1_icon_kinds.png")} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.list}>
						<Image style={styles.img} source={require("../assest/2_icon_kinds.png")} />
					</TouchableOpacity>
				</View>
				<View style={styles.lines}>
					<TouchableOpacity activeOpacity={0.8} onPress={()=>{this.onPress()}} style={styles.list}>
						<Image style={styles.img} source={require("../assest/1_icon_kinds.png")} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.list}>
						<Image style={styles.img} source={require("../assest/2_icon_kinds.png")} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.list}>
						<Image style={styles.img} source={require("../assest/1_icon_kinds.png")} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.list}>
						<Image style={styles.img} source={require("../assest/2_icon_kinds.png")} />
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
		height:160,
		position:"relative",
		marginTop:-20,
		width:Width-10,
		marginLeft:5,
		marginRight:5,
		borderRadius:10
	},
	lines:{
		flexDirection:"row",
		height:80
	},
	list:{
		flex: 1,
		alignItems: 'center',
		flexDirection:"column",
		justifyContent:"center"
	},
	img:{	
		width:50,
		height:50
	}
});

export default HomeMenu;