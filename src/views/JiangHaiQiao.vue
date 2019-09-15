<template>
  <div id="JiangHaiQiao">
    <page ref="page" page-name="JiangHaiQiao" autoplay can-skip :opacity="opacity" @ended="playAudio">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '2rem', left: '2.7rem' }" text="海豚塔" @click.native="showVideo('2-1')"/>
          <dot :style="{ top: '2rem', left: '9.6rem' }" text="全球首例巨型钢塔翻身吊装" @click.native="showVideo('2-2')"/>
          <dot :style="{ top: '4rem', left: '15rem' }" text="全球首次采用锌－铝合金超强钢丝" @click.native="showVideo('2-3')"/>
          <dot :style="{ top: '2rem', left: '16.5rem' }" text="建设者专访" @click.native="showVideo('2-4')"/>
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
export default {
  name: 'JiangHaiQiao',
  inject: ['app'],
  data () {
    return {
      opacity: 0,
      guideBtnVisiable: false,
      guideTextList: [
        '世界最大“海豚”是怎么吊装的',
        '世界最大单体钢桥面铺装',
        '港珠澳大桥的护栏有多牛',
        '全球首次采用锌-铝合金镀层超强钢丝',
      ],
      step: 0,
      soundList: [
        'dl19',
        'dl20',
        'dl21',
        'dl22',
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
      if (this.step || this.$route.query.loop) {
        this.playAudio()
      }
    }
  },
  methods: {
    playAudio () {
      if (this.app.mode === 'dl') {
        if (this.step < this.soundList.length) {
          const filename = this.soundList[this.step]
          if (filename) {
            this.$audioD.loop = false
            this.$audioD.src = require(`../../public/audio/dl/${filename}.mp3`)
            this.$audioD.load()
          } else {
            this.guideBtnVisiable = true
          }
        } else {
          this.$router.push({ name: 'ShengTaiBaoHu', query: { loop: true }})
        }
      }
    },
    nextStep () {
      const stepFun = [
        () => this.showVideo('2-2'),
        () => this.showVideo('4-3'),
        () => this.showVideo('4-2'),
        () => this.showVideo('2-3'),
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
  },
}
</script>
