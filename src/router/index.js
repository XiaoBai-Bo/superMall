import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home/home.vue'
import category from '../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import profile from '../views/profile/profile.vue'

import detail from '../views/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home,meta:{keepAlive:true}},
    {path:'/category',component:category},
    {path:'/cart',component:cart},
    {path:'/profile',component:profile},
    {path:'/detail/:id',component:detail,meta:{keepAlive:false}}
  ],
	linkActiveClass:'mui-active'   //覆盖默认路由高亮的类，默认的类叫link-activeroute-link-active
})
