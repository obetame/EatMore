import {applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import {persistStore,autoRehydrate} from "redux-persist";
import {AsyncStorage} from "react-native";
import Reactotron from 'reactotron-react-native';

import Reducers from "../reducers/index";

const logger = store => next => action =>{
	// if(typeof action === "function"){
	// 	console.log("Store:dispatching a function");
	// }
	// else{
	// 	console.log("dispatching",action);
	// }
	let result = next(action);
	Reactotron.log(store.getState());
	return result;
}

let middlewares = [
	logger,
	thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(onComplete:()=>void){
	const store = autoRehydrate()(createAppStore)(Reducers);
	let opt = {
		storage:AsyncStorage,
		transform:[]
	};
	persistStore(store,opt,onComplete);
	return store;
}