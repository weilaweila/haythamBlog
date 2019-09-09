<template>
	<div class="super">
		<div id="thumbnail">
			{{title}}
			{{content}}
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
	.super{
		width: 100%;
		height: 100%;
		/*background-color: red;*/
	}
	#thumbnail{
		background-color: red;
		height: 50px;
		width: 80%;
		/*float: right;*/
		/*left: 10%;*/
		/*margin-bottom: 10px;*/
	}
</style>
