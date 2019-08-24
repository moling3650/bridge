import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// 注册全局组件
import Loader from '@/components/Loader'
import Page from '@/components/Page'
import NavLink from '@/components/NavLink'
Vue.component(Loader.name, Loader)
Vue.component(Page.name, Page)
Vue.component(NavLink.name, NavLink)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
