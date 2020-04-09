export default{
	cartLength(state){
		return state.listCar.reduce((preValue,item)=>{
			return preValue+item.count
		},0)
	},
}
