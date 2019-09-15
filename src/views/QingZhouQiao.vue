<template>
  <div id="QingZhouQiao">
    <page ref="page" page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="中国结" @click.native="showVideo('4-1')"/>
          <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏" @click.native="showVideo('4-2')"/>
          <dot :style="{ top: '9.3rem', left: '12rem' }" text="世界最大单体钢桥面沥青铺装工程" @click.native="showVideo('4-3')"/>
          <nav-bar/>
          <mini-map/>
        </template>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
  inject: ['app'],
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    showVideo (filename) {
      if (this.app.mode === 'zy') {
        this.$audioZ.pause()
      }
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.opacity = 5
      this.$video.play(video, this.app.mode).then(() => {
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audioZ.play()
        }
      })
    },
  },
}
</script>
