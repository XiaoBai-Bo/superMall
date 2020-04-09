<template>
	<div>
		<navbar><div slot="center">分类</div></navbar>
		<h2>分类页面</h2>
		<span @click="item">点我</span>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/NavBar.vue'
	
	import { Toast } from 'mint-ui'
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			item(){
				Toast({
					 message: '提示',
					  position: 'center',
					  duration: 2000
				});
			}
		},
		components:{
			navbar
		},
	}
</script>

<style>
</style>