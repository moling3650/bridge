<template>
  <div class="map-wrap">
    <div class="mini-map">
      <router-link v-for="l in links" :key="l.to" class="btn" :style="{ top: l.top, left: l.left }" :to="l.to">{{ l.text }}</router-link>
    </div>
    <div v-if="current" class="btn current" :style="{ top: current.top, left: current.left }">{{ current.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'MiniMap',
  data () {
    return {
      links: [
        { top: `0.87rem`, left: `0.58rem`, to: '/Roaming', text: '大桥漫游' },
        { top: `1.5rem`, left: `1.12rem`, to: '/JiuZhouQiao', text: '九洲桥' },
        { top: `0.37rem`, left: `1.62rem`, to: '/JiangHaiQiao', text: '江海桥' },
        { top: `1.3rem`, left: `1.91rem`, to: '/ShengTaiBaoHu', text: '生态保护' },
        { top: `0.94rem`, left: `2.43rem`, to: '/QingZhouQiao', text: '青州桥' },
        { top: `0.05rem`, left: `2.87rem`, to: '/XiRenGongDao', text: '西人工岛' },
        { top: `0.94rem`, left: `3.27rem`, to: '/HaiDiSuiDao', text: '海底隧道' },
        { top: `0.05rem`, left: `3.75rem`, to: '/DongRenGongDao', text: '东人工岛' },
      ],
    }
  },
  computed: {
    current () {
      return this.links.find(l => l.to === this.$route.path)
    },
  },
}
</script>

<style lang="scss" scoped>
.map-wrap {
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
  width: 5rem;
  height: 2.06rem;
}
.mini-map {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/mini_map.png);
  background-size: 100% 100%;
  transition: opacity .5s;
  opacity: 0.2;
  &:hover {
    opacity: 1;
    z-index: 100;
  }
}
.btn {
  position: absolute;
  padding: 0.05rem 0.1rem;
  text-decoration: none;
  font-size: 0.16rem;
  color: rgba(0, 0, 0, 0);
  &.current {
    background-color: #ff6031;
    color: #eee;
  }
}
</style>
