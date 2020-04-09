import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
//
Vue.use(Vuex)
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})


//const car =JSON.parse(localStorage.getItem('listCar')||'[]');
//const store=new  Vuex.Store({
//	state:{
//		listCar:car
//	},
//	mutations:{
//		addcount(state,product){
//			product.count++
//		},
//		addTocar(state,product){
//			state.listCar.push(product)
//		}
//	},
//	actions:{
//		addCart({state,commit},product){  //如果购物车中有同样的商品。只需要将数量加一
//			var flag=false
//			state.listCar.some(function(item){
//				if(item.iid==product.iid){
////					item.count++
//					commit('addcount',product)
//					flag=true
//					return true
//				}
//			})
//			if(!flag){       //如果购物车中没有当前商品，则将当前商品加入到购物车中
////				state.listCar.push(product)
//				commit('addTocar',product)
//			}
//			//当更新car之后，把car数组存储到localStorage
//			localStorage.setItem('listCar',JSON.stringify(state.listCar));
//		}
//	}
//})
//export default store