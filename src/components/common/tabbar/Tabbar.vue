<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to='/home'>
				<span class="mui-icon  mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/category">
				<span class="mui-icon mui-icon mui-icon-list"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/cart">
				<span class="mui-icon  mui-icon-extra mui-icon-extra-express"><span class="mui-badge">{{totalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/profile">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default{
		computed:{
			totalCount(){
				return  this.$store.state.listCar.reduce((preValue,item)=>{
					return preValue+item.count
				},0)
			}	
		}
	}
</script>

<style lang="scss">
	/*改类名，修bug ，解决tabbar无法正常滑动的问题*/
	.mui-bar .mui-tab-item-llb.mui-active {
	    color: #ff5777;
	}
	.mui-bar .mui-tab-item-llb {
	    display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	     .mui-icon {
		    top: 3px;
		    width: 24px;
		    height: 24px;
		    padding-top: 0;
		    padding-bottom: 0;
			   
		}
		 .mui-icon~.mui-tab-label {
		    font-size: 11px;
		    display: block;
		    overflow: hidden;
		    text-overflow: ellipsis;
		}
	}
</style>