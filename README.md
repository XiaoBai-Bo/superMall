# 项目描述
	本项目是基于vue.js做一款购物app,使用vue-cli搭建项目,项目使用vue-router,vue-axios,vuex,
	及一系列的前端框架，和有关移动App的框架。*项目使用cnpm i下载相关依赖*。
	注意：`项目组件化，模块化的开发思想的重要性`
## 使用的框架
	axios,swiper,vue-lazyload,better-scroll
	mui,mint-ui,
	时间格式化moment	 
## 项目重点	
	`normaliza.css`
		重置样式文件
	`配置路径别名`
		创建vue.config.js	
		module.exports={
		  configureWebpack:{
			resolve:{
			  alias:{
				assets:'@/assets'
			  }
			}
		  }
		}
    `vue-lazyload图片懒加载的使用`
		Vue.use(VueLazyload,{
			error:'',  //加载失败显示的图片路径
			loading:'' //加载成功显示的图片路径
		})
    `css属性 position:sticky` 
                 要配置top  作用可以实现滚动导航栏停留效果	
    `$bus事件总线的使用,及使用场景`             
## 遇到的问题  坑、、
	1)引入sass，要指定版本，cnpm i sass-loader@7.3.1 -S
		原因：当前sass版本过高，webpack编译时报错
	2)vue对promise的引用失败
	        原因：前言babel只能转换ES6语法，但是遇到ES6新增的api就无能为力，比如promise，
	      	  cnpm i babel-runtime -S 负责报错
## 要点
	在自定义组件上绑定原生事件要添加.native修饰  	比如@click.native="backtop"

#  笔记
	oneDay
	1.引入normaliza.css重置css样式
	2.配置路径别名(可做可不做)	
	3.引入mui,完成tabbar的制作,设置覆盖路由高亮的类,修改linkActiveClass:''
	4.进行项目模块的划分tabbar，路由映射关系，to="/home"，完成首页，分类，购物车，我的，四个页面的路由
	5.在index.html中添加<link rel="icon" href="./static/favicon.ico">修改项目图标
	6.导航栏的封装，slot插槽的分发
	7.使用axios+promise封装ajax请求，或者直接使用axios发生请求
		this.$ajax.get('url').then((res)=>{}).catch(()=>{})
		this.$ajax.post('url').then((res)=>{}).catch(()=>{})
	8.封装swiper滑块，使用props进行父子组件间的传值	
	9.要展示数据的请求，	
	10.父子组件传值问题
		父组件向子组件传值，父组件在标签中使用:foods='foods' 子组件使用props进行接收
		子组件向父组件传值，子组件使用this.$emit('方法/tabClick',参数),父组件使用@tabclick='tabClick'接收
	11.微元素brfore，after要使用双冒号::
		作用：在内容前后插入额外的元素但它是一个虚假的dom，不会影响dom节点
		注意：微元素必须设置content属性，不然无效
		常用案例：分隔符，添加前置图标，三角形实现
	12.better-scroll 的使用，使移动端更加的顺滑   (iscroll不再更新，不建议使用)
	13.scroll的封装及使用
	14.css3属性calc()
		可视窗口：Viewport，也就是浏览器  vm宽度, vh高度
	    calc()的使用    height:calc(%100 - 50px) ,表达式中的+-*/要留有空格
	15.使用better-scroll进行实时监听，可实现某个组件的显示和隐藏
	16.使用better-scroll，解决滚动区域的bug
		>产生原因，better-scroll在决定有多少区域可以滚动时，根据scrollerHeight属性决定
		>图片异步加载，刚开始计算的scrollerHeight是没有将图片计算在内
		>后来图片加载进来之后，有了新的高度但是scrollerHeight属性没有更新
		>>>解决问题：
			监听每一张图片是否加载完成，是要有一张图片加载完成执行一次refresh()
			***img.load=function(){}
			***vue中  @load="imgLoad"
	17.bus事件总线
		初始化$bus  main.js中  Vue.prototype.$bus=new Vue()
		触发：this.$bus.$emit('发射事件名')
		监听：this.$bus.$on('发射事件名')
	second Day
	1.完成TarControl的吸顶效果
		(1    获取到offsetTop的值,必须知道滚动到多少时有吸顶效果
		        如果直接在mounted中获取，此值是不正确的，因为轮播图中的图片还没加载。
		        要监听轮播图中图片是否加载成功，从而计算正确的offsetTop值
		(2    解决tarControl吸顶效果的bug
			由于tarControl组件在better-scroll中使用，设置tarControl属性无效
			解决办法：    在整个滚动外在放一个tarControl组件，当滑动到指定位置，使用v-show显示隐藏
					 第二个bug，两个tarControl的currentIndex要保持同步
	third day
	1.使用<keep-alive></keep-alive>标签实现路由缓存对象	(没有问题)		
	2.路由的跳转，this.$router.push()  / this.$router.replace()	
	3.点击不同的item，获取不同item对应的id，从而发送对应item的请求，获取商品所有的详细信息。 	
	4.重点：使用<keep-alive>产生的问题,如何实现部分组件缓存
		问题:实现了组件的缓存，但是下次进入组件不会执行created，destroyed生命周期。
		解决:在router定义的文件里面在想要缓存的页面多加上：meta:{keepAlive:true},不想缓存就是：meta:{keepAlive:false}
			只有为true是会被keep-alive识别然后缓存
			在<router-view v-if=“$route.meta.keepAlive”/>中使用v-if
	5.理解面向对象的开发思想。	
	6.判断一个对象是否为空，  Object.keys(对象).length===0	     
	four Day
	1.mint-ui的使用，美化页面展示效果。
	2.使用时间格式化插件date-fns，自定义过滤器，使用管道符格式化时间
	3.mixin 混入的使用,使用注意问题。
		可合并生命周期，不可混入某个方法里面的逻辑代码，会产生代码的覆盖
		使用:mixins:[]
	4.联动效果的实现,如何获取组件的最新offsetTop值，
		问题:大多数是因为图片还没加载完，所得高度不是最新的高度
		实现1:点击标题，滚动到对应的主体
		实现2:内容滚动，显示正确的标题
	5.底部工具栏，加入购物车功能 	
	6.对象模型的意义，例如购物车商品的选中与不选中，要使用对象模型，不能使用属性
	7. toFixed(2)保留两位小数
	8.购物车全选按钮的状态
		分析：只有当所有商品为选中状态，全选按钮才选中
	9.Promise mapActions的映射关系mapState mapGetters
	10.Toast的封装	
	
## 重要
	学会使用插件式封装组件的方式
	是的飒飒放松放松