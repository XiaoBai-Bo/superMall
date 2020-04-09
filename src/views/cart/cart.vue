<template>
	<div class="cart">
		<!--导航-->
		<navbar><div slot="center">购物车({{cartLength}})</div></navbar>
		
		<!--购物车商品列表展示-->
		<Scroll class="cart_scroll" ref="carScroll">
			<carList :listCar="listCar"></carList>
		</Scroll>
		
		<!--底部汇总-->
		<carBottomBar></carBottomBar>
	</div>
</template>

<script>
	import { mapState,mapGetters } from 'vuex'
	import navbar from '../../components/common/navbar/NavBar.vue'
	import carList from './cartComponents/carList.vue'
	import carBottomBar from './cartComponents/carBottomBar.vue'
	
	import Scroll from '../../components/common/scroll/Scroll.vue'
	export default {
		data(){
			return{
				car:null
			}
		},
		mounted(){
			this.$refs.carScroll.refresh()
		},
		computed:{
			...mapGetters(['cartLength']),
			...mapState(['listCar']),
		},
		components:{
			navbar,
			carList,
			Scroll,
			carBottomBar
		}
	}
</script>

<style lang="scss" scoped>
	.cart{
		height: 100vh;
		.cart_scroll{
			height: calc(100% - 94px - 35px);
			overflow: hidden;
		}
	}
</style>