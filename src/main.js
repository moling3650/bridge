import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// 注册全局组件
import Loader from '@/components/Loader'
import Page from '@/components/Page'
import NavLink from '@/components/NavLink'
import NavBar from '@/components/NavBar'
import JiaohuNavbar from '@/components/JiaohuNavbar'
import Dot from '@/components/Dot'
import VideoPlayer from '@/components/VideoPlayer'
Vue.component(Loader.name, Loader)
Vue.component(Page.name, Page)
Vue.component(NavLink.name, NavLink)
Vue.component(NavBar.name, NavBar)
Vue.component(JiaohuNavbar.name, JiaohuNavbar)
Vue.component(Dot.name, Dot)
Vue.component(VideoPlayer.name, VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
