<template>
  <div id="JiangHaiQiao">
    <page page-name="JiangHaiQiao" autoplay can-skip :opacity="showVPlayer ? 5 : 0">
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
        <dot v-show="isLoop" :style="{ marginTop: '12%', left: '12%' }" text="海豚塔" @click.native="clickDot(1)"/>
        <dot v-show="isLoop" :style="{ marginTop: '14%', left: '48%' }" text="全球首例巨型钢塔翻身吊装"/>
        <dot v-show="isLoop" :style="{ marginTop: '23%', left: '80%' }" text="全球首次采用锌－铝合金超强钢丝" @click.native="clickDot(3)"/>
      </template>
    </page>
    <video-player v-show="showVPlayer" ref="vplayer" @close="showVPlayer = false"/>
  </div>
</template>

<script>
export default {
  name: 'JiangHaiQiao',
  data () {
    return {
      showVPlayer: false,
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        url: require(`../../public/video/JiangHaiQiao/2-b-${index}.mp4`),
      }
      this.showVPlayer = true
      this.$refs.vplayer.play(video)
    },
  },
}
</script>
