<template>
	<div class="super">
		1111111222
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

			}
		},
		methods:{
			logout:function(){
				this.$router.push("/")
				store.dispatch("userLogin",false)
				localStorage.removeItem("Flag","isLogin")
			}
		},
	}
</script>

<style scoped>	
	.super{
		width: 100%;
		height: 100%;
	}
</style>
