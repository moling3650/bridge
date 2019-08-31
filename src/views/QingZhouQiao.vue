<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar back-and-next/>
        <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="同心结" @click.native="clickDot(1)"/>
        <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏"/>
        <dot :style="{ top: '9.8rem', left: '14rem' }" text="世界最大地面沥青铺装"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        // url: require(`../../public/video/dot/4-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
  },
}
</script>
