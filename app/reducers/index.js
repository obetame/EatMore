import { combineReducers } from 'redux';
import ReducerUser from "./ReducerUser";//用户数据
import ReducerHome from "./ReducerHome";//主页数据

export default combineReducers({
	userStore:ReducerUser,
	homeStore:ReducerHome
});