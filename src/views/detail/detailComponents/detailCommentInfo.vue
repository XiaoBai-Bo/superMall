<template>
	<div class="commentInfo" v-if="Object.keys(commont).length!==0">
		<div class="comment_title">
			<div class="span">用户评价</div>
			<div class="span" @click="moreComment">更多评价
				<span class="iconfont">&#xe632;</span>
			</div>
		</div>
		
		<div class="comment_body">
			<div class="comment_name">
				<img :src="commont.list[0].user.avatar" />
				<span>{{commont.list[0].user.uname}}</span>
			</div>
			<div class="comment_content">{{commont.list[0].content}}</div>
			<div class="comment_info">
				<span>{{commont.list[0].created|dateFormat}}</span>
				<span>{{commont.list[0].style}}</span>
			</div>
			<div class="thumbs" v-if="commont.list[0].images">
				<img class="img" v-for="(item,index) in commont.list[0].images" :src="item" :key="index"/>
				<!--<vue-preview :slides="list" @close="handleClose"></vue-preview>-->
			</div>
			
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	import 'mint-ui/lib/style.css'
	export default{
		data(){
			return{
				list:[]
			}
		},
		watch:{
			commont(value){
//				console.log(11111)
				if(this.commont.list[0].images){
					this.commont.list[0].images.forEach((item)=>{
						this.list.push({
							w:600,
							h:400,
							msrc:item,
							src:item
						})
					})
				}
			}
		},
		methods:{
			moreComment(){
				Toast({
				  message: '更多评论稍后展示',
				  position: 'center',
				  duration: 1500
				});
			},
			handleClose () {
		        console.log('close event')
		     }
		},
		props:{
			commont:Object
		}
	}
</script>

<style lang="scss">
	.commentInfo{
		border-bottom: 4px solid #ccc;
		padding: 10px;
		border-top: 4px solid #cccccc91;
		.comment_title{
			display:flex;
			justify-content: space-between;
			margin-bottom:10px;
			border-bottom: 1px solid #ccc;
			height: 30px;
			.span{
				color: #000;
				font-size: 13px;
			    margin: 0 10px;
			}
		}
		.comment_body{
			.comment_name{
				height: 40px;
			    line-height: 40px;
			    display: flex;
			    color: #000;
				img{
					width: 40px;
					margin-right: 10px;
				}
			}
			.comment_content{
				margin: 10px 0 10px 0;
				font-size: 14px;
			}
			.comment_info{
				font-size: 14px;
				margin-bottom: 6px;
			}
			.thumbs{
				height: 60px;
				width: 50px;
				display: flex;
				.img{
					width: 100%;
					height: 100%;
					margin-right: 5px;
				}
			}
		}
	}
</style>