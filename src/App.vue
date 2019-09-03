<template>
  <div id="app" :style="{ position: 'absolute', width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`, }">
    <!-- <audio autoplay loop :src="require('./assets/bgmusic.mp3')">
      你的浏览器版本太低，不支持audio标签
    </audio> -->
    <transition name="fade" mode="out-in">
      <router-view v-if="showView"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      app: this,
      // 提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
    }
  },
  data () {
    return {
      showView: true,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      audio: document.createElement('AUDIO'),
    }
  },
  mounted () {
    this.resize()
  },
  methods: {
    resize () {
      this.showView = false
      this.$nextTick(() => {
        const baseRate = 1920 / 1080

        const rate = document.body.clientWidth / document.body.clientHeight
        if (rate > baseRate) {
          this.height = document.body.clientHeight
          this.width = this.height * baseRate
          this.left = ~~((document.body.clientWidth - this.width) / 2)
        } else {
          this.width = document.body.clientWidth
          this.height = this.width / baseRate
          this.top = (document.body.clientHeight - this.height) / 2
        }
        document.documentElement.style.fontSize = 100 * (this.width / 1920) + 'px'
        this.showView = true
      })
    },
  },
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  position: relative;
  margin: 0 auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.blur {
  filter: blur(3px);
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url(../public/img/bg/grid.png);
    background-size: contain;
    z-index: 11;
  }
}
</style>
