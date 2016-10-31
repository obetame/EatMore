/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './ReactotronConfig';//配置
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
  Image
} from 'react-native';
import {Provider} from "react-redux";
import codePush from "react-native-code-push";
import configureStore from "./app/store/Store";
import {Width,Height,Scale} from "./app/components/DeviceInfo";//获取设备信息

import Root from "./app/Root";

class EatMore extends Component {
  state = {
    isLoading:true,
    store:configureStore(()=>{this.setState({isLoading:false});})
  }
  render() {
    if(this.state.isLoading){
      return (
        <Image style={{width:Width,height:Height,resizeMode:'stretch'}} source={require("./app/assest/start.jpg")} />
      )
    }
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
  componentWillMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // },2000);
  }
  componentDidMount(){
    codePush.sync({
      updateDialog:{ 
        title: "有一个可用升级!",
        appendReleaseDescription: true
      },
      installMode: codePush.InstallMode.ON_NEXT_RESTART
  });
  }
}

AppRegistry.registerComponent('EatMore', () => EatMore);
