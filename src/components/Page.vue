<template>
  <div ref="page" class="page" :style="{ height }">
    <video
      ref="Cutscenes"
      :poster="require(`../../public/img/poster/${pageName}${noLoop ? '' : '-1' }-p.jpg`)"
      :src="require(`../../public/video/${pageName}${noLoop ? '' : '-1' }.mp4`)"
      preload
      :autoplay="autoplay"
      @canplay="$emit('canplay')"
      @canplaythrough="loopPreLoad = 'auto'"
      @play="handlePlay"
      @ended="handleEnded"
    >
      您的浏览器不支持 video 标签。
    </video>
    <video
      v-if="!noLoop"
      ref="LoopVideo"
      :poster="require(`../../public/img/poster/${pageName}-2-p.jpg`)"
      :src="require(`../../public/video/${pageName}-2.mp4`)"
      :preload="loopPreLoad"
      loop
      :style="{ zIndex }"
    >
      您的浏览器不支持 video 标签。
    </video>
    <div class="content">
      <slot :is-loop="isLoop"/>

      <a v-show="!isLoop && canSkip" class="next" @click="handleEnded">
        <img src="@/assets/img/next.png" alt="前进">
        <span class="text">前进</span>
      </a>
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
    noLoop: {
      type: Boolean,
    },
    start: {
      type: String,
      default: 'Cutscenes',
    },
  },
  data () {
    return {
      isLoop: this.start !== 'Cutscenes',
      loopPreLoad: false,
      height: '100%',
    }
  },
  computed: {
    zIndex () {
      return this.isLoop ? 1 : -1
    },
  },
  mounted () {
    if (this.isLoop) {
      this.play(true)
    }
  },
  methods: {
    handlePlay () {
      const rect = this.$refs.Cutscenes.getBoundingClientRect()
      this.height = `${Math.min(document.body.clientHeight, rect.height)}px`
    },
    handleEnded () {
      this.$emit('ended')
      if (!this.noLoop) {
        this.playLoopVideo()
      }
    },
    play (loop) {
      if (loop && !this.noLoop) {
        this.playLoopVideo()
      } else {
        this.$refs.Cutscenes.play()
      }
    },
    playLoopVideo () {
      this.isLoop = true
      this.$nextTick(() => {
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
    &:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    z-index: 10;
    .next {
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: inline-block;
      width: 120px;
      height: 120px;
      font-size: 24px;
      color: #eeeeee;
      text-decoration: none;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      .text {
        position: relative;
        top: -50px;
      }
    }
  }
}
</style>
