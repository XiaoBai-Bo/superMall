<template>
	<div class="tarcontrol">
		<div 
			class="tarcontrol-item" 
			v-for="(item,index) in titles" 
			:key="index">
			<span 
				class="tarcontrol-title" 
				:class="{active:index===currentIndex}"
				@click="clickItem(index)">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			clickItem(i){
				this.currentIndex=i	
				this.$emit('clickTab',i)
			}
		},
		props:{
			titles:Array
		}
	}
</script>

<style lang="scss">
	/*定义选中文字的样式*/
	.active{
		color: #FF5777;
		border-bottom: 1px solid #FF5777;
	}
	.tarcontrol{
		display: flex;
		text-align: center;
		padding: 8px 0 5px 0;
		border-top: 1px solid #eee;
		background-color: #fff;
		.tarcontrol-item{
			flex: 1;
			.tarcontrol-title{
				display: inline-block;
				width: 40px;
				padding-bottom: 5px;
			}
		}
		
	}
</style>