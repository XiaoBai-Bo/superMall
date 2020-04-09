<template>
	<div class="car_bar">
		<div class="left">
			<checkButton :isChecked="isSeclectAll" @click.native="checkClick"></checkButton>
			<span class="check">全选</span>
		</div>
		
		<div class="center">
			<span>合计:￥{{totalPrice}}</span>
		</div>
		
		<div class="right" @click="calc">
			<span>去结算:({{calculate}})</span>
		</div>
	</div>
</template>

<script>
	import checkButton from '../../../components/common/checkButton/CheckButton.vue'
	import { mapState } from 'vuex'
	export default{
		data(){
			return{}
		},
		methods:{
			checkClick(){
				if(this.isSeclectAll){
					this.listCar.forEach((item)=>{
						item.isCheck=false
					})
				}else{
					this.listCar.forEach((item)=>{
						item.isCheck=true
					})
				}
			},
			calc(){
				if(this.listCar.length==0){
					this.$toast.show('亲,你还没有加入商品哦!',1500)
				}
			}
		},
		computed:{
			...mapState(['listCar']),
			totalPrice(){
				return this.listCar.filter((item)=>{   //过滤购物车中isCheck为true的商品
					return item.isCheck
				}).reduce((preValue,item)=>{
					return preValue+item.count*item.realPrice 
				},0).toFixed(2)
			},
			calculate(){
				return this.listCar.filter((item)=>{
					return item.isCheck
				}).reduce((preValue,item)=>{
					return preValue+item.count
				},0)
			},
			isSeclectAll(){
//				console.log(this.listCar.length)   //本身数组长度
//				console.log(this.listCar.filter((item)=>{return item.isCheck}).length)   //返回被选中的数组长度
//				return this.listCar.filter((item)=>{
//					return	item.isCheck
//				}).length===this.listCar.length
				if(this.listCar.length==0){
					return false
				}
				return !this.listCar.find((item)=>{return !item.isCheck})
			}
		},
		components:{
			checkButton
		}
	}
	
</script>

<style lang="scss" scoped>
 .car_bar{
 	background-color: #FFECEC;
    position: absolute;
    bottom: 50px;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    padding-left: 4px;
    align-items: center;
    font-size: 15px;
    .left{
    	display:flex;
    	.check{
    		
    	}
    }
    .right{
    	display: inline-block;
	    background: orange;
	    height: inherit;
	    line-height: 35px;
	    width: 100px;
	    text-align: center;
	    color: #fff;
    }
 }
</style>