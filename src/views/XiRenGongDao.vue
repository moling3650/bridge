<template>
  <div id="XiRenGongDao">
    <page page-name="XiRenGongDao" autoplay can-skip :opacity="opacity">
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
        <template v-if="app.mode === 'dl'">
          <guide-button v-show="guideBtnVisiable" class="rb" @click="nextStep">{{ guideTextList[step] }}</guide-button>
        </template>
      </template>
    </page>
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
      guideBtnVisiable: true,
      showDetail: false,
      opacity: 0,
      bgi: '',
      guideTextList: [
        '三维透视东、西人工岛构造',
        '世界最大钢圆筒的海上之旅',
        '215天如何快速围筑两个10万平米人工岛',
        '“海上客厅”背后的1000+张设计图',
        '海底沉管隧道',
      ],
      step: 0,
    }
  },
  methods: {
    nextStep () {
      const stepFun = [
        () => this.show('subPage'),
        () => this.showVideo('5-3'),
        () => this.showVideo('5-4'),
        () => this.showVideo('5-2'),
        () => this.$router.push('/HaiDiSuiDao'),
      ]
      stepFun[this.step]()
      this.step++
    },
    showVideo (filename) {
      this.guideBtnVisiable = false
      this.$audio.pause()
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.opacity = 5
      this.$video.play(video, this.app.mode).then(() => {
        this.guideBtnVisiable = true
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audio.play()
        }
      })
    },
    showImages () {
      this.opacity = 5
      this.$showImages(images).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
    show (key) {
      this.opacity = 5
      this.$audio.pause()
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
      this.$audio.play()
      this[`${key}Visiable`] = false
      if (key === 'subPage') {
        this.$refs.v.currentTime = 0
        this.bgi = ''
        this.showDetail = false
      }
    },
    checkDetail (index) {
      this.bgi = `bg-${index}`
    },
  },
}
</script>

<style lang="scss" scoped>
// .details-des {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 19.2rem;
//   height: 10.8rem;
//   z-index: 2;
//   background-image: url(/img/5-1-1.png);
// }
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
