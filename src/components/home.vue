<template>
	<div class="super">
		<div class="header">
<!-- 			<div class="logoDiv">
				<p>{{count}}, {{isLogin}}</p>
			</div> -->
			<div class="buttomDiv">
				<Button type="success" class="loginButton" @click="showLoginModal">Login</Button>
				<Button type="primary" class="loginButton" @click="showRegisterModal">Register</Button>
				<!-- <Button type="primary" class="navigator" @click="navigator">navigater</Button> -->
			</div>
		</div>

		<div class = "contant">
			<div class="contentLeft">
				<div class="carouselDiv">
					<Carousel class="carousel" autoplay v-model="value2" :autoplay-speed="2500" loop>
						<CarouselItem>
							<div class="demo-carousel">1</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel">2</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel">3</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel">4</div>
						</CarouselItem>
					</Carousel>
				</div>
				<div
					v-for = "post in blogList"
					>
					<thumbnail 
						v-bind:title=post.title
						v-bind:content=post.content
					></thumbnail>
				</div>
			</div>
			<div class="contentRight"></div>
			
		</div>

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
	import {mapActions,mapState,mapMutations} from 'vuex'
	import store from '../store'
	import thumbnail from './articleThumbnail.vue'

	export default{
		name: 'home',
		data:function(){
			return {
				loginModalStatus:false,
				registerModalStatus:false,
				username:'',
				password:'',
				tempLoginStatus:'No Login',
				blogList:'',
				value2:0,
			}
		},
		components:{
			thumbnail:thumbnail,
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
			localStorage.removeItem("Authorization","")
		// 	this.incrementStep();
		let _this = this
			axios.get('http://127.0.0.1:5000/postlist')
					.then(function(response){
						// console.log(_this.blogList)
						console.log(response.data)
						_this.blogList = response.data.posts
						console.log(_this.blogList)
					})
					.catch(function(error){
						console.log(error)
					})
			
		},
		mounted(){

		},
		methods:{
			// ...mapActions([
			// 	'incrementStep'
			// ]),
			...mapMutations([
				'changeLogin'
			]),
			showRegisterModal:function(){
				this.registerModalStatus = true;
			},
			showLoginModal:function(){
				this.loginModalStatus = true;
			},
			registerEvent:function(){
				let that = this
				axios.post('http://127.0.0.1:5000/register',{
				// axios.post('/api/register',{
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
				let _this = this
				// axios.defaults.headers.common['token'] = localStorage.getItem('Authorization');
				axios.post('http://127.0.0.1:5000/login',{
				// axios.post('/login',{
							username:this.username,
							password:this.password,
						})
					.then(function(response){
						console.log(response)
						let token = response.data
						_this.changeLogin({Authorization: token})
						// setTimeout(_this.navigator(),500)
						setTimeout(function(){_this.$router.push("/createpost")},100)
						// if(response.status != 200){
						// 	// this.$Message.error(response.data)
						// }
						// else{
						// 	// this.$message.success(response.data)
						// 	store.dispatch("userLogin",true)
						// 	localStorage.setItem("Flag","isLogin")
						// }
					})
					.catch(function(error){
						alert('账号或密码错误');
						console.log(error);
					})
					// this.$router.push("article")
			},
			navigator:function(){
				this.$router.push("/article")
				// this.$router.push("/createpost")
			},

		},
	}
</script>

<style scoped>
/*	* {
		border: 0.05px solid rgb(200,200,200);
	}*/
	.temp{
		height: 100%;
	}
	.super {
		width: 100%;
		height: 100%;
		background-color: rgb(252,252,252);
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
	.contant{
		background-color: rgb(255,255,255);
		width: 44%;
		height: 94%;
		position: absolute;
		left: 28%;
		top: 6%;
		/*border: 0.05px solid rgb(200,200,200);*/
		/*padding-top: 20px;*/
		/*padding-left: 10%;*/
	}
	.contentLeft{
		width: 70%;
		height: 100%;
		background-color: rgb(255,255,255);
		/*display: inline;*/
		float: left;
	}
	.contentRight{
		width: 30%;
		height: 100%;
		/*border: 0.05px solid rgb(200,200,200);*/
		/*display: inline-block;*/
		float: left;
	}
	.carouselDiv{
		/*height: 100%;*/
		width: 100%;
		padding: 10px;
	}
	.carousel{
		height: 200px;
		width: 100%;
		background-color: rgb(80,107,158);
	}
	.navigator {
		position: absolute;
		top: 70px;
		left: 30px;
		width: 80px;
	}
</style>
