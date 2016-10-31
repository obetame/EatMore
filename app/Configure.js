// 配置文件,保存app的各种配置和初始化各种数据
// 如果需要更新,只需要从服务器获取数据更改state中的信息
// 每次更新app的时候需要更新下列的信息

// app各种信息
export const AppInfo = {
	Version:"0.0.1",
	Author:"yyhp",
	IsFirstStart:true,
	YoumengId:"友盟id"
}

// app启动图
export const AppStartImg = {
	
}

// Home页面
export const Home = {
	// 链接
	Link:{
		HomeUpdate:"http://192.168.31.116:3000/appconfig",//app信息
		HomeActiveity:"http://192.168.31.116:3000/activeity",// 活动部分
		HomeList:"http://192.168.31.116:3000/list"// 列表部分
	},
	// 轮播图
	HomeSlider:[
		{
			"imgUrl":"http://192.168.31.116:3000/img/banner1_sy.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/banner1_sy.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/banner1_sy.png"
		}
	],
	// 菜单栏
	HomeMenu:[
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_icon_kinds.png"
		}
	],
	HomeActiveity:[
		{
			"imgUrl":"http://192.168.31.116:3000/img/1_pic_4kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/2_pic_4kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/3_pic_4kinds.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/4_pic_4kinds.png"
		}
	],
	HomeKill:[
		{
			"imgUrl":"http://192.168.31.116:3000/img/pic_miaosha.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/pic_miaosha.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/pic_miaosha.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/pic_miaosha.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/pic_miaosha.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/pic_miaosha.png"
		}
	],
	HomeSlider2:[
		{
			"imgUrl":"http://192.168.31.116:3000/img/1_lunbo.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/1_lunbo.png"
		},
		{
			"imgUrl":"http://192.168.31.116:3000/img/1_lunbo.png"
		}
	],
	HomeList:[]
}

// Seller页面
export const Seller= {
	Seller:""
}

// 用户信息,初始化都是为空
export const UserData = {
	user:{
		Phone:"",
		Name:"",
		Password:"",
		Money:"",
		Age:""
	},
	isLogin:false,//是否登录
	status:null//用户当前状态(比如手机号短信验证)
}