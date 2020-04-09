<!--slot组件分发，封装头部导航栏-->
<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.nav-bar{
		display: flex;
		/*height: 44px;*/
		line-height: 44px;
		background: #FF5777;
		text-align: center;
		font-size: 20px;
		color: #fff;
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
		/*position: fixed;
	    top: 0px;
	    right: 0;
	    z-index: 11;
	    left: 0;*/
		.left{
			width: 60px;
		}
		.center{
			flex: 1;
		}
		.right{
			width: 60px;
		}
	}
	
</style>