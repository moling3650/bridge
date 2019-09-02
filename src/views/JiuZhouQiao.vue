<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '1.1rem', left: '6.3rem' }" text="风帆塔" @click.native="clickDot(1)"/>
        <dot :style="{ top: '4.2rem', left: '10rem' }" text="世界最长的钢铁大桥" @click.native="clickDotCarousel"/>
        <dot :style="{ top: '3.8rem', left: '14.5rem' }" text="桥墩" @click.native="clickDot(3)"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push({ name: 'navigation', query: { loop: true } })"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/JiangHaiQiao')"/>
      </template>
    </page>
    <transition name="fade">
      <Carousel v-show="show" :url="url" @close="close"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'JiuZhouQiao',
  data () {
    return {
      opacity: 0,
      show: false,
      url: '../assets/worldlong/',
      // url: '../assets/worldlong/',
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        url: require(`../../public/video/dot/1-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
    clickDotCarousel () {
      this.show = true
    },
    close () {
      this.show = false
    },
  },
}
</script>
