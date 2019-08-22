<template>
	<div class="super">
		<div class="header">
			<div class="logoDiv">
				<p>{{count}}, {{isLogin}}</p>
			</div>
			<div class="buttomDiv">
				<Button type="primary" class="loginButton" @click="showLoginModal">Login</Button>
			</div>
		</div>

		<Button type="primary" class="navigator" @click="navigator">Login</Button>
		
		<Modal v-model="loginModalStatus" @on-ok="loginEvent">
			<Input v-model="username" placeholder="Username" style="width: 300px" />
			<Input v-model="password" placeholder="Password" style="width: 300px" />
		</Modal>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapActions,mapState} from 'vuex'
	import store from '../store'

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
		computed:{
			...mapState([
					'count',
					'userLogin',
					'isLogin',
				]),
		},
		created(){
			this.incrementStep();
		},
		methods:{
			...mapActions([
				'incrementStep'
			]),
			showLoginModal:function(){
				this.loginModalStatus = true;
			},
			loginEvent:function(){
				// console.log(this.username);
				// console.log(this.password);

				// axios.get('http://127.0.0.1:5000')
				// 	.then(function(response){
				// 		console.log(response.data)
				// 	})
				// 	.catch(function(error){
				// 		console.log(error)
				// 	})

				axios.post('http://127.0.0.1:5000/login',{
							um:this.username,
							pw:this.password,
						})
					.then(function(response){
						console.log(response.status)
						if(response.status != 200){
							// this.$Message.error(response.data)
						}
						else{
							// this.$message.success(response.data)
							store.dispatch("userLogin",true)
							localStorage.setItem("Flag","isLogin")
						}
					})
					.catch(function(error){
						console.log(error)
					})
					// this.$router.push("article")
			},
			navigator:function(){
				this.$router.push("/article")
			},
		},
	}
</script>

<style scoped>
	.navigator {
		position: absolute;
		top: 70px;
		left: 30px;
		width: 80px;
	}
	.super {
		width: 100%;
		height: 100%;
		/*background-color: blue;*/
	}
	.header{
		position: absolute;
		top: 0px;
		height: 50px;
		background-color: rgb(238,238,238);
		width: 100%;
	}
	.logoDiv{
		position: absolute;
		left: 30px;
		top: 15px;
		width: 50px;
	}
	.buttomDiv{
		float: right;
		margin-right: 20px;
		margin-top: 10px;
	}
	.loginButton{
		width: 120px;
	}
</style>
