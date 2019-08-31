<template>
  <div id="NavBar">
    <div v-show="showBar" class="bar-container" @mouseleave="showBar = false">
      <div class="bar">
        <router-link :to="{ name: 'navigation', query: { loop: true } }"/>
        <router-link to="/Roaming"/>
        <router-link to="/"/>
        <router-link to="/ZhiShiMoFang"/>
        <!-- <a href="http://news.southcn.com/n/node_395653.htm"/> -->
        <router-link to="/JianSheDaShiJi"/>
        <router-link to="/JiaoHu"/>
      </div>
      <router-link v-show="backAndNext" class="back" :to="to.back">
        <img src="@/assets/img/back.png" alt="返回">
      </router-link>
      <router-link v-show="backAndNext" class="next" :to="to.next">
        <img src="@/assets/img/next.png" alt="前进">
      </router-link>
    </div>
    <img class="display-btn" src="@/assets/img/display-btn.png" alt="显示导航的按钮" @click="showBar = !showBar">
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
        '/DongRenGongDao',
        '/HaiDiSuiDao',
        '/XiRenGongDao',
      ],
    }
  },
  computed: {
    to () {
      const index = this.urls.findIndex(u => u === this.$route.path)
      const back = index > 0 ? this.urls[index - 1] : { name: 'navigation', query: { loop: true }}
      const next = index !== this.urls.length - 1 ? this.urls[ index + 1] : '/End'
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
  .bar-container {
    margin-bottom: .1rem;
    text-align: center;
    .bar {
      display: inline-block;
      width: 7rem;
      height: 1.2rem;
      padding: 0 0.5rem;
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
  .back ,
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
    right: .2rem;
  }
}
</style>
