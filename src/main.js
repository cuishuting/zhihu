import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routers from './router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);
new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')
