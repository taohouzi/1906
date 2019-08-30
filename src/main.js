// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant';
import App from './App'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import axios from 'axios';
import Vuex from 'vuex'
import vueTap from 'v-tap';
import 'lib-flexible';


Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Vant);
Vue.use(Vuex);
Vue.use(vueTap);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
