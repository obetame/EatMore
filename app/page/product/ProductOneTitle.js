import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	TouchableOpacity,
	Platform
} from 'react-native';
import {Width,Height,Scale} from "../../components/DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductOneTitle = React.createClass({
	render(){
		const {title,sellNumber,price,buyNumber,tag,sellMoney,info,img} = this.props;
		return(
			<View style={styles.root}>
				<View style={styles.title}>
					<Text style={styles.titletext} numberOfLines={1}>{title}</Text>
				</View>
				<View style={styles.number}>
					<Text style={styles.numbertext}>月售{sellNumber}件</Text>
					{
						tag.map((item,i)=>{
							return (
								<View key={i} style={styles.babel}>
									<Text style={styles.numberbabel}>{item}</Text>
								</View>
							)
						})
					}
					
				</View>
				<View style={styles.money}>
					<Text style={styles.moneytext}>¥{price}</Text>
					<TouchableOpacity
						activeOpacity={0.9}
						style={styles.cart}>
						<Icon name="shopping-cart" size={25} color="rgb(251,56,8)" />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#fff',
		flexDirection:"column",
		paddingTop:10,
		paddingLeft:10,
		paddingRight:10,
		paddingBottom:10,
		flex:1,
	},
	title:{
		marginBottom:10
	},
	titletext:{
		fontSize:18,
		color:"rgb(100,100,100)"
	},
	number:{
		flexDirection:"row"
	},
	numbertext:{
		fontSize:14,
		color:"#999"
	},
	babel:{
		alignItems:"center",
		justifyContent:"center",
		borderWidth:1,
		borderColor:"rgb(251,56,8)",
		paddingLeft:5,
		paddingRight:5,
		height:16,
		borderRadius:5,
		marginLeft:5
	},
	numberbabel:{
		color:"rgb(251,56,8)",
		fontSize:12
	},
	money:{
  	flexDirection:"row",
  	alignItems:"center",
  	marginTop:5
  },
  moneytext:{
  	fontSize:20,
  	color:"rgb(248,120,93)"
  },
  cart:{
  	position:"absolute",
  	bottom:2,
  	right:5
  }
});

export default ProductOneTitle;