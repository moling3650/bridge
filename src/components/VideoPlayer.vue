<template>
  <div class="v-player-mask">
    <div class="v-player-wrap core">
      <i class="close" @click="$emit('close')">X</i>
      <v-player ref="player" class="v-player" :options="opts"/>
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
}
.v-player-wrap {
  position: relative;
  width: 960px;
  height: 540px;
  padding: 15px 15px 50px 15px;
  .dplayer-fulled {
    width: 100%;
    height: 100%;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 20px;
    color: #ffffff;
    z-index: 101;
    cursor: pointer;
  }
  .v-player {
    border-top: 30px solid #04212b;
  }
}

/*四个角效果*/
    .core{
        position: relative;border:2px solid #60D8FD;
    }
    .core:before,.core:after{
        content:"" ;display: block;position: absolute;bottom:-3px;width:16px;height:16px;
    }
    .core:after{
        right:-4px;border:5px solid #60D8FD;border-left-width: 0;border-top-width: 0;
    }
    .core:before{
        left:-4px;border:5px solid #60D8FD;border-right-width: 0;border-top-width: 0;
    }

    .core2{
        position: relative;
        // top: 10px;
        top: -580px;
    }
    .core2:before,.core2:after{
        content:"" ;display: block;position: absolute;bottom:-12px;width:16px;height:16px;
    }
    .core2:after{
        left: -19px;
        border: 5px solid #60D8FD;
        border-right-width: 0;
        border-bottom-width: 0;
    }
    .core2:before{
        right: -19px;
        border: 5px solid #60D8FD;
        border-left-width: 0;
        border-bottom-width: 0;
    }
</style>
