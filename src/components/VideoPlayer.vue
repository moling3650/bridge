<template>
  <div class="v-player-mask">
    <div class="v-player-wrap">
      <i class="close" @click="$emit('close')"/>
      <v-player ref="player" :options="opts"/>
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
  props: {
    autoplay: {
      type: Boolean,
    },
    loop: {
      type: Boolean,
    },
  },
  computed: {
    opts () {
      return {
        autoplay: this.autoplay,
        theme: '#fadfa3',
        loop: this.loop,
        screenshot: false,
        hotkey: true,
        preload: 'auto',
        mutex: true,
      }
    },
  },
  methods: {
    play (video) {
      this.$refs.player.dp.switchVideo(video)
      this.$nextTick(() => {
        this.$refs.player.dp.play()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.v-player-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0,0,0,0.5);
  .v-player-wrap {
    position: relative;
    width: 50%;
    height: 50%;
    align-self: center;
    border: 2px solid #ceffff;
    .dplayer-fulled {
      width: 100%;
      height: 100%;
    }
    .close {
      position: absolute;
      top: -120px;
      right: -120px;
      display: inline-block;
      width: 100px;
      height: 100px;
      background-image: url(../assets/img/back.png);
      background-size: 100%;
      cursor: pointer;
    }
  }
}
</style>
