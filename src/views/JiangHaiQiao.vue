<template>
  <div id="JiangHaiQiao">
    <page page-name="JiangHaiQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '2rem', left: '2.7rem' }" text="海豚塔" @click.native="showVideo('2-1')"/>
        <dot :style="{ top: '2rem', left: '9.6rem' }" text="全球首例巨型钢塔翻身吊装" @click.native="showVideo('2-2')"/>
        <dot :style="{ top: '4rem', left: '15rem' }" text="全球首次采用锌－铝合金超强钢丝" @click.native="showVideo('2-3')"/>
        <dot :style="{ top: '2rem', left: '16.5rem' }" text="建设者专访" @click.native="showVideo('2-4')"/>
        <mini-map/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'JiangHaiQiao',
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
