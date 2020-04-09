import Toast from './Toast.vue'
import Vue from 'vue'
const obj={}

obj.install=function(){  //还可以把vue传过来
	
//	document.body.appendChild(Toast.$el)
//  此方法报错：Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
//  不是一个节点类型，不能添加一个节点
//  console.log(Toast.$el)   undefined

	//1.创建一个组件构造器
	const toastContrustor = Vue.extend(Toast)
	//2.new 的方式，根据组件构造器，可以创建出来一个组件对象
	const toast = new toastContrustor()
	//3.将组件对象，手动挂载到某一个元素上
	toast.$mount(document.createElement('div'))
	//4.toast.$el对应的就是div
	document.body.appendChild(toast.$el)
	
	Vue.prototype.$toast=toast
	
	console.log('执行了obj的install函数')
}

export default obj
