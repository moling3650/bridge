<template>
  <div id="NavBar">
    <div v-show="showBar" class="bar-container" @mouseleave="showBar = false">
      <div class="bar">
        <router-link :to="{ name: 'navigation', query: { loop: true } }">导航</router-link>
        <router-link to="/Roaming">大桥漫游</router-link>
        <router-link to="/">世界之最</router-link>
        <router-link to="/">桥魔方</router-link>
        <router-link to="/">建设者</router-link>
        <router-link to="/">互动</router-link>
      </div>
      <router-link v-show="backAndNext" class="back" :to="to.back">
        <img src="@/assets/img/back.png" alt="返回">
        <span class="text">返回</span>
      </router-link>
      <router-link v-show="backAndNext" class="next" :to="to.next">
        <img src="@/assets/img/next.png" alt="前进">
        <span class="text">前进</span>
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
  .bar-container {
    margin-bottom: 10px;
    text-align: center;
    .bar {
      display: inline-block;
      width: 600px;
      height: 120px;
      background-image: url(../assets/img/navbar.png);
      background-size: 100% 100%;
      & > a {
        float: left;
        height: 100%;
        width: 16.6%;
        font-size: 24px;
        color: #eeeeee;
        line-height: 120px;
        text-decoration: none;
      }
    }
  }
  .display-btn {
    width: 100px;
    cursor: pointer;
  }
  .back ,
  .next {
    position: absolute;
    display: inline-block;
    width: 120px;
    height: 120px;
    font-size: 24px;
    color: #eeeeee;
    text-decoration: none;
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      position: relative;
      top: -50px;
    }

  }
  .back {
    top: 0;
    right: 150px;
  }
  .next {
    top: 0;
    right: 20px;
  }
}
</style>
