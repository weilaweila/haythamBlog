<template>
	<div class="super">
		<Header></Header>
		<div class="content">
			<div class="title">{{title}}</div>
			<div class="titleContent">{{content}}</div>
		</div>
		<!-- <Button type="primary" @click="logout">logout</Button> -->
	</div>
</template>

<script>
	import axios from 'axios'
	import store from '../store'
	import Header from './header.vue'

	export default{
		name: 'postDetail',
		data:function(){
			return {
				post:'default',
				title:'',
				content:'',
			}
		},
		props:{
			// title:String,
			// content:String,
		},
		components:{
			Header:Header,
		},
		methods:{
			logout:function(){
				this.$router.push("/")
				// store.dispatch("userLogin",false)
				// localStorage.removeItem("Flag","isLogin")
				localStorage.removeItem("Authorization","")
				let token = localStorage.getItem('Authorization');
				console.log(token)
			},

		},
		created:function(){
			var _this = this
			console.log("here is post detail: ",this.$route.params.id)
			// var temp = ''

			axios.get('http://127.0.0.1:5000/getpost',{
				params:{
					id: _this.$route.params.id
				}
			})
			.then(function(res){
				// that.post = res.data
				console.log(res.data)
				_this.title = res.data.title
				_this.content = res.data.content
			})
			.catch(function(error){

			})
			// this.post = temp
		}
	}
</script>

<style scoped>	
	* {
		border: 0.05px solid rgb(200,200,200);
	}
	.super{
		width: 100%;
		height: 100%;
	}
	.content{
		background-color: rgb(250,250,250);
		width: 44%;
		height: 94%;
		position: absolute;
		left: 28%;
		top: 6%;
		/*border: 0.05px solid rgb(200,200,200);*/
		/*padding-top: 20px;*/
		/*padding-left: 10%;*/
	}
	.title{
		/*background-color: red;*/
		width: 100%;
		height: 5.5%;
		font-size: 20px;
		padding-left: 20px;
		padding-top: 5px;
		text-align: center;
	}
	.titleContent{
		/*background-color: blue;*/
		/*top: 100px;*/
		position: absolute;
		width: 100%;
		height: 94.5%;
		top:5.5%;
		padding: 10px;
	}
</style>
