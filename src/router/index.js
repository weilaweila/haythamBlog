import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import articleDetail from '../components/articleDetail'
import createPost from '../components/createPost'

Vue.use(Router)
export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:home,
			name:'home',
			meta:{
				isLogin:false
			}
		},
		{
			path:'/article',
			component:articleDetail,
			name:'article',
			meta:{
				isLogin:false
			}
		},
		{
			path:'/createpost',
			component:createPost,
			name:'createpost',
			meta:{
				isLogin:false
			}
		}
	]
})