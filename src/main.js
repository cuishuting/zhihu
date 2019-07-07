import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routers from './router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Store from './store';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
const RouterConfig = {
    routes: Routers
};
const store = new Vuex.Store(Store);
const router = new VueRouter(RouterConfig);
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
