<template>
  <div v-show="show" class="v-player-mask">
    <back v-if="mode === 'zy'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 10000 }" @click.native="close"/>
    <guide-button v-if="mode === 'dl'" class="rb" @click="close">继续</guide-button>
    <div class="v-player-wrap core">
      <v-player ref="player" class="v-player" :options="options"/>
      <div class="core2"/>
    </div>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  name: 'VideoPlayer',
  components: {
    vPlayer: VueDPlayer,
  },
  data () {
    return {
      show: false,
      mode: '',
      options: {
        autoplay: true,
        theme: '#fadfa3',
        loop: false,
        screenshot: false,
        hotkey: true,
        preload: 'auto',
        mutex: true,
      },
      callback () {},
    }
  },
  mounted () {
    const s = this.$refs.player.$el.querySelector('.dplayer-controller .dplayer-setting')
    s.style.display = 'none'
    this.$refs.player.dp.on('canplay', () => {
      if (this.show) {
        this.$refs.player.dp.play()
      }
    })
  },
  methods: {
    play (video, mode) {
      this.mode = mode
      this.show = true
      this.$refs.player.dp.switchVideo(video)
      this.$refs.player.dp.video.load()
    },
    close () {
      this.$refs.player.dp.pause()
      this.show = false
      this.callback()
    },
  },
}
</script>

<style lang="scss" scoped>
.v-player-mask {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.v-player-wrap {
  position: relative;
  width: 14.4rem;
  height: 8.1rem;
  padding: 0.15rem;
  background-color: #3a6aa2;
  .v-player {
    font-size: 0.12rem;
    z-index: 11;
  }
  .dplayer-fulled {
    width: 100%;
    height: 100%;
  }
}

/*四个角效果*/
$borderColor: #60d8fd;
$coreWidth: 0.16rem;
$offset: -0.04rem;
.core {
  position: relative;
  border: 0.02rem solid $borderColor;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: $offset;
    width: $coreWidth;
    height: $coreWidth;
    border: 0.05rem solid $borderColor;
  }
  &:after {
    right: $offset;
    border-left-width: 0;
    border-top-width: 0;
  }
  &:before {
    left: $offset;
    border-right-width: 0;
    border-top-width: 0;
  }
}

.core2 {
  position: absolute;
  top: $offset;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  &:before,
  &:after  {
    content: "";
    display: block;
    position: absolute;
    width: $coreWidth;
    height: $coreWidth;
    border: 0.05rem solid $borderColor;
  }
  &:after {
    left: $offset;
    border-right-width: 0;
    border-bottom-width: 0;
  }
  &:before {
    right: $offset;
    border-left-width: 0;
    border-bottom-width: 0;
  }
}
</style>
