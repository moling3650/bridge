<template>
  <div id="Landing">
    <div class="btn-group">
      <a class="btn" @click.prevent="gotoNavigation('dl')">导览版</a>
      <a class="btn" @click.prevent="gotoNavigation('zy')">自游版</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  inject: {
    app: {
      default: {},
    },
  },
  methods: {
    gotoNavigation (mode) {
      this.app.mode = mode
      this.$router.push({ name: 'navigation' })
    },
  },
}
</script>

<style lang="scss" scoped>
#Landing {
  width: 19.2rem;
  height: 10.8rem;
  background-image: url(../../public/img/bg/Landing.jpg);
  background-size: cover;
  .btn-group {
    position: absolute;
    top: 6.9rem;
    left: 0;
    width: 19.2rem;
    height: 1rem;
    text-align: center;
    .btn {
      display: inline-block;
      width: 2.75rem;
      height: 1rem;
      margin: 0 0.8rem;
      text-indent: -99999px;
      cursor: pointer;
      &:first-child {
        background-image: url(../assets/img/btn-dl.png);
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:last-child {
        background-image: url(../assets/img/btn-zy.png);
        background-size: contain;
      }
    }
  }
}
</style>
