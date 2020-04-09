//包含n个接口请求函数的模块
import ajax from './ajax.js'

const BASE_URLI='http://123.207.32.32:8000';  //旧接口，已失效一部分
//const BASE_URL="http://adi-v3.dev"   // 旧接口 ，已失效
const BASE_URL="http://123.207.32.32:8000/api/h8" 


//获取首页数据  旧接口 ，已失效
export const reqGetHomeSwiperData= () => ajax(BASE_URLI+'/home/multidata');
//export const reqGetHomeGoods= (type,page) => ajax(BASE_URL+'/home/data',{type,page});

//export const reqGetHomeSwiperData= () => ajax(BASE_URL+'/test/getBanners');
//export const reqGetHomeGoods= (type,page) => ajax(BASE_URL+'/test/getGoods',{type,page});

export const reqGetHomeGoods= (type,page) => ajax(BASE_URL+'/home/data',{type,page});
export const reqGetDetail=(iid) => ajax(BASE_URL+'/detail',{iid})

export const reqGetRecommend=() =>ajax(BASE_URL+'/recommend')	