<template>
  <div ref="page" class="page" :style="{ height, filter: `blur(${opacity}px)` }">
    <video
      v-if="!noCutscenes"
      ref="Cutscenes"
      :poster="require(`../../public/img/poster/${pageName}${noLoop ? '' : '-1' }-p.jpg`)"
      :src="require(`../../public/video/${pageName}${noLoop ? '' : '-1' }.mp4`)"
      preload
      @canplay="handleCanPlay"
      @canplaythrough="loopPreLoad = 'auto'"
      @ended="handleEnded"
    >
      您的浏览器不支持 video 标签。
    </video>
    <video
      v-if="!noLoop"
      ref="LoopVideo"
      :poster="require(`../../public/img/poster/${pageName}${noCutscenes ? '' : '-2'}-p.jpg`)"
      :src="require(`../../public/video/${pageName}${noCutscenes ? '' : '-2'}${hasGuide ? '-g' : ''}.mp4`)"
      :preload="loopPreLoad"
      :autoplay="noCutscenes"
      loop
      :style="{ zIndex }"
    >
      您的浏览器不支持 video 标签。
    </video>
    <div class="content" :style="contentStyle">
      <slot :is-loop="isLoop"/>
      <a v-show="!isLoop && canSkip" class="skip" @click="handleEnded">
        跳过
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  inject: {
    app: {
      default: () => {
        return null
      },
    },
  },
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
    noCutscenes: {
      type: Boolean,
    },
    start: {
      type: String,
      default: 'Cutscenes',
    },
    opacity: {
      type: Number,
      default: 0,
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
    hadAudio () {
      return ~['Navigation',
        'JiuZhouQiao',
        'JiangHaiQiao',
        'ShengTaiBaoHu',
        'QingZhouQiao',
        'DongRenGongDao',
        'HaiDiSuiDao',
        'XiRenGongDao',
      ].indexOf(this.pageName)
    },
    contentStyle () {
      return {
        position: 'absolute',
        width: `${this.app.width}px`,
        height: `${this.app.height}px`,
        top: 0,
        left: 0,
      }
    },
    hasGuide () {
      const list = [
        'DongRenGongDao',
        'HaidiConstructor',
        'HaiDiSuiDao',
        'JiangHaiQiao',
        'JiuZhouQiao',
        'QingZhouQiao',
        'ShengTaiBaoHu',
        'XiRenGongDao',
      ]
      return ~list.indexOf(this.pageName) && this.app.mode === 'dl'
    },
  },
  mounted () {
    if (this.app.mode === 'zy') {
      if (this.$route.meta.audioReplay) {
        this.$audioZ.play()
      } else if (this.hadAudio) {
        this.$audioZ.src = require(`../../public/audio/${this.pageName}.mp3`)
        this.$audioZ.load()
      }
    }
    this.isLoop = this.$route.query.loop
    if (this.app.bg) {
      if (this.isLoop) {
        this.app.bg.style.backgroundImage = `url(${require(`../../public/img/poster/${this.pageName}${this.noLoop ? '' : '-2'}-p.jpg`)})`
      } else {
        this.app.bg.style.backgroundImage = `url(${require(`../../public/img/poster/${this.pageName}${this.noCutscenes ? '' : '-1'}-p.jpg`)})`
      }
    }
    if (this.isLoop) {
      this.play(true)
    }
  },
  methods: {
    handleCanPlay () {
      if (this.autoplay && !this.$route.query.loop) {
        this.play()
      }
      this.$emit('canplay')
    },
    handleEnded () {
      this.app.bg.style.backgroundImage = 'none'
      this.$emit('ended')
      if (!this.noLoop) {
        this.app.bg.style.backgroundImage = `url(${require(`../../public/img/poster/${this.pageName}${this.noLoop ? '' : '-2'}-p.jpg`)})`
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
    pauseLoopVideo () {
      this.$refs.LoopVideo.pause()
    },
    playLoopVideo () {
      if (this.$refs.Cutscenes) {
        this.$refs.Cutscenes.pause()
      }
      this.isLoop = true
      this.$nextTick(() => {
        if (this.app.mode === 'zy' && this.hadAudio) {
          this.$audioZ.play()
        }
        this.$refs.LoopVideo.play()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 19.2rem;
  padding: 0;
  margin: 0;
  overflow: hidden;
  & > video {
    width: 19.2rem;
    // height: 10.8rem;
    // object-fit: cover;
    &:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .content {
    position: absolute;
    text-align: center;
    z-index: 10;
    .next {
      position: absolute;
      right: 0.2rem;
      bottom: 0.2rem;
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      font-size: 0.24rem;
      color: #eeeeee;
      text-decoration: none;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .skip {
      position: absolute;
      bottom: 0.1rem;
      right: 0.1rem;
      display: inline-block;
      padding: 0.05rem 0.1rem;
      border: 0.05rem double #eeeeee;
      border-radius: 0.2rem;
      font-size: 0.14rem;
      color: #eeeeee;
      cursor: pointer;
    }
  }
}
</style>
