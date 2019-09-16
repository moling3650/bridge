<template>
  <div v-show="visiable" class="x-video-wrap">
    <video
      ref="x"
      class="x-video"
      :src="src"
      preload="auto"
      @canplay="$refs.x.play()"
      @ended="handleEnded"
    />
    <guide-button v-show="btnVisiable" class="rb" @click="close">继续</guide-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visiable: false,
      btnVisiable: false,
      auto: false,
      src: '',
      callback () {},
    }
  },
  methods: {
    play (src, auto) {
      this.auto = !!auto
      this.src = src
      this.$refs.x.load()
      this.visiable = true
    },
    handleEnded () {
      if (this.auto) {
        this.close()
      } else {
        this.btnVisiable = true
      }
    },
    close () {
      this.$refs.x.pause()
      this.visiable = false
      this.btnVisiable = false
      this.callback()
    },
  },
}
</script>

<style lang="scss" scoped>
.x-video-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 1000;
  .x-video {
    width: 100%;
    height: 100%;
  }
}
</style>
