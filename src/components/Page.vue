<template>
  <div class="page">
    <video
      v-show="!isLoop"
      ref="Cutscenes"
      :src="require(`../../public/video/${pageName}-1.mp4`)"
      preload
      :autoplay="autoplay"
      @canplay="$emit('canplay')"
      @canplaythrough="loopPreLoad = true"
      @ended="playLoopVideo"
    >
      您的浏览器不支持 video 标签。
    </video>
    <video
      v-show="isLoop"
      ref="LoopVideo"
      :src="require(`../../public/video/${pageName}-2.mp4`)"
      :preload="loopPreLoad"
      loop
    >
      您的浏览器不支持 video 标签。
    </video>
    <div class="content">
      <slot :is-loop="isLoop"/>
      <button v-show="!isLoop && canSkip" class="skip" @click="playLoopVideo">skip</button>
    </div>
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
    canSkip: {
      type: Boolean,
    },
    autoplay: {
      type: Boolean,
    },
  },
  data () {
    return {
      isLoop: false,
      loopPreLoad: false,
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
  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    .skip {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
