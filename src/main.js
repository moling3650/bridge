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
import Next from '@/components/Next'
import Carousel from '@/components/Carousel'
import MaxCard from '@/components/MaxCard'
import MiniMap from '@/components/MiniMap'

import video from '@/utils/video'
import './scss/reset.scss'

Vue.component(Loader.name, Loader)
Vue.component(Page.name, Page)
Vue.component(NavLink.name, NavLink)
Vue.component(NavBar.name, NavBar)
Vue.component(Dot.name, Dot)
Vue.component(Back.name, Back)
Vue.component(Next.name, Next)
Vue.component(Carousel.name, Carousel)
Vue.component(MaxCard.name, MaxCard)
Vue.component(MiniMap.name, MiniMap)
Vue.prototype.$video = video
Vue.prototype.$audio = document.createElement('AUDIO')
Vue.prototype.$redirect = (route) => {
  Vue.prototype.$audio.pause()
  router.push(route)
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
