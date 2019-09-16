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
import Left from '@/components/Left'
import Right from '@/components/Right'
import Carousel from '@/components/Carousel'
import MaxCard from '@/components/MaxCard'
import MiniMap from '@/components/MiniMap'
import GuideButton from '@/components/GuideButton'

import video from '@/utils/video'
import showFrame from '@/utils/frame'
import showImages from '@/utils/showImages'
import playFullVideo from '@/utils/playFullVideo'
import './scss/reset.scss'

Vue.component(Loader.name, Loader)
Vue.component(Page.name, Page)
Vue.component(NavLink.name, NavLink)
Vue.component(NavBar.name, NavBar)
Vue.component(Dot.name, Dot)
Vue.component(Back.name, Back)
Vue.component(Next.name, Next)
Vue.component(Left.name, Left)
Vue.component(Right.name, Right)
Vue.component(Carousel.name, Carousel)
Vue.component(MaxCard.name, MaxCard)
Vue.component(MiniMap.name, MiniMap)
Vue.component(GuideButton.name, GuideButton)
Vue.prototype.$video = video
Vue.prototype.$showFrame = showFrame
Vue.prototype.$showImages = showImages
Vue.prototype.$playFullVideo = playFullVideo
Vue.prototype.$audioZ = document.createElement('AUDIO')
Vue.prototype.$audioD = document.createElement('AUDIO')
Vue.prototype.$audioD.oncanplay = () => {
  Vue.prototype.$audioD.play()
}
Vue.prototype.$redirect = (route) => {
  Vue.prototype.$audioZ.pause()
  Vue.prototype.$audioD.pause()
  router.push(route)
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
