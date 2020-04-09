import {ADD_CART,
		INCREMENT_COUNT,
		ADD_TO_CAR
}from './mutation-types'

export default{
	addCart({state,commit},product){  
		return new Promise((resolve,reject)=>{
			var flag=false
			state.listCar.some(function(item){   //如果购物车中有同样的商品。只需要将数量加一
				if(item.iid==product.iid){
					commit(INCREMENT_COUNT,item)
					flag=true
					resolve('当前商品数量加1')
					return true
				}
			})
			if(!flag){       //如果购物车中没有当前商品，则将当前商品加入到购物车中
				commit(ADD_TO_CAR,product)
				resolve('商品加入购物车成功')
			}
			//当更新car之后，把car数组存储到localStorage
			localStorage.setItem('listCar',JSON.stringify(state.listCar));
		})
	}
}
