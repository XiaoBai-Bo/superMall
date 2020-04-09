import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//引入vue-lazyload 懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {   //内部自定义一个指令v-lazy
	error:require('./dist/loading.gif'),
})

Vue.prototype.$ajax=axios
Vue.prototype.$bus=new Vue()

//引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//全局引入mint-ui
import MintUi  from 'mint-ui'
Vue.use(MintUi)
import { Toast } from 'mint-ui'
Vue.component(Toast.name,Toast)

//引入自定义toast插件
import toast from './components/common/toast'
Vue.use(toast)   //安装toast插件


//全局引入时间过滤器
import './filter/time.js'

//引入vue-preview图片查看器插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import './assets/icon/iconfont.css'
Vue.config.productionTip = false

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
