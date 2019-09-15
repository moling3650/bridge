<template>
  <div id="ShengTaiBaoHu">
    <page ref="page" page-name="ShengTaiBaoHu" autoplay can-skip :opacity="opacity" @ended="playAudio">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '4rem', left: '12rem' }" text="保护海豚" @click.native="showVideo('3-1')"/>
          <dot :style="{ top: '3.6rem', left: '15.4rem' }" text="一图读懂生态保护" @click.native="showImg"/>
          <nav-bar/>
          <mini-map/>
        </template>
      </template>
    </page>
    <template v-if="app.mode === 'dl'">
      <guide-button v-show="guideBtnVisiable" class="btn-center" @click="nextStep">{{ guideTextList[step] }}</guide-button>
    </template>
    <template v-if="show">
      <back v-if="app.mode === 'zy'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="hide"/>
      <guide-button v-if="app.mode === 'dl'" class="rb" @click="hide">继续</guide-button>
    </template>

    <transition name="fade">
      <div v-show="show" class="slider core">
        <div ref="longDiv" class="longDiv" style="font-size:0.3rem">
          <img ref="longImg" src="../assets/img/long.jpg" alt="" :style="{ left: `${left}rem` }">
        </div>
        <ul class="direction">
          <left v-show="left < 0" class="left" @click="clickLeft"/>
          <right v-show="left > -88" class="right" @click="clickRight"/>
        </ul>
        <div class="core2"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
  inject: ['app'],
  data () {
    return {
      opacity: 0,
      show: false,
      left: 0,
      screenWidth: document.body.clientWidth, // body宽度
      isShow: true,
      guideBtnVisiable: false,
      guideTextList: [
        '中华白海豚“不搬家”',
        '港珠澳大桥生态保护做了啥',
      ],
      step: 0,
      soundList: [
        'dl23',
        'dl24',
      ],
    }
  },
  watch: {
    guideBtnVisiable (val) {
      if (this.app.mode === 'zy') {
        return
      }
      if (val) {
        this.opacity = 5
        this.$refs.page.pauseLoopVideo()
      }
    },
    opacity (val) {
      if (this.app.mode === 'zy') {
        return
      }
      if (!val) {
        this.$refs.page.playLoopVideo()
      }
    },
  },
  mounted () {
    if (this.app.mode === 'dl') {
      this.$audio.onended = () => {
        this.guideBtnVisiable = true
      }
      this.$audio.oncanplay = () => {
        this.$audio.play()
      }
      if (this.step || this.$route.query.loop) {
        this.playAudio()
      }
    }
  },
  methods: {
    playAudio () {
      if (this.step < this.soundList.length) {
        const filename = this.soundList[this.step]
        if (filename) {
          this.$audio.src = require(`../../public/audio/dl/${filename}.mp3`)
          this.$audio.load()
        } else {
          this.guideBtnVisiable = true
        }
      } else {
        this.$router.push('/NavEnd')
      }
    },
    nextStep () {
      const stepFun = [
        () => this.showVideo('3-1'),
        () => this.showImg(),
      ]
      stepFun[this.step]()
      setTimeout(() => {
        this.step++
      }, 500)
      if (this.step >= this.guideTextList.length) {
        this.guideBtnVisiable = false
      }
    },
    showVideo (filename) {
      this.guideBtnVisiable = false
      this.$audio.pause()
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.opacity = 5
      this.$video.play(video, this.app.mode).then(() => {
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audio.play()
        }
        if (this.app.mode === 'dl') {
          this.playAudio()
        }
      })
    },
    showImg () {
      this.$audio.pause()
      this.opacity = 5
      this.show = true
      this.guideBtnVisiable = false
    },
    hide () {
      if (this.app.mode === 'zy') {
        this.$audio.play()
      }
      if (this.app.mode === 'dl') {
        this.playAudio()
      }
      this.opacity = 0
      this.show = false
      this.left = 0
    },
    clickLeft () {
      this.left += 8
    },
    clickRight () {
      this.left -= 8
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 101;
  width: 17rem;
  height: 7.5rem;
  transform: translate3d(-50%, -50%, 0);
  background-color: #3a6aa2;
  .longDiv {
    position: absolute;
    top: 0;
    left: 0rem;
    bottom: 0;
    right: 0rem;
    overflow: hidden;
    img {
      position: absolute;
      height: 100%;
      transition: all 1s ease-out;
    }
  }
}

.direction {
  .left,
  .right {
    top: 3.5rem;
    z-index: 20;
    height: 1rem;
    width: 0.55rem;
  }
  .left {
    left: -0.6rem;
  }
  .right {
    right: -0.6rem;
  }
}
</style>
