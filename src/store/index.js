import Vue from 'vue';
import Vuex from 'vuex';
import store from './index';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		count:0,
		isLogin:false,
	},
	getter:{
		isLogin:state => state.isLogin,
	},
	mutations:{
		userStatus(state,flag){
			state.isLogin = flag
		},
		increment(state,payload){
			state.count += payload.step || 1;
		}
	},

	actions:{
		// userLogin({commit},flag){
		// 	commit("userStatus",flag)
		// },
		userLogin(context, flag){
			context.commit("userStatus",flag)
		},
		// increment(context, param){
		// 	context.state.count += param.step;
		// 	context.commit("increment",context.state.count)
		// },
		increment({commit},param){
			store.count += param.step;
			commit("increment",store.count)	
		},
		incrementStep({state,comit,rootState}){
			if(rootState.count < 100){
				store.dispatch("increment",{
					step:10
				})
			}
		}
	},
})