<template>
	<div class="super">
		<div class="title">
			
		</div>
		<div id="editor">
			<textarea :value="input" @input="update"></textarea>
			<div v-html="compiledMarkdown"></div>
		</div>
	</div>
</template>

<!-- <script src="https://unpkg.com/marked@0.3.6"></script> -->
<!-- <script src="https://unpkg.com/lodash@4.16.0"></script> -->
<script>
	import axios from 'axios'
	import marked from 'marked'
	import lodash from 'lodash'
	export default{
		name: '',
		data:function(){
			return {
				input: '# hello'
			}
		},
		computed: {
			compiledMarkdown: function () {
				return marked(this.input, { sanitize: true })
			}
		},
		methods:{
			update: _.debounce(function (e) {
			this.input = e.target.value
			}, 300)
		},
	}
</script>

<style scoped>	
	.super{
		width: 100%;
		height: 100%;
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
