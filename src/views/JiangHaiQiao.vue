<template>
  <div id="JiangHaiQiao">
    <page page-name="JiangHaiQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar back-and-next/>
        <dot :style="{ top: '2rem', left: '2.3rem' }" text="海豚塔" @click.native="clickDot(1)"/>
        <dot :style="{ top: '2rem', left: '9.2rem' }" text="全球首例巨型钢塔翻身吊装" @click.native="clickDot(2)"/>
        <dot :style="{ top: '4rem', left: '15rem' }" text="全球首次采用锌－铝合金超强钢丝" @click.native="clickDot(3)"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'JiangHaiQiao',
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        // url: require(`../../public/video/dot/2-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
  },
}
</script>
