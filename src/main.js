import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// 注册全局组件
import Loader from '@/components/Loader'
Vue.component(Loader.name, Loader)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
