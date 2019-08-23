import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import vueAxios from 'vue-axios';
import store from './store';
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iView)
Vue.use(vueAxios,axios)
Vue.use(Vuex)

router.beforeEach((to,from,next)=>{
	let getFlag = localStorage.getItem("Flag");
	// console.log(getFlag)
	// if(getFlag === "isLogin"){

	// 	store.state.isLogin = true
	// 	next()
	// 	// if(!to.meta.isLogin){
	// 	// 	iView.Message.error("login please 1")
	// 	// 	next({
	// 	// 		path:'/article'
	// 	// 	})
	// 	// }

	// }else{
	// 	console.log("to:", to.meta.isLogin)
	// 	if(to.meta.isLogin){
	// 		// next({
	// 		// 	path:'/',
	// 		// })
	// 		iView.Message.info("login please 2")
	// 	}else{
	// 		next()
	// 	}
	// }
	// console.log("here is beforeEach")
	next()
})

router.afterEach(route=>{
	window.scroll(0,0);
})

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
})
