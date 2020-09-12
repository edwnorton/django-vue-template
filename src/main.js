import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue'
import store from '@/store' 
import router from '@/router'

Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.use(VueRouter)
const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
