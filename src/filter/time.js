import Vue from 'vue'
//导入时间过滤器插件date-fns
import format from 'date-fns/format'

Vue.filter('dateFormat',function(value){
	return format(value,'yyyy-MM-dd HH:mm:ss')
})