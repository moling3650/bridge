<template>
  <div id="JiuZhouQiao">
    <page ref="page" page-name="JiuZhouQiao" autoplay can-skip :opacity="opacity" @ended="handleEnd">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <img v-show="showDesc" src="@/assets/img/desc.png" alt="desc" class="desc" @click="closeDesc">
          <dot :style="{ top: '6.2rem', left: '3rem' }" text="世界最长跨海大桥" @click.native="$showFrame('http://newscenter.southcn.com/zt/20190902sjbri/index.html')"/>
          <dot :style="{ top: '1.1rem', left: '6.3rem' }" text="风帆塔" @click.native="showVideo('1-1')"/>
          <dot :style="{ top: '4.2rem', left: '10rem' }" text="世界最长的钢铁大桥" @click.native="showImages"/>
          <dot :style="{ top: '3.8rem', left: '14.5rem' }" text="桥墩安装" @click.native="$redirect('/QiaoDun')"/>
          <nav-bar/>
          <mini-map/>
        </template>
      </template>
    </page>
    <template v-if="app.mode === 'dl'">
      <guide-button v-show="guideBtnVisiable" class="btn-center" @click="nextStep">{{ guideTextList[step] }}</guide-button>
    </template>
  </div>
</template>

<script>
import { images } from '@/assets/worldlong/data'

export default {
  name: 'JiuZhouQiao',
  inject: ['app'],
  data () {
    return {
      showDesc: false,
      opacity: 0,
      guideBtnVisiable: false,
      guideTextList: [
        '港珠澳大桥桥墩安装',
        '港珠澳大桥的钢箱梁制造',
      ],
      step: this.$route.meta.step || 0,
      soundList: [
        'dl17',
        'dl18',
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
      if (this.step) {
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
        this.$router.push({ name: 'JiangHaiQiao', query: { loop: true }})
      }
    },
    nextStep () {
      const stepFun = [
        () => this.$redirect('/QiaoDun'),
        () => this.showImages(),
      ]
      stepFun[this.step]()
      setTimeout(() => {
        this.step++
      }, 500)
    },
    closeDesc () {
      this.showDesc = false
      sessionStorage.setItem('viewDesc', 'true')
    },
    handleEnd () {
      if (this.app.mode === 'zy') {
        this.showDesc = sessionStorage.getItem('viewDesc') !== 'true'
      }
      if (this.app.mode === 'dl') {
        this.playAudio()
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
    showImages () {
      this.guideBtnVisiable = false
      this.opacity = 5
      this.$showImages(images, this.app.mode).then(() => {
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audio.play()
        }
        if (this.app.mode === 'dl') {
          this.playAudio()
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.hint{
  position: absolute;
  top: 1.6rem;
  left: 6.9rem;
  cursor: pointer;
  font-size: 0.2rem;
  color: #ddd;
}
.desc {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 1000;
}
</style>
