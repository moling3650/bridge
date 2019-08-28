<template>
  <div id="app">
    <audio autoplay loop :src="require('./assets/bgmusic.mp3')">
      你的浏览器版本太低，不支持audio标签
    </audio>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
html,
body,
#app,
#app > div {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
