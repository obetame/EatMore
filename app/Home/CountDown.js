import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	ToastAndroid,
	Alert
} from 'react-native';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

class CountDown extends Component {
	propTypes:{
		time:React.PropTypes.number.isRequired,
		style:React.PropTypes.object
	}
	state = {
		time:this.props.time,
		formatTime:"",
		countdown:null,
		style:this.props.style
	};
	render(){
		return (
			<View style={[styles.container,this.state.style]}>
				<Text style={{color:"#fff"}}>
					{this.state.formatTime}
				</Text>
			</View>
		)
	}
	componentDidMount(){
		let countdown = setInterval(()=>{
			if(this.state.time>0){
				this.state.time--;//自减
				let hour = Math.floor(this.state.time/60/60);
				let min = Math.floor(this.state.time/60);
				let sec = Math.floor(this.state.time%60);
				this.setState({
					formatTime:this._FormatTime(hour,min,sec)
				})
			}
			else{
				clearInterval(this.state.countdown);
			}
		},1000)
	}
	_FormatTime(hour,min,sec){
		// 返回格式化后的时间
		let time = "";
		if(hour<=9){
			time = "0"+hour;
		}
		else{
			time = hour+"";
		}
		if(min<=9){
			time = time + ":0" + min;
		}
		else{
			time = time +":"+ min;
		}
		if(sec<=9){
			time = time + ":0" + sec;
		}
		else{
			time = time +":"+ sec;
		}
		return time;
	}
}

const styles = StyleSheet.create({
	container:{
		height:20,
		position:"absolute",
		top:10,
		width:70,
		backgroundColor:"rgb(14,14,14)",
		justifyContent:"center",
		alignItems:"center"
	}
})

export default CountDown;