<template>
	<div class="detailNavbar">
		<navbar class="detail_navbar">
			<div slot="left">
				<span class="mui-icon mui-icon-arrowleft" @click="leftClick"></span>
			</div>
			<div slot="center" class="detail_navbar_center">
				<span 
					v-for="(item,index) in title" 
					:class="isActive===index?'select':''" 
					@click="itemIndex(index)">{{item}}</span>
			</div>
		</navbar>
	</div>
</template>

<script>
	import navbar  from '../../../components/common/navbar/NavBar.vue'
	export default{
		data(){
			return{
				title:['商品','参数','评论','推荐'],
				isActive:0
			}
		},
		methods:{
			itemIndex(index){
				this.isActive=index
				this.$emit('titleClick',index)
			},
			leftClick(){
				this.$router.back(-1)
			}
		},
		components:{
			navbar
		}
	}
</script>

<style lang="scss" scoped>
	.detailNavbar{
		.detail_navbar{
			background: #fff;
			color: #000;
			.detail_navbar_center{
				display: flex;
				span{
					font-size: 14px;
					color: #000;
					flex: 1;
				}
			}
		}
	}
	.select{
		color: red !important;
	}
</style>