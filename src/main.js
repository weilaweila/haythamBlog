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

router.afterEach(route=>{
	window.scroll(0,0);
})

router.beforeEach((to,from,next)=>{
	// let getFlag = localStorage.getItem("Flag");
	let token = localStorage.getItem('Authorization');
	// console.log(token)
	if(!to.meta.isLogin){
		next()
	}else{
		let token = localStorage.getItem('Authorization');
		// console.log(token)
		if(token == null || token == ''){
			console.log('plese login')
			next('/')
		}else{
			// check token with backend, success then allow login
			// how to deal with the scenario about token expired ?
			next()
			console.log('login success')
		}
	}
})

// axios.defaults.withCredentials = true
axios.interceptors.request.use(
	config => {
		let token = localStorage.getItem('Authorization');
		// console.log('here is axios hook 1',token)
		if(token){
			// async:true
			// crossDomain:true
			// console.log('here is axios hook 2')
			config.headers.common['token'] = token
			console.log(config.headers)
		}
		return config
	},
	err => {
		return Promise.reject(err);
	});



new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
})
