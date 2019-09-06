<template>
  <div id="ShiJieZhiZui">
    <div class="anchor" :style="{ width: '2.4rem', height: '2.4rem', top: '3rem', left: '1rem' }">
      <p class="text"><span>世界最长</span><span>跨海大桥</span></p>
    </div>
    <div class="anchor" :style="{ width: '2.7rem', height: '2.7rem', top: '1.9rem', left: '5.2rem' }">
      <p class="text"><span>世界最长</span><span>海底公路</span><span>沉管隧道</span></p>
    </div>
    <div class="anchor" :style="{ width: '2.3rem', height: '2.3rem', top: '5.9rem', left: '3.1rem' }">
      <p class="text"><span>世界最长</span><span>钢铁大桥</span></p>
    </div>
    <div class="anchor" :style="{ width: '2.1rem', height: '2.1rem', top: '4.9rem', left: '8.2rem' }">
      <p class="text"><span>世界最重</span><span>沉管</span></p>
    </div>
    <div class="anchor" :style="{ width: '2.9rem', height: '2.9rem', top: '2.2rem', left: '12rem' }">
      <p class="text"><span>世界首次</span><span>实现海底</span><span>沉管滴水不漏</span></p>
    </div>
    <div class="anchor" :style="{ width: '2.7rem', height: '2.7rem', top: '6rem', left: '13.2rem' }">
      <p class="text"><span>世界规模</span><span>最大的单体</span><span>钢桥面铺装</span><span>工程</span></p>
    </div>
    <div class="anchor" :style="{ width: '2.6rem', height: '2.6rem', top: '3.4rem', right: '0.6rem' }">
      <p class="text"><span>世界首创</span><span>钢圆筒快速</span><span>筑岛技术</span></p>
    </div>
    <nav-bar/>
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 1000 }" @click.native="$router.push(from)"/>
  </div>
</template>

<script>
export default {
  name: 'ShiJieZhiZui',
  data () {
    return {
      from: {
        name: this.$route.meta.from || 'navigation',
        query: { loop: true },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
#ShiJieZhiZui {
  width: 19.2rem;
  height: 10.8rem;
  background-image: url(../../public/img/bg/world_record.jpg);
  background-size: 100%;
}
.anchor {
  position: absolute;
  min-width: 1rem;
  min-height: 1rem;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(../assets/img/border_ring.png);
    background-size: 100%;
    animation: spin-left 4.5s linear infinite;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: 0.26rem;
    color: #eeeeee;
    span {
      display: block;
      white-space: nowrap;
      text-align: center;
    }
  }
}

@keyframes spin-left {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-90deg); }
  50% { transform: rotate(-180deg); }
  75% { transform: rotate(-270deg); }
  100% { transform: rotate(-360deg); }
}
@keyframes spin-right {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
</style>
