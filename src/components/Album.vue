<template>
  <div v-if="visiable" id="Album">
    <Carousel ref="carousel" :images="images"/>
    <back v-if="mode === 'zy'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 10000 }" @click.native="close"/>
    <guide-button v-if="mode === 'dl'" class="rb" @click="close">继续</guide-button>
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
      mode: 'zy',
    }
  },
  methods: {
    show () {
      if (this.$audioZ && this.mode === 'zy') {
        this.$audioZ.pause()
      }
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
