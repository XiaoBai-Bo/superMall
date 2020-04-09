<template>
	<div class="shopInfo" v-if="Object.keys(shops).length!==0">
		<div class="shopInfo_logo">
			<div class="shopInfo_img">
				<img :src="shops.logo"/>
			</div>
			<span>{{shops.name}}</span>
		</div>
		<div class="shopInfo_middle">
			<div class="left">
				<div class="count">
					<div>{{shops.sells|countFilter}}</div>
					<div>总销量</div>
				</div>
				<div class="title">
					<div>{{shops.goodsCount}}</div>
					<div>宝贝</div>
				</div>
			</div>
			<div class="right">
				<div  class="right_title" v-for="item in shops.score">
					<span class="right_name">{{item.name}}</span>
					<span class="right_score" >{{item.score}}</span>
					<span class="right_isbetter" :class="item.isBetter==true?'red':'green'">{{item.isBetter==true?'高':'低'}}</span>
				</div>
			</div>
			
		</div>
		<div class="shopInfo-button">
			<button type="button" class="button" @click="enter">进店逛逛</button>
		</div>
		
		<!--<p>我是shopinfo</p>-->
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{}
		},
		props:{
			shops:Object
		},
		filters:{
			countFilter(value){
				if(value>10000){
					return parseInt((value/10000))+'万'
				}
			}
		},
		methods:{
			enter(){
				Toast('店铺更新中!')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.red{
		color: red;
	}
	.green{
		color: green;
	}
	.shopInfo{
		padding: 10px 10px 0 10px;
		border-bottom: 4px solid #ccccccc2;
		.shopInfo_logo{
			height:50px;
		    margin: 0px 0px 0px 10px;
			line-height:50px;
			display:flex;
			.shopInfo_img{
				margin-right: 15px;
				height: 50px;
				img{
					height: 100%;
				}
			}
		}
		.shopInfo_middle{
			display: flex;
			text-align: center;
			font-size: 15px;
			height: 60px;
			.left{
				flex: 1;
				display: flex;
				border-right:1px solid #ccc;
				line-height: 30px;
				.count{
					flex: 1;
				}
				.title{
					flex: 1;
				}
			}
			.right{
				flex: 1;
				.right_title{
					display:flex;
					.right_name{
						flex: 1.5;
					}
					.right_score{
						flex: 0.8;
					}
					.right_isbetter{
						flex: 0.5;
					}
				}
			}
		}
		.shopInfo-button{
			text-align: center;
			margin: 10px 0;
   			/*border-bottom: 4px solid #ccccccc2;*/
			.button{
				border-radius:100%;
			    /*margin-bottom: 10px;*/
			}
		}
	}

</style>