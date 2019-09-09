<template>
	<div class="super">
		Article: {{article}}
		<Button type="primary" @click="logout">logout</Button>
	</div>
</template>

<script>
	import axios from 'axios'
	import store from '../store'

	export default{
		name: 'articleDetail',
		data:function(){
			return {
				article:'default',
			}
		},
		methods:{
			logout:function(){
				this.$router.push("/")
				// store.dispatch("userLogin",false)
				// localStorage.removeItem("Flag","isLogin")
				localStorage.removeItem("Authorization","")
				let token = localStorage.getItem('Authorization');
				console.log(token)
			}
		},
		created:function(){
			var that = this
			// var temp = ''

			axios.get('http://127.0.0.1:5000/article')
				.then(function(res){
					that.article = res.data
				})
				.catch(function(error){

				})
			// this.article = temp
		}
	}
</script>

<style scoped>	
	.super{
		width: 100%;
		height: 100%;
	}
</style>
