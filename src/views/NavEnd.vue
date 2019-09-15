<template>
  <div id="NavEnd">
    <div class="video-wrap" :class="{ blur: guideBtnVisiable }">
      <video
        ref="v"
        :src="require(`../../public/video/NavEnd.mp4`)"
        autoplay
        @ended="handleEnded"
        @click="$refs.v.play()"
      />
    </div>
    <guide-button v-show="guideBtnVisiable" class="btn-center" @click="$router.push('/ShiJieZhiZui')">港珠澳大桥的“世界之最”</guide-button>
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
  .video-wrap {
    width: 100%;
    height: 100%;
    &.blur {
      filter: blur(8px);
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
