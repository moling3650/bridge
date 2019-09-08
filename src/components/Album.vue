<template>
  <div v-show="visiable" id="Album">
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 10000 }" @click.native="close"/>
    <Carousel ref="carousel" :images="images"/>
  </div>
</template>

<script>
export default {
  name: 'Album',
  data () {
    return {
      visiable: false,
      images: [],
      callback: {},
    }
  },
  methods: {
    show () {
      if (this.$audio) {
        this.$audio.pause()
      }
      this.$refs.carousel.reset()
      this.visiable = true
    },
    close () {
      this.visiable = false
      this.callback()
    },
  },
}
</script>

<style lang="scss" scoped>
#Album {
  position: absolute;
  top: 0;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 9999;
}
</style>
