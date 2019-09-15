<template>
  <div id="Landing">
    <video v-show="showVideo" ref="v" src="../../public/video/Landing.mp4" @ended="showVideo = false" @click="$refs.v.play()"/>
    <div v-show="!showVideo" class="btn-group">
      <a class="btn" @click.prevent="gotoNavigation('dl')">导览版</a>
      <a class="btn" @click.prevent="gotoNavigation('zy')">自游版</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  inject: {
    app: {
      default: {},
    },
  },
  data () {
    return {
      showVideo: true,
    }
  },
  methods: {
    gotoNavigation (mode) {
      this.app.mode = mode
      if (mode === 'dl') {
        this.$router.push({ name: 'navigation', query: { loop: false }})
      } else if (mode === 'zy') {
        this.$router.push({ name: 'navigation', query: { loop: true }})
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#Landing {
  width: 19.2rem;
  height: 10.8rem;
  background-image: url(../../public/img/bg/Landing.jpg);
  background-size: cover;
  video {
    width: 100%;
    height: 100%;
  }
  .btn-group {
    position: absolute;
    top: 6.9rem;
    left: 0;
    width: 19.2rem;
    height: 1rem;
    text-align: center;
    .btn {
      display: inline-block;
      width: 2.75rem;
      height: 1rem;
      margin: 0 0.8rem;
      text-indent: -99999px;
      cursor: pointer;
      &:first-child {
        background-image: url(../assets/img/btn-dl.png);
        background-repeat: no-repeat;
        background-size: cover;
        &:hover {
          background-image: url(../assets/img/btn-dl-d.png);
        }
      }
      &:last-child {
        background-image: url(../assets/img/btn-zy.png);
        background-size: cover;
        &:hover {
          background-image: url(../assets/img/btn-zy-d.png);
        }
      }
    }
  }
}
</style>
