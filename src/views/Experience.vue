<template>
  <div id="Experience">
    <div class="video-wrap" :class="{ blur: btnGroupVisiable }">
      <video
        ref="v"
        :src="require(`../../public/video/Experience.mp4`)"
        autoplay
        @ended="handleEnded"
        @click="$refs.v.play()"
      />
    </div>
    <div v-show="btnGroupVisiable" class="btn-wrap">
      <a class="btn"/>
      <a class="btn" @click="$router.push('/Roaming')"/>
    </div>
    <guide-button v-show="btnVisiable" class="rb" @click="$router.push('/ExhibitionRoom')">继续</guide-button>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data () {
    return {
      btnGroupVisiable: false,
      btnVisiable: false,
    }
  },
  methods: {
    handleEnded () {
      this.btnGroupVisiable = true
      setTimeout(() => {
        this.btnVisiable = true
      }, 10000)
    },
  },
}
</script>

<style lang="scss" scoped>
#Experience {
  position: relative;
  width: 19.2rem;
  height: 10.8rem;
  background-image: url(../../public/img/bg/Experience.jpg);
  background-size: cover;
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
  .btn-wrap {
    position: absolute;
    top: 2.2rem;
    width: 100%;
    height: 5.75rem;
    text-align: center;
    .btn {
      display: inline-block;
      width: 6.5rem;
      height: 5.75rem;
      margin: 0 0.2rem;
      cursor: pointer;
      &:first-child {
        background-image: url(../assets/img/Experience-btn1.png);
        background-size: cover;
      }
      &:last-child {
        background-image: url(../assets/img/Experience-btn2.png);
        background-size: cover;
      }
    }
  }
}
</style>
