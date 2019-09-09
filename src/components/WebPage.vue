<template>
  <div v-show="visiable" id="WebPage">
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 10000 }" @click.native="close"/>
    <iframe v-if="visiable" width="100%" height="100%" :src="src" frameborder="0"/>
  </div>
</template>

<script>
export default {
  name: 'WebPage',
  data () {
    return {
      visiable: false,
      src: '',
      callback: {},
    }
  },
  methods: {
    show () {
      if (this.$audio) {
        this.$audio.pause()
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
#WebPage {
  position: absolute;
  top: 0;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 9999;
  background: #fff;
}
</style>
