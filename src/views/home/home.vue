<template>
	<div class="home">
		<!--导航栏-->
		<navbar><div slot="center">购物街</div></navbar>
		
		<tarControl class="tab-control fixed" 
						:titles="titles" 
						@clickTab="clickTab"
						ref="tarcontrol1"
						v-show="isTabFixed"></tarControl>
		
		<Scroll class="home-scroll"
				ref="bscroll"
				:probeType="3"
				:pullUpLoad="true"
				@scroll="backTopShow"
				@pullingUp="loadMore">
				<!--轮播图部分-->
				<homeSwiper :banners="banners" @swiperimgLoad="swiperimgLoad"></homeSwiper>
				<!--评价部分，活动部分-->
				<homeRecommend :recommends="recommends"></homeRecommend>
				
				<featureView></featureView>
				<!--标题切换部分-->
				<tarControl class="tab-control" 
							:titles="titles" 
							@clickTab="clickTab"
							ref="tarcontrol2"></tarControl>
				<!--展示的衣服商品-->
				<goodsList :goods="goods[currentType].list"></goodsList>
		</Scroll>
		
		<backtop @click.native="backTop" v-if="isShow"></backtop>
		<!--<div class="uptop"><span class="mui-icon-extra mui-icon-extra-top"></span></div>-->
			
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/NavBar.vue'
	import homeSwiper from './childCompsSwiper/homeSwiper.vue'
	import homeRecommend from './childCompsSwiper/homeRecommend.vue'
	import featureView from './childCompsSwiper/featureView.vue'
	import tarControl from '../../components/common/tarControl/TarControl.vue'
	import goodsList from '../../components/content/goods/GoodsList.vue'
//	import backtop from '../../components/common/backtop/backTop.vue'
	
	import Scroll from '../../components/common/scroll/Scroll.vue'
	
	import {backTopMinxin} from '../../common/mixin.js'
	import {reqGetHomeSwiperData,reqGetHomeGoods} from '../../network'
	export default {
		data(){
			return{
				banners:[],
				recommends:[],
				titles:['流行','新款','精选'],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType:'pop',   //显示当前浏览的款式
//				isShow:false,
				offsetTop:null,
				isTabFixed:false
			}
		},
		created(){
			//请求轮播数据
			this.getHomeSwiperData()
			//请求商品数据
			this.getHomeGoodsData('pop')
			this.getHomeGoodsData('new')
			this.getHomeGoodsData('sell')
			
//			this.reqGetHomeData()
		},
		mixins:[backTopMinxin],
		destroyed(){
			console.log("离开了home，我被销毁了")
		},
		mounted(){
			//监听item中图片加载完成
			const refresh=this.debounce(this.$refs.bscroll.refresh,300)
			this.$bus.$on('imageLoad',()=>{
				refresh()
			})
		},
		methods:{
			//频繁的刷新，防抖动函数封装
			debounce(func,delay){
				let timer=null;
				return function(...args){
					if(timer) clearTimeout(timer)
					timer=setTimeout(()=>{
						func.apply(this,args)
					},delay)
				}
			},
			//网络请求方法
			getHomeSwiperData(){
				//当实例创建完成，马上进行数据的请求
				reqGetHomeSwiperData().then((res)=>{
					this.banners=res.data.banner.list
					this.recommends=res.data.recommend.list
//					console.log('1homeSwiperData')
				})
			},
			getHomeGoodsData(type){
				//请求首页商品列表
				const page=this.goods[type].page+1
				reqGetHomeGoods(type,page).then((res)=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page+=1
//					console.log('1homeGoodsData')
				})
			},
			//下拉加载请求函数，获取更多
			loadMore(){
				this.getHomeGoodsData(this.currentType)
				this.$refs.bscroll.finishPullUp() //完成一次上拉加载
			},
			//页面监听方法
			clickTab(i){
				switch (i){
					case 0:
						this.currentType='pop'
						break;
					case 1:
						this.currentType='new'
						break;
					case 2:
						this.currentType='sell'
						break;
					default:
						break;
				}
				this.$refs.tarcontrol1.currentIndex=i
				this.$refs.tarcontrol2.currentIndex=i
			},
			backTopShow(position){   
				//判断backTop是否显示，滚动回顶部按钮的显示和隐藏
//				this.isShow=(-position.y) >= 1300
				this.listenIsShow(position)
				//判断是否吸顶
				this.isTabFixed=(-position.y+41)>=this.offsetTop
			},
			swiperimgLoad(){
				//获取tarControl的offsetTop
				this.offsetTop=this.$refs.tarcontrol2.$el.offsetTop
				console.log(this.$refs.tarcontrol2.$el.offsetTop)
			},
			/*reqGetHomeData(){
				this.$ajax.get('http://123.207.32.32:8000/home/multidata').then((res)=>{
					console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
			}*/
		},
		components:{
			navbar,
			homeSwiper,
			homeRecommend,
			featureView,
			tarControl,
			goodsList,
			Scroll
//			backtop
		}
	}
</script>

<style lang="scss">
	/*.tab-control{
		position: sticky;
		top: 44px;
	}*/
	.fixed{
	    position: absolute;
	    z-index: 20;
	    right: 0;
	    left: 0;
		/*行不通*/
	}
	.home{
	    position: relative;
   		height: 100vh;
		.home-nav{
			/*padding-top:44px;*/
			img{
				height: 200px;
				width:100%;
			}
			.swiper-container{
				.swiper-wrapper{
					.swiper-slide{
						img{
							height: 200px;
							width:100%;
						}
					}
				}
			}
		}
		.home-scroll{
			height: calc(100% - 94px);
			/*margin-top: 44px;*/
			overflow: hidden;
		}
		/*.home-scroll{
			position: absolute;
			top: 0;
			bottom: 93px;
			left: 0;
			right: 0;
		}*/
	}
</style>