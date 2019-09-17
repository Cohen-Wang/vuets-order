import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
Vue.prototype.$axios = axios;

// 配置默认根路径
//axios.defaults.baseURL = 'http://wd1695319840sjftof';// 野狗
axios.defaults.baseURL = 'https://axios-app-b8cca.firebaseio.com/';// firebase

Vue.config.productionTip = false;

new Vue({

	router,
	store,
	render: h => h(App)

}).$mount('#app');