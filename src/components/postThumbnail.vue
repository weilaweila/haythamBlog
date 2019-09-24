<template>
	<div class="super">
		<div id="thumbnail">
			<div class="title">{{title}}</div>
			<div class="content">{{content}}</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name: 'thumbnail',
		data:function(){
			return {

			}
		},
		props:{
			title:String,
			content:String,
		},
		methods:{

		},
	}
</script>

<style scoped>	
/*	* {
		border: 0.05px solid rgb(200,200,200);
	}*/
	.super{
		width: 100%;
		height: 100%;
		/*background-color: red;*/
	}
	#thumbnail{
		background-color: rgb(255,255,255);
		height: 125px;
		width: 100%;
		border-bottom: 0.05px solid rgb(200,200,200);
		padding: 12px 2px 12px 5px;
		/*float: right;*/
		/*left: 10%;*/
		/*margin-bottom: 10px;*/
	}
	.title{
		font-size: 2em;
		font-weight: bold;
	}
	.content{
		font-size: 15px;
	}
</style>
