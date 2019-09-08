<template>
  <div id="NavBar">
    <transition name="fade">
      <div v-show="always || showBar" class="bar-container" @mouseleave="showBar = false">
        <div class="bar">
          <div @click="$route.name !== 'navigation' && $redirect('/navigation')"/>
          <div @click="$redirect('/Roaming')"/>
          <div @click="$redirect('/ShiJieZhiZui')"/>
          <div @click="$redirect('/ZhiShiMoFang')"/>
          <div @click="$showFrame('http://news.southcn.com/n/node_395653.htm')"/>
          <div @click="$redirect('/JiaoHu')"/>
        </div>
      </div>
    </transition>
    <img
      v-show="!always"
      class="display-btn"
      :src="require(`@/assets/img/display-btn${showBar ? '-show' : ''}.png`)"
      alt="显示导航的按钮"
      @click="showBar = !showBar"
    >
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    always: {
      type: Boolean,
    },
  },
  data () {
    return {
      showBar: false,
    }
  },
}
</script>

<style lang="scss" scoped>
#NavBar {
    position: absolute;
    text-align: center;
    bottom: 0;
    font-size: 0;
    z-index: 101;
    text-align: center;
    left: 50%;
    transform: translate(-50%);
  .bar-container {
    position: relative;
    bottom: .1rem;
    text-align: center;
    // .bar {
    //   display: inline-block;
    //   width: 8.700rem;
    //   height: 1.20rem;
    //   padding-left: .50rem;
    //   padding-right: .50rem;
    //   background-image: url(../assets/img/navbar.png);
    //   background-size: 100% 100%;
    //   box-sizing: border-box;
    //   & > a {
    //     float: left;
    //     height: 100%;
    //     width: 16.6%;
    //      transition: all 0.3s ease-out;
    //     &:hover{
    //       transform: scale(1.2) translateX(-0.08rem);
    //     }
    //   }
    // }
    .bar {
      display: inline-block;
      // width: 8.700rem;
      // height: 1.20rem;
      // padding-left: .50rem;
      // padding-right: .50rem;
      // background-image: url(../assets/img/navbar.png);
      width: 7.7rem;
      height: 1.2rem;
      padding: 0.21rem 0.5rem;
      background-image: url(../assets/img/navbar.png);
      background-size: 100% 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      // & > a {
      & > div {
        float: left;
        height: 100%;
        // width: 16.6%;
        width: 14.66%;
        margin: 0 1%;
        background-size: 100% 100%;
        box-sizing: border-box;
        cursor: pointer;
        z-index: 1;
        transition: all 0.3s ease-out;
        &:hover {
          transform: scale(1.15) translateY(-0.03rem);
        }
      }
      & > div:nth-child(1) {
        background-image: url(../assets/img/navigation.png);
      }
      & > div:nth-child(2) {
        background-image: url(../assets/img/Roaming.png);
      }
      & > div:nth-child(3) {
        background-image: url(../assets/img/wordfirst.png);
      }
      & > div:nth-child(4) {
        background-image: url(../assets/img/ZhiShiMoFang.png);
      }
      & > div:nth-child(5) {
        background-image: url(../assets/img/JianSheDaShiJi.png);
      }
      & > div:nth-child(6) {
        background-image: url(../assets/img/JiaoHu.png);
      }
    }
  }
  .display-btn {
    width: 1rem;
    cursor: pointer;
  }
}
</style>
