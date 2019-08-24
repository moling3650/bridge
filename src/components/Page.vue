<template>
  <div class="page">
    <video v-show="!isLoop" ref="Cutscenes" :src="require(`../../public/video/${pageName}-1.mp4`)" preload @canplaythrough="$emit('canplay')" @ended="playLoopVideo">
      您的浏览器不支持 video 标签。
    </video>
    <video v-show="isLoop" ref="LoopVideo" :src="require(`../../public/video/${pageName}-2.mp4`)" preload loop>
      您的浏览器不支持 video 标签。
    </video>
    <slot :is-loop="isLoop"/>
    <button v-show="!isLoop" class="skip" @click="playLoopVideo">skip</button>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      isLoop: false,
    }
  },
  methods: {
    play (loop) {
      if (loop) {
        this.playLoopVideo()
      } else {
        this.$refs.Cutscenes.play()
      }
    },
    playLoopVideo () {
      this.$nextTick(() => {
        this.isLoop = true
        this.$refs.LoopVideo.play()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  & > video {
    width: 100%;
  }
  .skip {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
</style>
