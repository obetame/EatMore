// 升级配置
import Reactotron from 'reactotron-react-native';//测试
import { ChangeList,EmptyList } from './action/ActionHome';

// 检查版本信息
function checkVersion(Link){
	return fetch(Link.HomeUpdate)
		.then((response)=>response.json())
		.then((res)=>{
			return res;//返回版本信息
		})
}

// 启动时候检查
export default function Update(props,_Ready){
	const {HomeList,dispatch,Link} = props;

	// const Info = checkVersion(Link);//检查版本信息
	if(HomeList.length===0){
		dispatch(ChangeList())
	}
	// Reactotron.display(Info)
	// if(Info.Code!==2){
		// dispatch(EmptyList());//清空
	// }

	setTimeout(()=>{
		_Ready();//进入app页面
	},2000);
}

// 刷新列表
export function Refreshing(props,_Ready){
	const {dispatch} = props;
	dispatch(ChangeList());
	setTimeout(()=>{
		_Ready();//进入app页面
	},1000);
}

// 刷新列表(异步)
export const PromiseRefreshing =  (props)=>{
	return new Promise((resolve,reject)=>{
		const {dispatch} = props;
		dispatch(ChangeList());
		resolve();
	});
}