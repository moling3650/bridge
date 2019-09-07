<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="中国结" @click.native="showVideo('4-1')"/>
        <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏" @click.native="showImg"/>
        <dot :style="{ top: '9.3rem', left: '12rem' }" text="世界最大单体钢桥面沥青铺装工程" @click.native="showVideo('4-3')"/>
        <mini-map/>
      </template>
    </page>
    <img v-show="imgVisiable" class="ss" src="@/assets/img/4-2.png" alt="SS级护栏">
    <back v-show="imgVisiable" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="hideImg"/>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
  data () {
    return {
      opacity: 0,
      imgVisiable: false,
    }
  },
  methods: {
    showVideo (filename) {
      this.$audio.pause()
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.opacity = 5
      this.$video.play(video).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
    showImg () {
      this.$audio.pause()
      this.opacity = 5
      this.imgVisiable = true
    },
    hideImg () {
      this.$audio.play()
      this.opacity = 0
      this.imgVisiable = false
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
