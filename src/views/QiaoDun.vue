<template>
  <div id="QiaoDun">
    <video
      :src="require(`../../public/video/dot/1-3.mp4`)"
      autoplay
      loop
    />
    <div class="btn video-btn" @click="showVideo"/>
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.push({ name: 'JiuZhouQiao', query: { loop: true } })"/>
  </div>
</template>

<script>
export default {
  name: 'QiaoDun',
  methods: {
    showVideo () {
      const video = {
        url: require(`../../public/video/dot/1-3-1.mp4`),
      }
      this.$playVideo(video)
    },
  },
}
</script>

<style lang="scss" scoped>
#QiaoDun {
  width: 19.2rem;
  height: 10.8rem;
  video {
    width: 100%;
    height: 100%;
  }
  .btn {
    width: 3rem;
    height: 0.9rem;
    background-color: #fff;
    cursor: pointer;
  }
  .video-btn {
    position: absolute;
    top: 4.7rem;
    right: 3.2rem;
  }
}
</style>
