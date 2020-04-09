<template>
	<div class="detailSwiper">
		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in topImg" :key="index">
					<img class="slide_img" :src="item" />
				</div>
			</div>
			
			<div class="swiper-pagination"></div>
		</div>
		
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'
	export default{
		data(){
			return{
			}
		},
		watch:{
			topImg(value){
				this.$nextTick(function(){
					new Swiper('.swiper-container',{
						loop:"true",  //
						autoplay: {
							disableOnInteraction: false, //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
						},  //可选选项，自动滑动
//						spaceBetween:10,
						pagination:{   //分页
							el:'.swiper-pagination',
						},  
					})
				})
			}
		},
		props:{
			topImg:Array
		}
	}
</script>

<style lang="scss" scoped>
	.detailSwiper{
		.swiper-container{
			height: 300px;
			.swiper-wrapper{
				.swiper-slide{
					.slide_img{
						width: 100%;
					}
				}
			}
		}
	}

</style>