<template>
	<div class="detail_goods" v-if="Object.keys(detailInfo).length!==0">
		<div class="info_desc">
			<div class="start">
				<span class="iconfont">&#xe75d;</span>
			</div>
			<div class="desc">{{detailInfo.desc}}</div>
			<div class="end">
				<span class="iconfont">&#xe75e;</span>
			</div>
		</div>
		
		<div class="info_key">
			<div class="key">{{detailInfo.detailImage[0].key}}</div>
		</div>
		
		<div class="info_list">
			<div  class="list" v-for="(item,index) in detailInfo.detailImage[0].list">
				<img :src="item" @load="imgload"/>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				count:0,
				detailImgLength:0
			}
		},
		methods:{
			//判断所有的图片都加载完，在进行回调
			imgload(){
				this.count++
				if(this.count===this.detailImgLength){
					this.$emit('imageLoad')
				}
			}
		},
		watch:{
			detailInfo(){
				this.detailImgLength=this.detailInfo.detailImage[0].list.length
			}
		},
		props:{
			detailInfo:Object
		}
	}
</script>

<style lang="scss" scoped>
	.detail_goods{
		margin: 10px;
		.info_desc{
			.start{
				.iconfont{
					font-size: 30px;
				}
			}
			.desc{
				font-size: 14px;
				color: #000;
			}
			.end{
				text-align: right;
				.iconfont{
					font-size: 30px;
				}	
			}
		}
		.info_key{
			.key{
				color: #000000;
				font-size: 14px;
				margin-bottom: 10px;
			}
		}
		.info_list{
			.list{
				width: 100%;
				img{
					width: 100%;
				}
			}
		}
	}

</style>