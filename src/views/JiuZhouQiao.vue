<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="opacity" @ended="handleEnd">
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
        <template v-if="app.mode === 'dl'">
          <guide-button v-show="guideBtnVisiable" class="rb" @click="nextStep">{{ guideTextList[step] }}</guide-button>
        </template>
      </template>
    </page>
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
      guideBtnVisiable: true,
      guideTextList: [
        '港珠澳大桥桥墩安装 〉',
        '港珠澳大桥的钢箱梁制造 〉',
        '继续 〉',
      ],
      step: this.$route.meta.step || 0,
    }
  },
  methods: {
    nextStep () {
      const stepFun = [
        () => this.$redirect('/QiaoDun'),
        () => this.showImages(),
        () => this.$router.push('/JiangHaiQiao'),
      ]
      stepFun[this.step]()
      this.step++
      if (this.step >= this.guideTextList.length) {
        this.guideBtnVisiable = false
      }
    },
    closeDesc () {
      this.showDesc = false
      sessionStorage.setItem('viewDesc', 'true')
    },
    handleEnd () {
      if (this.app.mode === 'zy') {
        this.showDesc = sessionStorage.getItem('viewDesc') !== 'true'
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
        this.guideBtnVisiable = true
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audio.play()
        }
      })
    },
    showImages () {
      this.guideBtnVisiable = false
      this.opacity = 5
      this.$showImages(images, this.app.mode).then(() => {
        this.guideBtnVisiable = true
        this.opacity = 0
        if (this.app.mode === 'zy') {
          this.$audio.play()
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
