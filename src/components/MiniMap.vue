<template>
  <div class="map-wrap">
    <div class="mini-map">
      <div v-for="l in links" :key="l.to" class="btn" :style="{ top: l.top, left: l.left }" @click="$redirect(l.to)">{{ l.text }}</div>
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
        { top: `1.52rem`, left: `0.22rem`, to: '/Home', text: '起始页' },
        { top: `0.87rem`, left: `0.58rem`, to: '/Roaming', text: '大桥漫游' },
        { top: `1.45rem`, left: `1.04rem`, to: '/JiuZhouQiao', text: '九洲桥' },
        { top: `0.37rem`, left: `1.535rem`, to: '/JiangHaiQiao', text: '江海桥' },
        { top: `1.26rem`, left: `1.775rem`, to: '/ShengTaiBaoHu', text: '生态保护' },
        { top: `0.91rem`, left: `2.295rem`, to: '/QingZhouQiao', text: '青州桥' },
        { top: `0.06rem`, left: `2.69rem`, to: '/XiRenGongDao', text: '西人工岛' },
        { top: `0.91rem`, left: `3.08rem`, to: '/HaiDiSuiDao', text: '海底隧道' },
        { top: `0.05rem`, left: `3.54rem`, to: '/DongRenGongDao', text: '东人工岛' },
        { top: `0.69rem`, left: `4.2rem`, to: '/End', text: '结束页' },
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
    .btn {
      opacity: 0;
    }
  }
}
.btn {
  position: absolute;
  padding: 0.04rem 0.1rem;
  border-radius: 0.04rem;
  font-size: 0.15rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &.current {
    border: 1px solid;
    background-color: #F7592E;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(255,255,255,.3);
  }
}
</style>
