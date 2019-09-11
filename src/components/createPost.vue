<template>
	<div class="super">
		<div class="titleDiv">
			<Input id="title" v-model="title" placeholder="Enter something..."/>
			<Button id="submit" @click="submit">Submit</Button>
		</div>
		<div id="editor">
			<textarea :value="content" @input="update"></textarea>
			<div v-html="compiledMarkdown"></div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import marked from 'marked'
	import lodash from 'lodash'
	export default{
		name: '',
		data:function(){
			return {
				content: '# hello',
				title:'',
			}
		},
		computed: {
			compiledMarkdown: function () {
				return marked(this.content, { sanitize: true })
			}
		},
		methods:{
			update: _.debounce(function (e) {
			this.content = e.target.value
			}, 300),
			submit:function(){
				console.log(this.content)
				console.log(this.title)
				axios.post('http://127.0.0.1:5000/creatpost',{
							title:this.title,
							content:this.content,
						})
					.then(function(response){
						console.log(response)
					})
					.catch(function(error){
						console.log(error);
					})
			},

		},
	}
</script>

<style scoped>	
	.super{
		width: 100%;
		height: 100%;
	}
	.titleDiv{
		/*height: 5%;*/
	}
	#title{
		/*display: inline-block;*/
		width: 85%;
		/*height: 5%;*/
	}
	#submit{
		width: 15%;
	}
	html, body, #editor {
		margin: 0;
		height: 100%;
		font-family: 'Helvetica Neue', Arial, sans-serif;
		color: #333;
	}
	textarea, #editor div {
		display: inline-block;
		width: 49%;
		height: 100%;
		vertical-align: top;
		box-sizing: border-box;
		padding: 0 20px;
	}
	textarea {
		border: none;
		border-right: 1px solid #ccc;
		resize: none;
		outline: none;
		background-color: #f6f6f6;
		font-size: 14px;
		font-family: 'Monaco', courier, monospace;
		padding: 20px;
	}
	code {
		color: #f66;
	}
</style>
