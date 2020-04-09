import {
	INCREMENT_COUNT,
	ADD_TO_CAR
} from './mutation-types'
export default{
	[INCREMENT_COUNT](state,product){
		product.count++
	},
	[ADD_TO_CAR](state,product){
		product.isCheck=true  //向每个商品中添加一个新的属性check，该属性记录是否选中商品，默认为true，选中状态
		state.listCar.push(product)
	}
}
