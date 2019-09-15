<template>
  <div id="HaiDiSuiDao">
    <page ref="page" page-name="HaiDiSuiDao" autoplay can-skip :opacity="opacity" @ended="playAudio">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '5.2rem', left: '3rem' }" text="世界最长、最深的海底沉管隧道" @click.native="$redirect('/HaidiSuiDaoChart')"/>
          <dot :style="{ top: '5.7rem', left: '6.7rem' }" text="世界最重沉管" @click.native="showVideo('6-2')"/>
          <dot :style="{ top: '5.7rem', left: '10.7rem' }" text="世界首次实现沉管隧道滴水不漏" @click.native="$redirect('/HaidiConstructor')"/>
          <dot :style="{ top: '5.6rem', left: '15.6rem' }" text="世界最精准的沉管对接" @click.native="show('qrCode')"/>
          <dot :style="{ top: '4.4rem', left: '15.9rem' }" text="建设者专访：岛隧项目总工程师 林鸣" @click.native="showVideo('6-5')"/>
          <dot :style="{ top: '7.5rem', left: '13rem' }" text="建设者专访：混凝土超级配方打造者 张宝兰" @click.native="showVideo('6-6')"/>
          <nav-bar/>
          <mini-map/>
        </template>
      </template>
    </page>
    <template v-if="app.mode === 'dl'">
      <guide-button v-show="guideBtnVisiable" class="btn-center" @click="nextStep">{{ guideTextList[step] }}</guide-button>
    </template>
    <transition name="fade">
      <div v-show="qrCodeVisiable" class="maxcard">
        <div class="qr">
          <h3>海底沉管对接小游戏，等你挑战！</h3>
          <span class="left">
            <p>港珠澳大桥海底沉管对接被称为“最精准深海之吻”。33节沉管在海底无人对接，误差控制在2厘米以内，是目前世界上最精准的深海对接，最终接头更是达到了毫米级的安装精度。可以说是智慧与工艺的双重挑战。</p>
            <p>我们专门制作了一个沉管对接小游戏，您可以扫描二维码体验这一过程。</p>
          </span>
          <div class="right">
            <img src="@/assets/img/haidi4.png" alt>
          </div>
        </div>
        <back v-if="app.mode === 'zy'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 10000 }" @click.native="hide('qrCode')"/>
        <guide-button v-if="app.mode === 'dl'" class="rb" @click="hide('qrCode')">继续</guide-button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HaiDiSuiDao',
  inject: {
    app: {
      default () {
        return {}
      },
    },
  },
  data () {
    return {
      opacity: 0,
      qrCodeVisiable: false,
      chartsVisiable: false,
      guideBtnVisiable: false,
      guideTextList: [
        '世界主要海底沉管隧道对比',
        '世界最重沉管是怎么建成的',
        '海底沉管的浮运和安装',
        '海底沉管对接小游戏',
        '海底沉管的创新突破',
        '港珠澳大桥主体桥梁工程',
      ],
      step: this.$route.meta.step || 0,
      soundList: [
        'dl09',
        'dl10',
        'dl11',
        'dl12',
        'dl13',
        'dl16',
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
      if (this.step) {
        this.playAudio()
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
        () => this.$redirect('/HaidiSuiDaoChart'),
        () => this.showVideo('6-2'),
        () => this.showVideo('6-7'),
        () => this.show('qrCode'),
        () => this.$redirect('/HaidiConstructor'),
        () => this.$router.push('/JiuZhouQiao'),
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
    show (key) {
      if (this.app.mode === 'zy') {
        this.$audioZ.pause()
      }
      this.opacity = 5
      this[`${key}Visiable`] = true
      this.guideBtnVisiable = false
    },
    hide (key) {
      if (this.app.mode === 'zy') {
        this.$audioZ.play()
      }
      if (this.app.mode === 'dl') {
        this.playAudio()
      }
      this.opacity = 0
      this[`${key}Visiable`] = false
    },
  },
}
</script>

<style lang="scss" scoped>
.maxcard{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  .qr {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9.2rem;
    height: 5.4rem;
    padding: 0.5rem;
    font-size: 0.2rem;
    color:#fff;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0);
    background: url(../assets/img/game_bg.png);
    background-size: 100% 100%;
    h3 {
        font-size: 0.3rem;
        margin-bottom: 0.5rem;
        font-weight: bold;
        line-height: 0.45rem;
        text-align: center;
      }
      .left {
        float: left;
        width: 5.2rem;
        font-size: 0.25rem;
        line-height: 0.4rem;
      }
      .right {
        float: right;
        width: 2.8rem;
        height: 2.8rem;
        &>img {
          width: 100%;
          height: 100%;
        }
      }
    p {
      text-indent: 0.48rem;
      margin-bottom: 0.12rem;
    }
  }
}
</style>
