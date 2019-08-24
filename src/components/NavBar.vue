<template>
  <div id="NavBar">
    <div class="bar-container" @mouseleave="showBar = false">
      <div v-show="showBar" class="bar">
        <router-link :to="{ name: 'navigation', query: { loop: true } }">导航</router-link>
        <router-link to="/">大桥漫游</router-link>
        <router-link to="/">世界之最</router-link>
        <router-link to="/">桥魔方</router-link>
        <router-link to="/">建设者</router-link>
        <router-link to="/">互动</router-link>
      </div>
    </div>
    <img class="display-btn" src="@/assets/img/display-btn.png" alt="显示导航的按钮" @click="showBar = !showBar">
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
}
</style>
