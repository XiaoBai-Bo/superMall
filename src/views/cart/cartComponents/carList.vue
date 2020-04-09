<template>
	<div class="cart_list" >
		<div class="cartList" v-for="(item,index) in listCar" :key="index">
			<div class="icon">
				<checkButton :isChecked="item.isCheck" @click.native="checkClick(item)"></checkButton>
				<!--<span class="iconfont" :class="{checkout:isCheck}" @click="check">&#xe650;</span>-->
			</div>
			<div class="left">
				<img :src="item.img" />
			</div>
			<div class="right">
				<div class="cart_title oput">
					{{item.title}}
				</div>
				<div class="cart_desc oput">
					{{item.desc}}
				</div>
				<div class="cart_price oput">
					<span class="price">{{item.realPrice}}</span>
					<span class="count">x{{item.count}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import scroll from '../../../components/common/scroll/Scroll.vue'
	import checkButton from '../../../components/common/checkButton/CheckButton.vue'
	
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			checkClick(item){
				item.isCheck=!item.isCheck
//				console.log(item)
			}
		},
		props:{
			listCar:Array
		},
		components:{
			checkButton
		}
	}
	
</script>

<style lang="scss" scoped>
	.checkout{
		color: red;
	}
	.cart_list{
		height: 100%;
		.cartList{
			height: auto;
			display: flex;
			padding:4px;
			.icon{
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-right: 2px;
				span{
					font-size: 20px;
				}
			}
			.left{
				margin-right: 5px;
				img{
					width: 80px;
					height: 110px;
					border-radius: 10%;
				}
			}
			.right{
			    width: 72%;
			    display: flex;
			    flex-direction: column;
			    justify-content: space-evenly;
			    .oput{
			    	height: auto;
			    }
				.cart_title{
					text-overflow: ellipsis;
				    overflow: hidden;
				    white-space: nowrap;
				    font-size: 16px;
				    font-weight: bold;
				    color: #000;
				}
				.cart_desc{
					text-overflow: ellipsis;
				    overflow: hidden;
				    white-space: nowrap;
				    font-size: 15px;
				    color: #666666;
				}
				.cart_price{
					display: flex;
					justify-content: space-between;
					.price{
						color: #DD4A68;
					}
					.count{
						margin-right: 5px;
					}
				}
			}
		}
	}
</style>