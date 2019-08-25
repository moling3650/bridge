<template>
  <div id="app">
    <audio autoplay loop :src="require('./assets/bgmusic.mp3')">
      你的浏览器版本太低，不支持audio标签
    </audio>
    <router-view/>
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
</style>
