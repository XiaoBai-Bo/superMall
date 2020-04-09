<template>
	<!--判断一个对象是否为空，为空不进行页面的渲染-->
	<div class="baseInfo" v-if="Object.keys(goods).length!==0">
			
		<div class="baseInfo_title">
			<div class="title">{{goods.title}}</div>
		</div>
		<div class="baseInfo_price">
			<div class="newPrice">{{goods.newPrice}}</div>
			<div class="oldPrice">{{goods.oldPrice}}</div>
			<div class="discount" v-if="goods.discount" :style="{background:goods.discountBgColor}">{{goods.discount}}</div>
		</div>
		<div class="baseInfo_desc">
			<span class="desc">{{goods.columns[0]}}</span>
			<span class="desc">{{goods.columns[1]}}</span>
			<span class="desc">{{goods.services[goods.services.length-1].name}}</span>
		</div>
		
		<div class="baseInfo_info">
			<div class="info" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon" />
				<span>{{goods.services[index-1].name}}</span>
			</div>
		</div>
			
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:{
			goods:Object
		}
	}
</script>

<style lang="scss" scoped>
	.baseInfo{
		padding: 10px 10px 0 10px;
	    border-bottom: 4px solid #ccccccc2;
		.baseInfo_title{
			.title{
				color: #000;
			}
		}
		.baseInfo_price{
			display: flex;
			margin: 7px 0 7px 0;
			align-items: baseline;
			.newPrice{
				color: red;
				font-size: 20px;
				margin-right: 10px;
			}
			.oldPrice{
				font-size: 12px;
				margin-right: 5px;
				text-decoration: line-through;
			}
			.discount{
				color: #000;
				border-radius: 13%;
			}
		}
		.baseInfo_desc{
			border-bottom: 1px solid #ccc;
			padding-bottom: 6px;
			display: flex;
			span{
				flex: 1;
			}
			span:nth-child(2){
				text-align: center;
			}
			span:nth-child(3){
				text-align: right;
			}
		}
		.baseInfo_info{
			height: 50px;
			line-height: 50px;
			display: flex;
			justify-content: space-between;
			.info{
				img{
					width: 15px;
				}
				span{
					font-size: 14px;
					color: #000;
				}
			}
		}
	}

</style>