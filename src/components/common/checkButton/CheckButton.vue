<template>
	<div class="check_buttton" :class="{checked:isChecked}">
		<img  class="iconfont" src="../../../assets/image/cart/tick.svg">
		<!--<span class="iconfont"v-if="!isCheck">&#xe630;</span>
		<span class="iconfont check" v-if="isCheck">&#xe639;</span>-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
			
		},
		props:{
			isChecked:{
				Boolean,
				default:false
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.check_buttton{
		border-radius: 50%;
		height: 20px;
		width: 20px;
		background-color: #fff;
		border:2px solid #ccc;
		img{
			
		}
	}
	.checked{
		border:2px solid red;
		background-color: red;
	}
</style>