<template>
  <div class="home">
    <page ref="page" page-name="Home" can-skip autoplay>
      <template slot-scope="{ isLoop }">
        <router-link v-show="isLoop" class="start" to="/navigation">
          <img src="@/assets/img/start.png" alt="">
        </router-link>
        <p class="footer-text">
          <img src="@/assets/img/footer-text.png">
        </p>
      </template>
    </page>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.start {
  position: relative;
  display: inline-block;
  top: 5rem;
  width: 3.24rem;
  height: 1.06rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.footer-text {
  position: absolute;
  right: 0;
  bottom: 0.1rem;
  left: 0;
  text-align: center;
  img {
    width: 8rem;
  }
}
</style>
