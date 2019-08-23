<template>
	<div class="super">
		<div class="header">
			<div class="logoDiv">
				<p>{{count}}, {{isLogin}}</p>
			</div>
			<div class="buttomDiv">
				<Button type="primary" class="loginButton" style="margin-right:20px" @click="showLoginModal">Login</Button>
				<Button type="primary" class="loginButton" @click="showRegisterModal">Register</Button>
			</div>
		</div>

		<Button type="primary" class="navigator" @click="navigator">navigater</Button>
		
		<Modal v-model="registerModalStatus" @on-ok="registerEvent">
			<p>Register</p>
			<Input v-model="username" placeholder="Username" style="width: 300px" />
			<Input v-model="password" placeholder="Password" style="width: 300px" />
		</Modal>

		<Modal v-model="loginModalStatus" @on-ok="loginEvent">
			<p>Login</p>
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
				registerModalStatus:false,
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
		// computed:mapState({
		// 	count: state => state.count
		// 	countAlias:'count',
		// 	countPlusLocalState(state){
		// 		return state.count + this.localCount
		// 	}
		// }),
		created(){
			this.incrementStep();
		},
		methods:{
			...mapActions([
				'incrementStep'
			]),
			showRegisterModal:function(){
				this.registerModalStatus = true;
			},
			showLoginModal:function(){
				this.loginModalStatus = true;
			},
			registerEvent:function(){
				axios.post('http://127.0.0.1:5000/register',{
					username:this.username,
					password:this.password,
					})
				.then(function(res){

				})
				.catch(function(error){

				})
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
							username:this.username,
							password:this.password,
						})
					.then(function(response){
						console.log(response)
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
