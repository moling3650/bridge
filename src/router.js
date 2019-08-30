import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/Navigation.vue'),
    },
    {
      path: '/JiuZhouQiao',
      name: 'JiuZhouQiao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/JiuZhouQiao.vue'),
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
    },
    {
      path: '/HaiDiSuiDao',
      name: 'HaiDiSuiDao',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/HaiDiSuiDao.vue'),
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
      path: '/ZhiShiMoFang',
      name: 'ZhiShiMoFang',
      component: () =>
        import(/* webpackChunkName: "Views" */ './views/ZhiShiMoFang.vue'),
    },
    {
      path: '/JiaoHu',
      name: 'JiaoHu',
      component: () =>
        import(/* webpackChunName: "Views"*/ './views/JiaoHu.vue'),
    },
  ],
})
