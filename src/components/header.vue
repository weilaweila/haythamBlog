<template>
	<div class="super">
		<div class="header">
<!-- 			<div class="logoDiv">
				<p>{{count}}, {{isLogin}}</p>
			</div> -->
			<div class="buttomDiv">
				<Button type="success" class="loginButton" >Login</Button>
				<Button type="primary" class="loginButton" >Register</Button>
				<!-- <Button type="primary" class="navigator" @click="navigator">navigater</Button> -->
			</div>
		</div>


	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name: 'Header',
		data:function(){
			return {

			}
		},
		methods:{

		},
	}
</script>

<style scoped>	
	.super{
		width: 100%;
		height: 100%;
	}
	.header{
		position: absolute;
		top: 0px;
		height: 6%;
		/*background-color: rgb(238,238,238);*/
		background-color: #ffff;
		width: 100%;
		/*border: 0.1px solid red;*/
		border-bottom: 0.1px solid #f0f0f0;
		z-index:1;
	}
	.logoDiv{
		position: absolute;
		left: 30px;
		top: 15px;
		width: 50px;
	}
	.buttomDiv{
		height: 100%;
		width: 25%;
		/*font-size: 7px;*/
		float: right;
		/*margin-right: 20px;*/
		/*margin-top: 10px;*/
		/*background-color: red;*/
	}
	.loginButton{
		position: relative;
		top: 22.5%;
		width: 30%;
		height: 55%;
		margin-left: 10%;
		/*size: 10px;*/
	}
</style>
