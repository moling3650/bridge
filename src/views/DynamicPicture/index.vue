<template>
  <div class="container">
    <div class="wrapper">
      <ul id="sb-slider" class="sb-slider" :style="{ maxWidth }">
        <li v-for="(item, index) in wallpaper" :key="index">
          <img :src="item" alt="index">
        </li>
      </ul>

      <div id="shadow" class="shadow"/>
      <div id="nav-arrows" class="nav-arrows">
        <a @click.prevent="slicebox && slicebox.next()">Next</a>
        <a @click.prevent="slicebox && slicebox.previous()">Previous</a>
      </div>
    </div>
    <back :style="{ top: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$redirect('/DongRenGongDao')"/>
  </div>
</template>
<script>
import $ from 'jquery'
require('../../libs/jquery.slicebox')

export default {
  name: 'DynamicPicture',
  data () {
    return {
      wallpaper: [],
      maxWidth: '',
      slicebox: null,
    }
  },
  mounted () {
    this.initWallArr()
    this.initStart()
  },
  methods: {
    initStart () {
      $(() => {
        const $navArrows = $('#nav-arrows').hide()
        const $shadow = $('#shadow').hide()
        this.slicebox = $('#sb-slider').slicebox({
          onReady: () => {
            $navArrows.show()
            $shadow.show()
            this.maxWidth = '100%'
          },
          orientation: 'r',
          cuboidsRandom: true,
          disperseFactor: 30,
        })
      })
    },
    initWallArr () {
      for (let i = 1; i < 31; i++) {
        this.wallpaper.push(require(`../../assets/wallpapers/${i}.jpg`))
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import "./scss/demo.css";
@import "./scss/slicebox.css";
@import "./scss/custom.css";
</style>
