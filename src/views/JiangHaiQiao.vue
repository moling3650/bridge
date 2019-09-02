<template>
  <div id="JiangHaiQiao">
    <page page-name="JiangHaiQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '2rem', left: '2.7rem' }" text="海豚塔" @click.native="clickDot(1)"/>
        <dot :style="{ top: '2rem', left: '9.6rem' }" text="全球首例巨型钢塔翻身吊装" @click.native="clickDot(2)"/>
        <dot :style="{ top: '4rem', left: '15rem' }" text="全球首次采用锌－铝合金超强钢丝" @click.native="clickDot(3)"/>
        <dot :style="{ top: '2rem', left: '16.5rem' }" text="建设者专访" @click.native="clickDot(4)"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/JiuZhouQiao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/ShengTaiBaoHu')"/>
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
        url: require(`../../public/video/dot/2-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
  },
}
</script>
