<template>
	<div class="detail">
		<!--导航栏-->
		<detailnavbar class="detail_navbar" @titleClick="titleClick" ref="navbar"></detailnavbar>
		
		<Scroll 
			class="detail_scroll" 
			ref="bscroll"
			:probeType="3"
			@scroll="scrollposition">
			<!--详情页轮播-->
			<detailSwiper :topImg="topImg"></detailSwiper>
			<!--详情页基本信息展示-->
			<detailBaseInfo :goods="goods"></detailBaseInfo>
			<!--店铺信息展示-->
			<detailShopInfo :shops="shops"></detailShopInfo>
			<!--商品详细信息展示-->
			<detailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
			<!--商品参数展示-->
			<detailParmasInfo :paramsInfo="paramsInfo" ref="paramsTop"></detailParmasInfo>
			<!--商品评论展示-->
			<detailCommentInfo :commont="commont" ref="commentTop"></detailCommentInfo>
			<!--推荐商品信息展示-->
			<GoodsList :goods="recommends" ref="listTop"></GoodsList>
		</Scroll>	
		
		<!--底部导航栏-->
		<detailBottomTarbar @addCar="addCar"></detailBottomTarbar>
		
		<backtop @click.native="backTop" v-if="isShow"></backtop>
		
	</div>
</template>

<script>
	import detailnavbar from './detailComponents/detailNavbar.vue'
	import detailSwiper from './detailComponents/detailSwiper.vue'
	import detailBaseInfo from './detailComponents/detailBaseInfo.vue'
	import detailShopInfo from './detailComponents/detailShopInfo.vue'
	import detailGoodsInfo from './detailComponents/detailGoodsInfo.vue'
	import detailParmasInfo from './detailComponents/detailParamsInfo.vue'
	import detailCommentInfo from './detailComponents/detailCommentInfo.vue'
	import detailBottomTarbar from './detailComponents/detailBottomTarbar.vue'
	
	import {Goods,shops,GoodsParmas} from '../../network/detail.js'
	import {reqGetDetail,reqGetRecommend} from '../../network'
	
	import {backTopMinxin} from '../../common/mixin.js'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	
	
	import {Toast} from 'Mint-ui'
	export default{
		data(){
			return{
				iid:null,   	//存储对应id编号
				topImg:[],   	//顶部轮播图片数据
				goods:{},   	//保存需要的数据
				shops:{},     	//店铺信息对象 
				detailInfo:{}, 	//商品详细信息
				paramsInfo:{},  //参数
				commont:{},     //获取商品评论信息
				recommends:[],  //获取推荐信息
				TopYs:[],        //保存顶部topY值
				Index:0,
			}
		},
		mixins:[backTopMinxin],
		created(){
			//1.保存传入的iid
			this.iid=this.$route.params.id
			//2.根据传入的iid请求详情页数据信息
//			console.log(this.iid)
			reqGetDetail(this.iid).then((res)=>{
				//获取顶部轮播数据
				const data=res.result
				//获取顶部img信息
				this.topImg=data.itemInfo.topImages
				//获取商品信息
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				//获取店铺信息
				this.shops=new shops(data.shopInfo)
				//商品详细信息
				this.detailInfo=data.detailInfo
				//获取参数
				this.paramsInfo=new GoodsParmas(data.itemParams.info,data.itemParams.rule)
				//获取商品评论信息
				this.commont=data.rate
//				console.log("我是详情数据")
//				console.log(res)
			}).catch((err)=>{
				console.log(err)
			})
			
			//3.获取推荐数据
			reqGetRecommend().then((res)=>{
				this.recommends=res.data.list
//				console.log("我是推荐数据")
//				console.log(res)
			}).catch((err)=>{
				console.log(err)
			})
		},
		methods:{
			imageLoad(){
				this.$refs.bscroll.refresh()
				this.TopYs=[]
				this.TopYs.push(0)
				this.TopYs.push(this.$refs.paramsTop.$el.offsetTop)
				this.TopYs.push(this.$refs.commentTop.$el.offsetTop)
				this.TopYs.push(this.$refs.listTop.$el.offsetTop)
//				console.log(this.TopYs)
			},
			titleClick(index){
//				console.log(index)
				this.$refs.bscroll.scrollTo(0,-this.TopYs[index]+44,600)
			},
			scrollposition(position){
				this.listenIsShow(position)
				const positionY=-position.y+44
				const length=this.TopYs.length
				for(var i  in this.TopYs){
//					console.log(typeof(i))  //i是string类型，所以不能使用i+1，所以要进行数据类型转换
					const j=Number(i)
					if(this.Index!==j && ( (j<length-1&&this.TopYs[j+1]>=positionY&&positionY>=this.TopYs[j]) || (j===length-1&&positionY>=this.TopYs[j]) ) ){
						this.Index=j
						this.$refs.navbar.isActive=this.Index
					}
				}
			},
			addCar(){
				//1.获取需要在购物车中展示的信息
//				console.log('我监听到了你要把我假如购物车')
				const product={}
				product.img=this.topImg[0]
				product.title=this.goods.title
				product.desc=this.goods.desc
				product.realPrice=this.goods.realProce
				product.iid=this.iid
				product.count=1
//				console.log(produce)
				//2.将商品添加到购物车中
				//此处返回promise实例
				this.$store.dispatch('addCart',product).then((res)=>{ 
//					Toast(res)
					this.$toast.show(res,1500)
				})
			}
		},
		components:{
			detailnavbar,
			detailSwiper,
			detailBaseInfo,
			detailShopInfo,
			Scroll,
			detailGoodsInfo,
			detailParmasInfo,
			detailCommentInfo,
			GoodsList,
			detailBottomTarbar,
		}
	}
</script>

<style lang="scss" scoped>
	.detail{
	    position: relative;
	    z-index: 20;
	    background: #fff;
	    height: 100vh;
	    .detail_navbar{
	    	position: relative;
		    z-index: 30;
	    }
	    .detail_scroll{
	    	height: calc(100% - 100px);
	    	overflow: hidden;
	    }
	}
</style>