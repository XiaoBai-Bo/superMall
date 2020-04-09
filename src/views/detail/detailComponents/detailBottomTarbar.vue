<template>
	<div class="bottomTarbar">
		<div class="title">
			<span class="iconfont">&#xe69f;</span>
			<div>客服</div>
		</div>
		<div class="title">
			<span class="iconfont">&#xe606;</span>
			<div>店铺</div>
		</div>
		<div class="title">
			<span class="iconfont">&#xe60d;</span>
			<div>收藏</div>
		</div>
		
		<div class="enter" @click="addToCar">加入购物车</div>
		<div class="mai">购买</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		methods:{
			addToCar(){
				this.$emit('addCar')
//				Toast('添加成功')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottomTarbar{
		position: absolute;
		z-index: 30;
		bottom: 0;
	    display: flex;
		height: 56px;
		background: #fff;
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #000;
		.title{
			flex: 0.7;
			.iconfont{
			    font-size: 30px;
				line-height: 35px;
			}
		}
		.enter{
			flex: 1;
			line-height: 56px;
			background: #ffea21d6;
		}
		.mai{
			flex: 1;
			line-height: 56px;
			background: #ff5777;
			color: #fff;
		}
	}

</style>