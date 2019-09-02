<template>
  <div id="NavBar">
    <div v-show="always || showBar" class="bar-container" @mouseleave="showBar = false">
      <div class="bar">
        <router-link :to="{ name: 'navigation', query: { loop: true } }"/>
        <router-link to="/Roaming"/>
        <router-link to="/"/>
        <router-link to="/ZhiShiMoFang"/>
        <a href="http://news.southcn.com/n/node_395653.htm"/>
        <!-- <a @click="iframe=true"/> -->
        <router-link to="/JiaoHu"/>
      </div>
    </div>
    <img v-show="!always" class="display-btn" src="@/assets/img/display-btn.png" alt="显示导航的按钮" @click="showBar = !showBar">
    <!-- <iframe
      v-if="iframe"
      src="http://news.southcn.com/n/node_395653.htm"
      width="1200"
      height="300"
      frameborder="0"
      scrolling="auto"
      style="    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;"
    /> -->
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
      // iframe: false,
    }
  },
}
</script>

<style lang="scss" scoped>
#NavBar {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  font-size: 0;
  z-index: 101;
  .bar-container {
    position: relative;
    bottom: .1rem;
    text-align: center;
    .bar {
      display: inline-block;
      width: 8.700rem;
      height: 1.20rem;
      padding-left: .50rem;
      padding-right: .50rem;
      background-image: url(../assets/img/navbar.png);
      background-size: 100% 100%;
      box-sizing: border-box;
      & > a {
        float: left;
        height: 100%;
        width: 16.6%;
      }
    }
  }
  .display-btn {
    width: 1rem;
    cursor: pointer;
  }
}
</style>
