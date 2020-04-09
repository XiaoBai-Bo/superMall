<template>
	<div class="recommend">
		<div class="recommend-item" v-for="(item,index) in recommends" v-if="recommends.length">
			<a :href="item.link">
				<img class="recommend-img" :src="item.image" />
			</a>
			<p class="recommend-title">{{item.title}}</p>
		</div>
		<img v-else v-lazy style="height: 148px;width: 100%;"/>
	</div>
</template>

<script>
	export default{
		props:{
			recommends:Array
		}
	}
</script>

<style lang="scss">
	.recommend{
		display:flex;
		text-align: center;
		padding: 10px 0 10px 0;
		border-bottom: 10px solid #eee;
		height: 148px;
		width: 100%;
		.recommend-item{
			flex:1;
			.recommend-img{
				height: 75px;
				width: 75px;
			}
			.recommend-title{
				margin-top: 7px;
				font-size: 15px;
				color: #000000;
			}
		}
	}
</style>