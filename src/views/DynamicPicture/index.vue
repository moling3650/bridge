<template>
  <div class="container">
    <div class="wrapper">
      <ul id="sb-slider" class="sb-slider">
        <li v-for="(item, index) in wallpaper" :key="index">
          <a href="http://www.flickr.com/photos/strupler/2969141180" target="_blank">
            <img :src="item" alt="index">
          </a>
          <!-- <div class="sb-description">
            <h3>Creative Lifesaver</h3>
          </div> -->
        </li>
      </ul>

      <div id="shadow" class="shadow"/>
      <div id="nav-arrows" class="nav-arrows">
        <a href="#">Next</a>
        <a href="#">Previous</a>
      </div>
    </div>
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
    }
  },
  mounted () {
    this.initWallArr()
    this.initStart()
  },
  methods: {
    initStart () {
      $(function () {
        const Page = (function () {
          const $navArrows = $('#nav-arrows').hide()
          const $shadow = $('#shadow').hide()
          const slicebox = $('#sb-slider').slicebox({
            onReady: function () {
              $navArrows.show()
              $shadow.show()
            },
            orientation: 'r',
            cuboidsRandom: true,
            disperseFactor: 30,
          })
          const init = function () {
            initEvents()
          }
          const initEvents = function () {
            // add navigation events
            $navArrows.children(':first').on('click', function () {
              slicebox.next()
              return false
            })
            $navArrows.children(':last').on('click', function () {
              slicebox.previous()
              return false
            })
          }
          return { init: init }
        })()
        Page.init()
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
