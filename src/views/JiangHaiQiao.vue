<template>
  <div id="JiangHaiQiao">
    <page page-name="JiangHaiQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <template v-if="app.mode === 'zy'">
          <dot :style="{ top: '2rem', left: '2.7rem' }" text="海豚塔" @click.native="showVideo('2-1')"/>
          <dot :style="{ top: '2rem', left: '9.6rem' }" text="全球首例巨型钢塔翻身吊装" @click.native="showVideo('2-2')"/>
          <dot :style="{ top: '4rem', left: '15rem' }" text="全球首次采用锌－铝合金超强钢丝" @click.native="showVideo('2-3')"/>
          <dot :style="{ top: '2rem', left: '16.5rem' }" text="建设者专访" @click.native="showVideo('2-4')"/>
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
  name: 'JiangHaiQiao',
  inject: ['app'],
  data () {
    return {
      opacity: 0,
      guideBtnVisiable: true,
      guideTextList: [
        '世界最大“海豚”是怎么吊装的 〉',
        '继续 〉',
      ],
      step: 0,
    }
  },
  methods: {
    nextStep () {
      const stepFun = [
        () => this.showVideo('2-2'),
        () => this.$router.push('/QingZhouQiao'),
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
