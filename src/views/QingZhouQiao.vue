<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="中国结" @click.native="clickDot(1)"/>
        <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏" @click.native="clickDot(2)"/>
        <dot :style="{ top: '9.3rem', left: '12rem' }" text="世界最大单体钢桥面沥青铺装工程" @click.native="clickDot(3)"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/ShengTaiBaoHu')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/XiRenGongDao')"/>
      </template>
    </page>
    <img v-show="showImg" class="ss" src="@/assets/img/4-2.png" alt="SS级护栏">
    <back v-show="showImg" :style="{ top: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="closeImg"/>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
  inject: {
    app: {
      default: () => {
        return null
      },
    },
  },
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    clickDot (index) {
      this.opacity = 5
      if (index === 2) {
        this.showImg = true
        return
      }
      this.app.audio.pause()
      const video = {
        url: require(`../../public/video/dot/4-${index}.mp4`),
      }
      this.$playVideo(video).then(() => {
        this.opacity = 0
        this.app.audio.play()
      })
    },
    closeImg () {
      this.showImg = false
      this.opacity = 0
    },
  },
}
</script>

<style lang="scss" scoped>
.ss {
  position: absolute;
  top: 2rem;
  left: 6.5rem;
  width: 6.86rem;
  height: 6.11rem;
}
</style>
