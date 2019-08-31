import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// 注册全局组件
import Loader from '@/components/Loader'
import Page from '@/components/Page'
import NavLink from '@/components/NavLink'
import NavBar from '@/components/NavBar'
import Dot from '@/components/Dot'
import Back from '@/components/Back'
import playVideo from '@/utils/playVideo'
import './scss/reset.scss'

Vue.component(Loader.name, Loader)
Vue.component(Page.name, Page)
Vue.component(NavLink.name, NavLink)
Vue.component(NavBar.name, NavBar)
Vue.component(Dot.name, Dot)
Vue.component(Back.name, Back)
Vue.prototype.$playVideo = playVideo

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
