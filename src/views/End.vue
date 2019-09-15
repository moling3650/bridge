<template>
  <div id="End">
    <page page-name="End" no-loop autoplay @ended="playAudio">
      <template v-if="isEnd">
        <back v-show="app.mode === 'zy'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.push({ name: 'navigation', query: { loop: true } })"/>
        <ul v-show="app.mode === 'dl' && btnVisiable" class="btn-wrapper">
          <li class="btn-item">
            <guide-button @click="$router.push('/')">返回首页</guide-button>
          </li>
          <li class="btn-item">
            <guide-button @click="$router.push('/navigation')">再看一次</guide-button>
          </li>
        </ul>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'End',
  inject: ['app'],
  data () {
    return {
      isEnd: false,
      btnVisiable: false,
    }
  },
  mounted () {
    if (this.app.mode === 'dl') {
      this.$audioD.onended = () => {
        this.btnVisiable = true
      }
    }
  },
  methods: {
    playAudio () {
      this.isEnd = true
      if (this.app.mode === 'dl') {
        this.$audioD.src = require(`../../public/audio/dl/dl29.mp3`)
        this.$audioD.load()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .btn-wrapper {
    margin-top: 9rem;
    text-align: center;
    .btn-item {
      display: inline-block;
      margin: 0 0.15rem;
      cursor: pointer;
      .guide-button {
        font-size: 0.4rem;
      }
    }
  }
</style>
