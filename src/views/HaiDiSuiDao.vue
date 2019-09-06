<template>
  <div id="HaiDiSuiDao">
    <page page-name="HaiDiSuiDao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <dot :style="{ top: '5.2rem', left: '3rem' }" text="世界最长、最深的海底沉管隧道" @click.native="$redirect('/HaidiSuiDaoChart')"/>
        <dot :style="{ top: '5.7rem', left: '6.7rem' }" text="世界最重沉管" @click.native="showVideo('6-2')"/>
        <dot :style="{ top: '5.7rem', left: '10.7rem' }" text="世界首次实现沉管隧道滴水不漏" @click.native="$redirect('/HaidiConstructor')"/>
        <dot :style="{ top: '5.6rem', left: '15.6rem' }" text="世界最精准的沉管对接" @click.native="show('qrCode')"/>
        <dot :style="{ top: '4.4rem', left: '15.9rem' }" text="建设者专访：岛隧项目总工程师 林鸣" @click.native="showVideo('6-5')"/>
        <dot :style="{ top: '7.5rem', left: '13rem' }" text="建设者专访：混凝土超级配方打造者 张宝兰" @click.native="showVideo('6-6')"/>
        <nav-bar/>
        <mini-map/>
      </template>
    </page>
    <transition name="fade">
      <MaxCard v-show="qrCodeVisiable" @close="hide('qrCode')">
        <div class="qr">
          <h3>海底沉管对接小游戏，等你挑战！</h3>
          <span class="left">
            <p>港珠澳大桥海底沉管对接被称为“最精准深海之吻”。33节沉管在海底无人对接，误差控制在2厘米以内，是目前世界上最精准的深海对接。而最终接头安装偏差从最初的17厘米降至2.5毫米，更是达到了毫米级的安装精度。</p>
            <p>港珠澳大桥海底沉管对接，可以说是智慧与工艺的双重挑战。</p>
            <p>我们专门制作了一个沉管对接小游戏，您可以扫描二维码体验这一过程。</p>
          </span>
          <div class="right">
            <img src="@/assets/img/haidi4.png" alt>
          </div>
        </div>
      </MaxCard>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HaiDiSuiDao',
  data () {
    return {
      opacity: 0,
      qrCodeVisiable: false,
      chartsVisiable: false,
    }
  },
  methods: {
    showVideo (filename) {
      this.$audio.pause()
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.opacity = 5
      this.$video.play(video).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
    show (key) {
      this.$audio.pause()
      this.opacity = 5
      this[`${key}Visiable`] = true
    },
    hide (key) {
      this.$audio.play()
      this.opacity = 0
      this[`${key}Visiable`] = false
    },
  },
}
</script>

<style lang="scss" scoped>
.qr {
  h3 {
    text-align: center;
  }
  p {
    text-indent: 0.48rem;
    margin-bottom: 0.12rem;
  }
}
</style>
