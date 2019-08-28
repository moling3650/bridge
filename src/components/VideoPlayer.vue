<template>
  <div class="v-player-mask">
    <div class="v-player-wrap">
      <i class="close" @click="$emit('close')">X</i>
      <v-player ref="player" class="v-player" :options="opts"/>
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
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0,0,0,0.5);
}
.v-player-wrap {
  position: relative;
  width: 960px;
  height: 540px;
  border: 15px solid #244852;
  .dplayer-fulled {
    width: 100%;
    height: 100%;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 20px;
    color: #ffffff;
    z-index: 101;
    cursor: pointer;
  }
}
</style>
