<template>
	<div class="goodsList">
		<div class="goodsList-item" 
			 v-for="(item,index) in goods" 
			 :key="index"
			 @click="itemClick(item.iid)">
			<div class="goodsList-img">
				<!--<img src="../../../assets/image/common/placeholder.png" />-->
				<img :src="showImg(item)" @load="imgLoad(item.iid)"/>
			</div>
			<div class="goodsList-title">
				<p class="title">{{item.title}}</p>
				<span class="price">￥{{item.price}}</span>
				<span class="cfav mui-icon-extra mui-icon-extra-heart">{{item.cfav}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			imgLoad(id){
				if(this.$route.path==='/home'){
					console.log('我是home发送的事件')
					this.$bus.$emit('imageLoad')
				}else if(this.$route.path===('/detail/'+id)){
					console.log('我是detail发送的事件')
				}
			},
			itemClick(id){
				this.$router.push('/detail/'+id)
//				console.log(id)
			},
			showImg(item){
				return item.image || item.show.img
			}
		},
//		computed:{
//			showImg(item){
//				console.log(item)
//			}
//		},
		props:{
			goods:Array
		},
	}
</script>

<style lang="scss">
	.goodsList{
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    width: 100%;
	    justify-content: space-around;
        padding: 0 4px 0 4px;
        padding-top: 5px;
		.goodsList-item{
			width: 50%;
			text-align:center;
			.goodsList-img{
				img{
					width: 95%;
					height: 250px;
				    border-radius: 5%;
				}
			}
			.goodsList-title{
				.title{
				    overflow: hidden;
				    margin: 0px;
				    white-space: nowrap;
				    text-overflow: ellipsis;
				}
				.price{
					color: red;
				}
				.cfav{
					font-size: 15px;
				}
			}
		}
	}
</style>