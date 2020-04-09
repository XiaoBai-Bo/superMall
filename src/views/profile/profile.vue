<template>
	<div>
		<navbar>
			<div slot="center">我的中心
				<span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
			</div>
		</navbar>
		<h2>我的个人页面</h2>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/NavBar.vue'
	export default {
		data(){
			return{
				
			}
		},
		components:{
			navbar
		}
	}
</script>

<style>
</style>