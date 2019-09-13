<template>
  <div id="Landing">
    <div class="btn-group">
      <a class="btn"/>
      <a class="btn" @click.prevent="$router.push('/navigation')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
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
      width: 2.8rem;
      height: 1rem;
      margin: 0 0.8rem;
      cursor: pointer;
      &:first-child {
        background-image: url(../assets/img/btn-dl.png);
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
