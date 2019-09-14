<template>
  <div id="NavEnd">
    <video
      :src="require(`../../public/video/NavEnd.mp4`)"
      autoplay
      @ended="handleEnded"
    />
    <guide-button v-show="guideBtnVisiable" class="rb" @click="$router.push('/ShiJieZhiZui')">港珠澳大桥的世界之最</guide-button>
  </div>
</template>

<script>
export default {
  name: 'NavEnd',
  data () {
    return {
      guideBtnVisiable: false,
    }
  },
  methods: {
    handleEnded () {
      this.guideBtnVisiable = true
    },
  },
}
</script>

<style lang="scss" scoped>
#NavEnd {
  position: relative;
  width: 19.2rem;
  height: 10.8rem;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
