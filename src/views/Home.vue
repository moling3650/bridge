<template>
  <div class="home">
    <loader v-show="loadingVisiable" :is-loading="isLoading" @click-start="watchVideo"/>
    <page v-show="!loadingVisiable" ref="page" page-name="Home" can-skip @canplay="showVideo">
      <template slot-scope="{ isLoop }">
        <router-link v-show="isLoop" class="start" to="/navigation">开始参观</router-link>
        <p class="footer-text">指导单位：中共广东省委宣传部 中共广东省委网信办&nbsp;&nbsp;&nbsp;建设单位：南方新闻网</p>
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
  top: 50%;
  font-size: 36px;
  color: #eee;
  text-decoration: none;
}
.footer-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 24px;
  text-align: center;
  color: #eeeeee;
  font-family: SimHei, Microsoft YaHei, serif;
}
</style>
