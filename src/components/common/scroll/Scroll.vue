<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default{
		data(){
			return{
				scroll:null,
				message:'你拿到scroll对象了'
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad   //开启上拉加载，默认false
			})
			//监听滚动位置
			this.scroll.on('scroll',(position)=>{
				this.$emit('scroll',position)
			})
			//监听上拉加载更多
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
				console.log('完成一次上拉加载')
			})
		},
		methods:{
			backtop(x,y,time=500){    //定义回到顶部的方法
				this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){           //定义上拉加载函数
				this.scroll.finishPullUp()
			},
			refresh(){	//定义刷新函数
//				console.log('----')
				this.scroll&&this.scroll.refresh()
			},
			scrollTo(x,y,time=500){
				this.scroll&&this.scroll.scrollTo(x,y,time)
			},
		}
	}
</script>

<style lang="scss">
	
</style>