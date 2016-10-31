import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	ScrollView,
	TouchableOpacity,
	Platform
} from 'react-native';
import {Width,Height,Scale} from "../../components/DeviceInfo";//获取设备信息
import ProductOneImage from "./ProductOneImage";
import ProductOneTitle from "./ProductOneTitle";
import ProductOneInfo from "./ProductOneInfo";
import ProductOneSelect from "./ProductOneSelect";
import ProductOneAddress from "./ProductOneAddress";
import ProductOneEvaluation from "./ProductOneEvaluation";

const ProductOne = React.createClass({
	render(){
		return(
			<View style={styles.root}>
				<ScrollView style={styles.container}>
					<ProductOneImage {...this.props} />
					<ProductOneTitle {...this.props} />
					<ProductOneInfo {...this.props} />
					<ProductOneSelect {...this.props} />
					<ProductOneAddress {...this.props} />
					<ProductOneEvaluation {...this.props} />
				</ScrollView>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	root:{
		flex:1
	},
	container: {
		flex:1,
		flexDirection:"column",
		backgroundColor:"rgb(230,230,230)"
	}
});

export default ProductOne;