<template>
	<div class="ParamsInfo" v-if="Object.keys(paramsInfo).length!==0">
		
		<table class="table_size">
			<tr v-for="(item,index) in paramsInfo.sizes[0]" :key="index">
				<td v-for="items in item">{{items}}</td>
			</tr>
		</table>
		
		<table class="table_rule">
			<tr v-for="(item,index) in paramsInfo.infos" :key="index">
				<td v-for="items in item">{{items}}</td>
			</tr>
		</table>
		
		<div class="paramsimg" v-if="paramsInfo.image">
			<img :src="paramsInfo.image" />
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			paramsInfo:Object
		}
	}
</script>

<style lang="scss" scoped>
	.ParamsInfo{
		/*margin: 10px;*/
		.table_size{
			padding: 0;
			width: 100%;
			tr{
				height: 40px;
				border-bottom: 1px solid #ccc;
				td{
					color: #000;
					font-size:15px;
					text-align: center;
				}
				td:nth-child(1){
					width: 20%;
				}
			}
		}
		.table_rule{
			width:100%;
			tr{
				height:40px;
				border-bottom: 1px solid #ccc;
				text-align: center;
				td{
					color: #000;
					font-size: 15px;
				}
				td:nth-child(1){
					width: 20%;
				}
				td:nth-child(2){
					color: #ff8198;
					text-align: left;
					padding-left: 16px;
				}
			}
		}
		.paramsimg{
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>