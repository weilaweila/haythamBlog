<template>
	<div class="super">
		<div class="header">
			<div class="logoDiv">
				<p>{{tempLoginStatus}}</p>
			</div>
			<div class="buttomDiv">
				<Button type="primary" class="loginButton" @click="showLoginModal">Login</Button>
			</div>
		</div>
		<Modal v-model="loginModalStatus" @on-ok="loginEvent">
			<Input v-model="username" placeholder="Username" style="width: 300px" />
			<Input v-model="password" placeholder="Password" style="width: 300px" />
		</Modal>
	</div>
</template>

<script>
	export default{
		name: 'home',
		data:function(){
			return {
				loginModalStatus:false,
				username:'',
				password:'',
				tempLoginStatus:'No Login'
			}
		},
		methods:{
			showLoginModal:function(){
				this.loginModalStatus = true;
			},
			loginEvent:function(){
				console.log(this.username);
				console.log(this.password);
			}
		},
	}
</script>

<style scoped>	
	.super {
		width: 100%;
		height: 100%;
		/*background-color: blue;*/
	}
	.header{
		position: absolute;
		top: 0px;
		height: 3.5%;
		background-color: rgb(238,238,238);
		width: 100%;
	}
	.loginButton{
		
	}
	.logoDiv{
		position: absolute;
		left: 20px;
		top: 10px;
		width: 50px;
	}
	.buttomDiv{
		float: right;
		margin-right: 20px;
		margin-top: 6px;
		width: 3%;
	}
</style>