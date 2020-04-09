<template>
  <div id="app">
    <tabbar/>
    
    <!--缓存想要缓存的页面，实现后退不刷新-->
    <!--加上v-if的判断，可以自定义想要缓存的组件，自定义在router里面-->
    <keep-alive exclude="Detail">
	    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    	<router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
	import tabbar from './components/common/tabbar/Tabbar.vue'
	export default {
	  name: 'App',
	  components:{
	  	tabbar,
	  }
	}
</script>

<style>
	@import  'assets/css/base.css'
</style>
