<template>
  <div id="ShengTaiBaoHu">
    <page page-name="ShengTaiBaoHu" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '4rem', left: '12rem' }" text="保护海豚" @click.native="showVideo('3-1')"/>
        <dot :style="{ top: '3.6rem', left: '15.4rem' }" text="一图读懂生态保护" @click.native="showImg"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$redirect('/JiangHaiQiao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$redirect('/QingZhouQiao')"/>
      </template>
    </page>
    <transition name="fade">
      <div v-show="show" ref="longDiv" class="longDiv" style="font-size:0.3rem">
        <img ref="longImg" src="../assets/img/long.jpg" alt="" :style=" {left:`${left}px`}">
        <ul class="direction">
          <li v-show="left < 0" class="left" @click="clickLeft"/>
          <li v-show=" (left > -8828) && isShow" class="right" @click="clickRight"/>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
  data () {
    return {
      opacity: 0,
      show: false,
      left: 0,
      screenWidth: document.body.clientWidth, // body宽度
      num: 10500 / this.screenWidth,
      isShow: true,
    }
  },
  // computed () {

  // },
  // watch: {
  //   // screenWidth (val) {
  //   //   this.screenWidth = val
  //   // },
  //   screenWidth (val) {
  //     // console.log(val)
  //     this.screenWidth = val
  //     this.num = (10500 / this.screenWidth)
  //     console.log(10500 / this.screenWidth)
  //     console.log(this.num)
  //     // if (!this.timer) {
  //     //   this.screenWidth = val
  //     //   this.timer = true
  //     //   const that = this
  //     //   setTimeout(function () {
  //     //     that.timer = false
  //     //   }, 400)
  //     // }
  //   },
  // },
  // created () {
  //   console.log(this.left)
  // },
  // mounted () {
  //   window.onresize = () => {
  //     return (() => {
  //       window.screenWidth = document.body.clientWidth
  //       this.screenWidth = window.screenWidth
  //     })()
  //   }
  // },
  methods: {
    showVideo (filename) {
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.$audio.pause()
      this.opacity = 5
      this.$video.play(video).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
    showImg () {
      this.show = true
    },
    clickLeft () {
      this.left -= -this.screenWidth / 5
      if (this.left > -8828) {
        this.isShow = true
      }
    },
    clickRight () {
      let left1 = this.left
      left1 += -this.screenWidth / 5
      if (left1 < -8828) {
        this.isShow = false
      } else {
        this.left = left1
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.longDiv{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    img{
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      height: 750px;
      transition: all 1s ease-out;
    }
}
.direction {
  .left,
  .right {
    position: absolute;
    top: 4.5rem;
    display: block;
    height: 2rem;
    width: 1.1rem;
    background-size: cover;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  .left {
    left: 2%;
    background-image: url(../assets/img/left.png);
    &:hover{
      transform: scale(1.2) translateX(-0.08rem);
    }
  }
  .right {
    right: 2%;
    background-image: url(../assets/img/right.png);
    &:hover{
      transform: scale(1.2) translateX(0.08rem);
    }
  }
}
</style>
