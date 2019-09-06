<template>
  <div class="mini-map">
    <router-link class="btn" :style="{ top: `0.87rem`, left: `0.58rem` }" to="/Roaming">大桥漫游</router-link>
    <router-link class="btn" :style="{ top: `1.5rem`, left: `1.12rem` }" to="/JiuZhouQiao">九洲桥</router-link>
    <router-link class="btn" :style="{ top: `0.37rem`, left: `1.62rem` }" to="/JiangHaiQiao">江海桥</router-link>
    <router-link class="btn" :style="{ top: `1.3rem`, left: `1.91rem` }" to="/ShengTaiBaoHu">生态保护</router-link>
    <router-link class="btn" :style="{ top: `0.94rem`, left: `2.43rem` }" to="/QingZhouQiao">青州桥</router-link>
    <router-link class="btn" :style="{ top: `0.05rem`, left: `2.87rem` }" to="/XiRenGongDao">西人工岛</router-link>
    <router-link class="btn" :style="{ top: `0.94rem`, left: `3.27rem` }" to="/HaiDiSuiDao">海底隧道</router-link>
    <router-link class="btn" :style="{ top: `0.05rem`, left: `3.75rem` }" to="/DongRenGongDao">东人工岛</router-link>
  </div>
</template>

<script>
export default {
  name: 'MiniMap',
}
</script>

<style lang="scss" scoped>
.mini-map {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5rem;
  height: 2.06rem;
  background-image: url(../assets/img/mini_map.png);
  background-size: 100% 100%;
}
.btn {
  position: absolute;
  padding: 0.05rem 0.1rem;
  text-decoration: none;
  font-size: 0.16rem;
  color: rgba(0, 0, 0, 0);
}
</style>
