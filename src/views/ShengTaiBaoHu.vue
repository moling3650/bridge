<template>
  <div id="ShengTaiBaoHu">
    <page page-name="ShengTaiBaoHu" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '4rem', left: '12rem' }" text="保护海豚" @click.native="showVideo('3-1')"/>
        <dot :style="{ top: '3.6rem', left: '15.4rem' }" text="一图读懂生态保护" @click.native="showImg"/>
        <mini-map/>
      </template>
    </page>
    <back v-show="show" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="hide"/>
    <transition name="fade">
      <div v-show="show" class="slider core">
        <div ref="longDiv" class="longDiv" style="font-size:0.3rem">
          <img ref="longImg" src="../assets/img/long.jpg" alt="" :style="{ left: `${left}rem` }">
        </div>
        <ul class="direction">
          <left v-show="left < 0" class="left" @click="clickLeft"/>
          <right v-show="left > -88" class="right" @click="clickRight"/>
        </ul>
        <div class="core2"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
  data () {
    return {
      opacity: 0,
      show: false,
      left: 0,
      screenWidth: document.body.clientWidth, // body宽度
      isShow: true,
    }
  },
  methods: {
    showVideo (filename) {
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.$audio.pause()
      this.opacity = 5
      this.$video.play(video).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
    showImg () {
      this.$audio.pause()
      this.opacity = 5
      this.show = true
    },
    hide () {
      this.$audio.play()
      this.opacity = 0
      this.show = false
      this.left = 0
    },
    clickLeft () {
      this.left += 8
    },
    clickRight () {
      this.left -= 8
    },
  },
}
</script>
<style lang="scss" scoped>
.slider {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 101;
  width: 17rem;
  height: 7.5rem;
  transform: translate3d(-50%, -50%, 0);
  background-color: #3a6aa2;
  .longDiv {
    position: absolute;
    top: 0;
    left: 0rem;
    bottom: 0;
    right: 0rem;
    overflow: hidden;
    img {
      position: absolute;
      height: 100%;
      transition: all 1s ease-out;
    }
  }
}

.direction {
  .left,
  .right {
    top: 3.5rem;
    z-index: 20;
    height: 1rem;
    width: 0.55rem;
  }
  .left {
    left: -0.6rem;
  }
  .right {
    right: -0.6rem;
  }
}
</style>
