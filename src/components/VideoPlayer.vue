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
  background: #244852;
  .dplayer-fulled {
    width: 100%;
    height: 100%;
  }
  /*关闭图标*/

  .close {
    position: absolute;
    right: -20px;
    top: -20px;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #9e9898;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 0px #000;
    cursor: pointer;
    z-index: 10;
  }

  .close:before,
  .close:after {
    content: '';
    position: absolute;
    top: 14px;
    right: 4px;
    width: 20px;
    height: 2px;
    background: #eee;
  }

  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
}
</style>
