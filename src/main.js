import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iView)

new Vue({
  el:'#app',
  render: h => h(App),
  router,
})
