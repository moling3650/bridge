<template>
  <div class="home">
    <loader v-show="loadingVisiable" :is-loading="isLoading" @click-start="watchVideo"/>
    <page v-show="!loadingVisiable" ref="page" page-name="Home" can-skip @canplay="showVideo">
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
  data () {
    return {
      isLoading: true,
      loadingVisiable: true,
    }
  },
  methods: {
    watchVideo () {
      this.loadingVisiable = false
      this.$refs.page.play()
    },
    showVideo () {
      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.start {
  position: relative;
  display: inline-block;
  top: 50%;
  width: 250px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}
.footer-text {
  position: absolute;
  bottom: 0;
  img {
    width: 60%;
  }
}
</style>
