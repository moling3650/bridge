<template>
  <div id="ShengTaiBaoHu">
    <page page-name="ShengTaiBaoHu" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '4rem', left: '12rem' }" text="保护海豚" @click.native="showVideo('3-1')"/>
        <dot :style="{ top: '3.6rem', left: '15.4rem' }" text="一图读懂生态保护"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$redirect('/JiangHaiQiao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$redirect('/QingZhouQiao')"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    showVideo (filename) {
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.$audio.pause()
      this.opacity = 5
      this.$video.play(video).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
  },
}
</script>
