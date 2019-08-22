import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../components/home.vue'
import articleDetail from '../components/articleDetail'

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:home,
			meta:{
				isLogin:false
			}
		},
		{
			path:'/article',
			component:articleDetail,
			meta:{
				isLogin:true
			}
		},
	]
})