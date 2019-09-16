<template>
  <div id="Landing" :class="bgClass">
    <video v-show="showVideo" ref="v" src="../../public/video/Landing.mp4" @ended="showVideo = false" @click="play"/>
    <p v-show="showVideo && !played" class="tips">点击任意位置开始</p>
    <div v-show="!showVideo" class="logo-wrap">
      <img class="logo" src="../assets/img/logo.png" alt="logo">
    </div>
    <div v-show="!showVideo" class="btn-group">
      <a class="btn" @click.prevent="gotoNavigation('dl')">导览版</a>
      <a class="btn" @click.prevent="gotoNavigation('zy')">自游版</a>
    </div>
    <p v-show="!showVideo" class="footer">
      <span>指导单位：中共广东省委宣传部 中共广东省委网信办</span>
      <span>建设单位：南方新闻网</span>
    </p>
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
      played: false,
      showVideo: !this.$route.meta.skip && true,
      index: 0,
      timer: null,
    }
  },
  computed: {
    bgClass () {
      return `bg-${this.index}`
    },
  },
  mounted () {
    this.timer = setInterval(() => {
      this.index++
      this.index %= 5
    }, 2000)
  },
  methods: {
    play () {
      this.played = true
      this.$refs.v.play()
    },
    gotoNavigation (mode) {
      clearInterval(this.timer)
      this.app.mode = mode
      localStorage.setItem('__mode__', mode)
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
  transition: all 0.5s ease-out;
  &.bg-0 {
    background-image: url(../assets/bg/0.jpg);
    background-size: cover;
  }
  &.bg-1 {
    background-image: url(../assets/bg/1.jpg);
    background-size: cover;
  }
  &.bg-2 {
    background-image: url(../assets/bg/2.jpg);
    background-size: cover;
  }
  &.bg-3 {
    background-image: url(../assets/bg/3.jpg);
    background-size: cover;
  }
  &.bg-4 {
    background-image: url(../assets/bg/4.jpg);
    background-size: cover;
  }
  .logo-wrap {
    position: absolute;
    top: 1.55rem;
    right: 0;
    left: 0;
    text-align: center;
    height: 3.9rem;
    .logo {
      width: 9.8rem;
      height: 100%;
    }
  }
  .tips {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    font-size: 0.2rem;
    color: #eee;
  }
  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.2rem;
    font-size: 0.2rem;
    text-align: center;
    color: #eee;
    background-color: #002e6a;
    opacity: 0.8;
    span {
      display: inline-block;
      margin: 0 0.2rem;
    }
  }
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
