<template>
  <div id="XiRenGongDao">
    <page ref="page" page-name="XiRenGongDao" autoplay can-skip :opacity="opacity" @ended="playAudio">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '5rem', left: '7rem' }" text="人工岛透视" @click.native="show('subPage')"/>
          <dot :style="{ top: '5rem', left: '15rem' }" text="人工岛施工图集" @click.native="showImages"/>
          <dot :style="{ top: '7rem', left: '9rem' }" text="世界最大钢圆筒的海上之旅" @click.native="showVideo('5-3')"/>
          <dot :style="{ top: '5rem', left: '11.4rem' }" text="世界首创钢圆筒快速筑岛技术" @click.native="showVideo('5-4')"/>
          <dot :style="{ top: '6rem', left: '5rem' }" text="人工岛设计师专访" @click.native="showVideo('5-2')"/>
          <nav-bar/>
          <mini-map/>
        </template>
      </template>
    </page>
    <template v-if="app.mode === 'dl'">
      <guide-button v-show="guideBtnVisiable" class="btn-center" @click="nextStep">{{ guideTextList[step] }}</guide-button>
    </template>
    <video
      v-show="subPageVisiable"
      ref="v"
      class="v"
      :src="require('../../public/video/dot/5-1.mp4')"
      preload="metadata"
      @ended="showDetail = true"
    >
      您的浏览器不支持 video 标签。
    </video>
    <div class="details-des"/>
    <div v-show="showDetail" class="details" :class="bgi">
      <dot :style="{ top: '1.4rem', left: '4.3rem' }" text="主体建筑" @click.native="checkDetail(2)"/>
      <dot :style="{ top: '2.3rem', left: '6.2rem' }" text="隧道入口" @click.native="checkDetail(5)"/>
      <dot :style="{ top: '3.1rem', left: '8.1rem' }" text="环岛公路" @click.native="checkDetail(4)"/>
      <dot :style="{ top: '5rem', left: '6.6rem' }" text="防波堤" @click.native="checkDetail(3)"/>
      <dot :style="{ top: '7rem', left: '7.5rem' }" text="钢圆筒" @click.native="checkDetail(6)"/>
      <back v-if="app.mode === 'zy'" :style="{ bottom: '0.4rem', right: '0.4rem', width: '1rem', height: '1rem' }" @click.native="hide('subPage')"/>
      <guide-button v-if="app.mode === 'dl'" class="rb" @click.native="hide('subPage')">继续</guide-button>
    </div>
  </div>
</template>

<script>
import { images } from '@/assets/XiRenGongDao/data'

export default {
  name: 'XiRenGongDao',
  inject: ['app'],
  data () {
    return {
      subPageVisiable: false,
      guideBtnVisiable: false,
      showDetail: false,
      opacity: 0,
      bgi: '',
      guideTextList: [
        '三维透视东、西人工岛构造',
        '世界最大钢圆筒的海上之旅',
        '215天如何快速围筑两个10万平米人工岛',
        '“海上客厅”背后的1000+张设计图',
        '港珠澳大桥海底沉管隧道',
      ],
      step: 0,
      soundList: [
        'dl04',
        'dl05',
        'dl06',
        'dl07',
        'dl08',
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
      this.$audioD.onended = () => {
        this.guideBtnVisiable = true
      }
    }
  },
  methods: {
    playAudio () {
      if (this.app.mode === 'dl') {
        if (this.step < this.soundList.length) {
          this.$audioD.src = require(`../../public/audio/dl/${this.soundList[this.step]}.mp3`)
          this.$audioD.load()
        }
      }
    },
    nextStep () {
      const stepFun = [
        () => this.show('subPage'),
        () => this.showVideo('5-3'),
        () => this.showVideo('5-4'),
        () => this.showVideo('5-2'),
        () => this.$router.push('/HaiDiSuiDao'),
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
        if (this.app.mode === 'dl') {
          this.playAudio()
        }
      })
    },
    showImages () {
      this.guideBtnVisiable = false
      this.opacity = 5
      this.$showImages(images).then(() => {
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audioZ.play()
        }
        if (this.app.mode === 'dl') {
          this.playAudio()
        }
      })
    },
    show (key) {
      this.guideBtnVisiable = false
      this.opacity = 5
      if (this.app.mode === 'zy') {
        this.$audioZ.pause()
      }
      this[`${key}Visiable`] = true
      if (key === 'subPage') {
        this.checkDetail(1)
        this.$nextTick(() => {
          this.$refs.v.play()
        })
      }
    },
    hide (key) {
      this.opacity = 0
      if (this.app.mode === 'zy') {
        this.$audioZ.play()
      }
      this[`${key}Visiable`] = false
      if (key === 'subPage') {
        this.$refs.v.currentTime = 0
        this.bgi = ''
        this.showDetail = false
        if (this.app.mode === 'dl') {
          this.playAudio()
        }
      }
    },
    checkDetail (index) {
      this.bgi = `bg-${index}`
    },
  },
}
</script>

<style lang="scss" scoped>
.details,
.v {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 3;
}
.details {
  z-index: 4;
  @for $i from 1 to 7 {
    &.bg-#{$i} {
      background-image: url(../assets/img/5-1-#{$i}.png);
    }
	}
  background-size: 100% 100%;
}
</style>
