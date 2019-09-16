<template>
  <div class="Navigation">
    <page ref="page" page-name="Navigation" can-skip autoplay @ended="playAudio">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <nav-link to="Roaming" text="大桥漫游" :style="{ top: '5.7rem', left: '0.95rem' }"/>
          <nav-link to="JiuZhouQiao" text="九洲航道桥" :style="{ top: '2.05rem', left: '3rem' }"/>
          <nav-link to="JiangHaiQiao" text="江海航道桥" :style="{ top: '1.3rem', left: '6.4rem' }"/>
          <nav-link to="ShengTaiBaoHu" text="生态保护" :style="{ top: '5.2rem', left: '4.75rem' }"/>
          <nav-link to="QingZhouQiao" text="青州航道桥" :style="{ top: '4.5rem', left: '7.85rem' }"/>
          <nav-link to="XiRenGongDao" text="西人工岛" :style="{ top: '1.6rem', left: '11.65rem' }"/>
          <nav-link to="HaiDiSuiDao" text="海底隧道" :style="{ top: '5.1rem', left: '12.15rem' }"/>
          <nav-link to="DongRenGongDao" text="东人工岛" :style="{ top: '2.2rem', left: '14.3rem' }"/>
          <img class="bg-text" src="@/assets/img/navigation_text.png" alt="背景图">
          <nav-bar always/>
          <div class="thinks">
            特别鸣谢
            <span class="info">
              港珠澳大桥管理局：王彦林 唐丽娟 曾小娟 林杨
              <br>南方日报社：张由琼 徐杰
            </span>
          </div>
          <guide-button class="rb" @click="$redirect('/')">返回首页</guide-button>
        </template>
        <template v-if="app.mode === 'dl' && contentVisiable">
          <img class="nav-text" src="@/assets/img/navigation-text.png" alt="nav-text">
          <p class="start">
            <guide-button @click="view">开始参观</guide-button>
          </p>
        </template>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  inject: ['app'],
  data () {
    return {
      guideBtnVisiable: false,
      contentVisiable: true,
    }
  },
  mounted () {
    if (this.app.mode === 'dl') {
      this.$audioD.onended = () => {
        this.guideBtnVisiable = true
      }
      if (this.$route.query.loop) {
        this.playAudio()
      }
    }
  },
  methods: {
    playAudio () {
      if (this.app.mode === 'dl') {
        this.$audioD.loop = false
        this.$audioD.src = require(`../../public/audio/dl/dl01.mp3`)
        this.$audioD.load()
      }
    },
    view () {
      this.contentVisiable = false
      this.$audioD.pause()
      this.$playFullVideo(require('../data/nav-0.mp4'), true)
        .then(_ => this.$playFullVideo(require('../data/nav-1.mp4'), true))
        .then(_ => {
          this.$redirect('/XiRenGongDao')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-text {
  display: inline-block;
  position: absolute;
  top: 0.8rem;
  left: 1.45rem;
  width: 16.3rem;
  height: 7.8rem;
}
.start {
  margin-top: 8.8rem;
  text-align: center;
  .guide-button {
    font-size: 0.48rem;
  }
}
.bg-text {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 19.2rem;
  height: 10.8rem;
}
.thinks {
  position: absolute;
  bottom: 0.25rem;
  left: 0.25rem;
  font-size: 0.18rem;
  color: #00a4c7;
  z-index: 102;
  .info {
    display: none;
  }
  &:hover {
    .info {
      display: block;
      text-align: left;
      position: absolute;
      left: 0;
      bottom: 0.3rem;
      width: 4rem;
      line-height: 0.2rem;
      color: #ccc;
      font-size: 0.14rem;
    }
  }
}
</style>
