<template>
  <div id="Experience">
    <div class="btn-wrap">
      <a class="btn"/>
      <a class="btn" @click="$router.push('/Roaming')"/>
    </div>
    <guide-button class="rb" @click="$router.push('/ExhibitionRoom')">继续</guide-button>
  </div>
</template>

<script>
export default {
  name: 'Experience',
}
</script>

<style lang="scss" scoped>
#Experience {
  position: relative;
  width: 19.2rem;
  height: 10.8rem;
  background-image: url(../../public/img/bg/Experience.jpg);
  background-size: cover;
  .btn-wrap {
    position: relative;
    top: 2.2rem;
    height: 5.75rem;
    text-align: center;
    .btn {
      display: inline-block;
      width: 6.5rem;
      height: 5.75rem;
      margin: 0 0.2rem;
      cursor: pointer;
      &:first-child {
        background-image: url(../assets/img/Experience-btn1.png);
        background-size: cover;
      }
      &:last-child {
        background-image: url(../assets/img/Experience-btn2.png);
        background-size: cover;
      }
    }
  }
}
</style>
