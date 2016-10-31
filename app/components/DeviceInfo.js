import {
	PixelRatio
} from 'react-native';

const Dimensions = require('Dimensions');

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get("window").height;
export const Scale = PixelRatio.get();//返回设备的像素密度