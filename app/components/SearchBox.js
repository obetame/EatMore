import React, {Component,PropTypes} from 'react';
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
import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = React.createClass({
	propTypes:{
		title:PropTypes.string,
		style: View.propTypes.style,
		onPress:PropTypes.func,
		searchIconSize:PropTypes.number,
		searchIconColor:PropTypes.string,
		renderSearchIcon:PropTypes.any,
		fontSize:PropTypes.number,
		fontColor:PropTypes.string
	},
	getDefaultProps(){
		return {
			title:"输入你要搜索的内容",
			onPress:()=>{},
			searchIconSize:18,
			fontSize:18,
			fontColor:"#999",
			searchIconColor:"#999"
		}
	},
	getInitialState(){
		return {
			title:this.props.title,
			searchIconSize:this.props.searchIconSize
		}
	},
	render(){
		return(
			<TouchableOpacity 
				activeOpacity={0.8} 
				key="SearchBox" 
				onPress={()=>{
					this.props.onPress();
				}}
				style={[styles.root,this.props.style]}>
				{this._getIcon(this.props)}
				<Text style={[styles.text,{fontSize:this.props.fontSize,color:this.props.fontColor}]}>{this.state.title}</Text>
			</TouchableOpacity>
		)
	},
	_getIcon(props){
		if(this.props.renderSearchIcon){
			return React.cloneElement(this.props.renderSearchIcon(props),props)
		}
		else{
			return (
				<Icon name="search" style={{marginLeft:5}} size={this.state.searchIconSize} color={this.props.searchIconColor} />
			)
		}
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width-20,
		height:30,
		marginLeft:10,
		marginRight:10,
		borderWidth:1,
		borderColor:"#999",
		flexDirection:"row",
		borderRadius:10,
		alignItems:"center"
	},
	text:{
		alignSelf:"center",
		marginLeft:10
	}
});

export default SearchBox;