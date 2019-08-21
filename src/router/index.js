import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../components/home.vue'

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:home
		},
	]
})