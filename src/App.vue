<template>
  <div id="app" :style="{ width: `${width}px`, height: `${height}px` }">
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
    }
  },
  data () {
    return {
      showView: true,
      width: 0,
      height: 0,
      bg: null,
      mode: '',
    }
  },
  mounted () {
    this.$video.init()
    this.createBlurBg()
    this.resize()
  },
  methods: {
    createBlurBg () {
      this.bg = document.createElement('DIV')
      this.bg.className = 'blur-bg'
      document.body.appendChild(this.bg)
    },
    resize () {
      this.showView = false
      this.$nextTick(() => {
        const baseRate = 1920 / 1080

        const rate = document.body.clientWidth / document.body.clientHeight
        if (rate > baseRate) {
          this.height = document.body.clientHeight
          this.width = this.height * baseRate
        } else {
          this.width = document.body.clientWidth
          this.height = this.width / baseRate
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
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  position: relative;
  margin: 0 auto;
  .btn-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.2rem 0.4rem;
    font-size: 0.48rem;
  }
}
body {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.rb {
  position: absolute;
  right: 0.25rem;
  bottom: 0.25rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.blur-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-size: contain;
  filter: blur(3px);
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
  &:after {
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
