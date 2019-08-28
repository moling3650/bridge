<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="showVPlayer ? 5 : 0">
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
        <dot v-show="isLoop" :style="{ marginTop: '7%', left: '33%' }" text="风帆塔" @click.native="clickDot(1)"/>
        <dot v-show="isLoop" :style="{ marginTop: '22%', left: '52%' }" text="世界最长的钢铁大桥" @click.native="clickDot(2)"/>
        <dot v-show="isLoop" :style="{ marginTop: '20%', left: '76%' }" text="桥墩" @click.native="clickDot(3)"/>
      </template>
    </page>
    <video-player v-show="showVPlayer" ref="vplayer" @close="showVPlayer = false"/>
  </div>
</template>

<script>
export default {
  name: 'JiuZhouQiao',
  data () {
    return {
      showVPlayer: false,
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        url: require(`../../public/video/JiuZhouQiao/1-b-${index}.mp4`),
      }
      this.showVPlayer = true
      this.$refs.vplayer.play(video)
    },
  },
}
</script>
