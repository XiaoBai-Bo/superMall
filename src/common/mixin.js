//mixin混入
import backtop from '../components/common/backTop/backTop.vue'

//混入回到顶部的按钮，使其能在不同的组件可以使用，达到组件服复用的目的
export const backTopMinxin={
	data(){
		return{
			isShow:false
		}
	},
	methods:{
		backTop(){    //点击按钮回到顶部
			const backTp=this.$refs.bscroll
			backTp.backtop(0,0,500)    //延迟500ms，哟动画效果
		},
		listenIsShow(position){
			this.isShow=(-position.y) >= 1300
		}
	},
	components:{
		backtop
	}

}