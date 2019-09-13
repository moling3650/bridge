<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="中国结" @click.native="showVideo('4-1')"/>
        <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏" @click.native="showVideo('4-2')"/>
        <dot :style="{ top: '9.3rem', left: '12rem' }" text="世界最大单体钢桥面沥青铺装工程" @click.native="showVideo('4-3')"/>
        <nav-bar/>
        <mini-map/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
  data () {
    return {
      opacity: 0,
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
  },
}
</script>
