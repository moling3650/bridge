<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="中国结" @click.native="showVideo('4-1')"/>
          <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏" @click.native="showVideo('4-2')"/>
          <dot :style="{ top: '9.3rem', left: '12rem' }" text="世界最大单体钢桥面沥青铺装工程" @click.native="showVideo('4-3')"/>
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
export default {
  name: 'QingZhouQiao',
  inject: ['app'],
  data () {
    return {
      opacity: 0,
      guideBtnVisiable: true,
      guideTextList: [
        '世界最大钢桥面铺装 〉',
        '港珠澳大桥的护栏有多牛 〉',
        '继续 〉',
      ],
      step: 0,
    }
  },
  methods: {
    nextStep () {
      const stepFun = [
        () => this.showVideo('4-3'),
        () => this.showVideo('4-2'),
        () => this.$router.push('/ShengTaiBaoHu'),
      ]
      stepFun[this.step]()
      this.step++
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
