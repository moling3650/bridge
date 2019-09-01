<template>
  <div id="NavBar">
    <transition name="fade">
      <div v-show="showBar" class="bar-container" @mouseleave="showBar = false">
        <div class="bar">
          <router-link tag="div" :to="{ name: 'navigation', query: { loop: true } }"/>
          <router-link tag="div" to="/Roaming"/>
          <router-link tag="div" to="/"/>
          <router-link tag="div" to="/ZhiShiMoFang"/>
          <!-- <a href="http://news.southcn.com/n/node_395653.htm"/> -->
          <router-link tag="div" to="/JianSheDaShiJi"/>
          <router-link tag="div" to="/JiaoHu"/>
        </div>
        <router-link v-show="backAndNext" class="back" :to="to.back">
          <img src="@/assets/img/back.png" alt="返回">
        </router-link>
        <router-link v-show="backAndNext" class="next" :to="to.next">
          <img src="@/assets/img/next.png" alt="前进">
        </router-link>
      </div>
    </transition>
    <img
      class="display-btn"
      src="@/assets/img/display-btn.png"
      alt="显示导航的按钮"
      @click="showBar = !showBar"
    >
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    backAndNext: {
      type: Boolean,
    },
  },
  data () {
    return {
      showBar: false,
      urls: [
        '/JiuZhouQiao',
        '/JiangHaiQiao',
        '/ShengTaiBaoHu',
        '/QingZhouQiao',
        '/XiRenGongDao',
        '/HaiDiSuiDao',
        '/DongRenGongDao',
      ],
    }
  },
  computed: {
    to () {
      const index = this.urls.findIndex(u => u === this.$route.path)
      const back =
        index > 0
          ? this.urls[index - 1]
          : { name: 'navigation', query: { loop: true }}
      const next =
        index !== this.urls.length - 1 ? this.urls[index + 1] : '/End'
      return {
        back,
        next,
      }
    },
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
    margin-bottom: 0.1rem;
    text-align: center;
    .bar {
      display: inline-block;
      width: 7.7rem;
      height: 1.2rem;
      padding: 0.18rem 0.4rem;
      background-image: url(/img/jiaohunavbar.a22f457f.png);
      background-size: 100% 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      & > div {
        float: left;
        height: 100%;
        width: 14.66%;
        margin: 0 1%;
        background-size: 100% 100%;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.3s ease-out;
        &:hover {
          transform: scale(1.1) translateY(-0.03rem);
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
  .back,
  .next {
    position: absolute;
    top: 0;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    text-decoration: none;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .back {
    right: 1.5rem;
  }
  .next {
    right: 0.2rem;
  }
}
</style>
