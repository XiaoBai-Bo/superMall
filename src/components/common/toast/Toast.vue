<template>
	<div class="toast" v-show="isShow">
		<div class="content">{{message}}</div>
	</div>
</template>

<script>
	export default{
		props:{
//			message:String,
//			isShow:{
//				type:Boolean,
//				default:false
//			}
		},
		data(){
			return{
				message:'',
				isShow:false
			}
		},
		methods:{
			show(message="默认消息",duration=1500){    //传入信息和延迟时间两个参数
				this.isShow=true
				this.message=message
				setTimeout(()=>{
					this.isShow=false
					this.message=''
				},duration)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.toast{
		position: absolute;
	    top: 50%;
	    left: 50%;
	    z-index: 100;
	    padding: 6px 15px;
	    background-color: #000;
	    border-radius: 16px;
	    color: #fff;
	    opacity: 0.75;
	    transform: translate(-50%, 50%);
	}

</style>