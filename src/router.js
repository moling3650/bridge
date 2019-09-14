import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/Landing.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/Navigation.vue'),
      beforeEnter: (to, from, next) => {
        if (from.name === 'home' || from.name === 'Landing') {
          to.query.loop = false
        } else {
          to.query.loop = true
        }
        next()
      },
    },
    {
      path: '/JiuZhouQiao',
      name: 'JiuZhouQiao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/JiuZhouQiao.vue'),
      beforeEnter: (to, from, next) => {
        if (from.name === 'QiaoDun') {
          to.meta.audioReplay = true
        }
        next()
      },
    },
    {
      path: '/JiangHaiQiao',
      name: 'JiangHaiQiao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/JiangHaiQiao.vue'),
    },
    {
      path: '/ShengTaiBaoHu',
      name: 'ShengTaiBaoHu',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/ShengTaiBaoHu.vue'),
    },
    {
      path: '/QingZhouQiao',
      name: 'QingZhouQiao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/QingZhouQiao.vue'),
    },
    {
      path: '/DongRenGongDao',
      name: 'DongRenGongDao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/DongRenGongDao.vue'),
      beforeEnter: (to, from, next) => {
        if (from.name === 'DynamicPicture' || from.name === 'JianSheDaShiJi') {
          to.meta.audioReplay = true
        }
        next()
      },
    },
    {
      path: '/HaiDiSuiDao',
      name: 'HaiDiSuiDao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/HaiDiSuiDao.vue'),
      beforeEnter: (to, from, next) => {
        if (from.name === 'HaidiSuiDaoChart') {
          to.meta.audioReplay = true
          to.meta.step = 1
        }
        if (from.name === 'HaidiConstructor') {
          to.meta.audioReplay = true
          to.meta.step = 4
        }
        next()
      },
    },
    {
      path: '/XiRenGongDao',
      name: 'XiRenGongDao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/XiRenGongDao.vue'),
    },
    {
      path: '/Roaming',
      name: 'Roaming',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/Roaming.vue'),
    },
    {
      path: '/End',
      name: 'End',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/End.vue'),
    },
    {
      path: '/JianSheDaShiJi',
      name: 'JianSheDaShiJi',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/JianSheDaShiJi'),
    },
    {
      path: '/ZhiShiMoFang',
      name: 'ZhiShiMoFang',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/ZhiShiMoFang/index.vue'),
    },
    {
      path: '/JiaoHu',
      name: 'JiaoHu',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/JiaoHu.vue'),
    },
    {
      path: '/HaidiConstructor',
      name: 'HaidiConstructor',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/HaidiConstructor.vue'),
    },
    {
      path: '/QiaoDun',
      name: 'QiaoDun',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/QiaoDun.vue'),
    },
    {
      path: '/ShiJieZhiZui',
      name: 'ShiJieZhiZui',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/ShiJieZhiZui.vue'),
    },
    {
      path: '/HaidiSuiDaoChart',
      name: 'HaidiSuiDaoChart',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/HaidiSuiDaoChart/index.vue'),
    },
    {
      path: '/DynamicPicture',
      name: 'DynamicPicture',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/DynamicPicture/index.vue'),
    },
  ],
})
const subRoute = [
  'JianSheDaShiJi',
  'JiaoHu',
  'ZhiShiMoFang',
  'HaidiConstructor',
  'QiaoDun',
  'ShiJieZhiZui',
  'HaidiSuiDaoChart',
  'DynamicPicture',
]
router.beforeEach((to, from, next) => {
  if (~subRoute.indexOf(from.name)) {
    to.query.loop = true
  }
  next()
})

export default router
