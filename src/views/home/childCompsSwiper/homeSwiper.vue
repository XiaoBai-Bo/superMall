<template>
	<div class="home-nav">
		<div class="swiper-container" v-if="banners.length">
		  <div class="swiper-wrapper" >
		    <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
	    		<img :src="item.image" @load="imgLoad"/>
		    </div>
		  </div>
		  <div class="swiper-pagination"></div>
		</div>
		<img v-lazy v-else/>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'
	export default{
		data(){
			return{
				isLoad:false
			}
		},
		props:{
			banners:Array
		},
		methods:{
			imgLoad(){
				if(!this.isLoad){
					this.$emit('swiperimgLoad')
					this.isLoad=true					
				}
			}
		},
		watch:{    //监听banner的值，当改变 在创建swiper实例
			banners(value){
				this.$nextTick(function(){
				new Swiper('.swiper-container',{
					loop:"true",  //
					autoplay: {
						 disableOnInteraction: false,
					},//可选选项，自动滑动
					spaceBetween:10,
					pagination:{   //分页
						el:'.swiper-pagination',
					},  
				})
				console.log('2homeSwiperVue')
				})
			}
		},
	}
</script>

<style>
</style>