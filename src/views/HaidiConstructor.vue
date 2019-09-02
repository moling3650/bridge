<template>
  <div class="haidi-constructor">
    <page page-name="HaiDiConstructor" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <section class="btn-wrapper">
          <img class="btn-item icon-one" :src="require('../assets/img/icon-constructor-one.png')">
          <img class="btn-item icon-two" :src="require('../assets/img/icon-constructor-two.png')">
          <img class="btn-item icon-three" :src="require('../assets/img/icon-constructor-three.png')">
          <img class="btn-item icon-four" :src="require('../assets/img/icon-constructor-four.png')">
          <img class="btn-item icon-five" :src="require('../assets/img/icon-constructor-five.png')">
        </section>
        <nav-bar v-show="isLoop" back-and-next/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'HaidiConstructor',
  data () {
    return {
      start: this.$route.query.loop ? 'LoopVideo' : 'Cutscenes',
    }
  },
}
</script>
<style lang="scss" scoped>
  .haidi-constructor {
    height: 100%;
    .btn-wrapper {
      height: 100%;
      position: relative;
      .icon-one {
        width: 2.5rem;
        height: 0.9rem;
        position: absolute;
        top: 1.7rem;
        left: 2.8rem;
      }
      .icon-two {
        width: 2rem;
        height: 1.08rem;
        position: absolute;
        top: 1.1rem;
        left: 7rem;
      }
      .icon-three {
        width: 2.6rem;
        height: .89rem;
        position: absolute;
        top: 1.5rem;
        right: 2rem;
      }
      .icon-four {
        width: 2.5rem;
        height: 1.37rem;
        position: absolute;
        top: 6.7rem;
        left: 9.5rem;
      }
      .icon-five {
        width: 3.3rem;
        height: .88rem;
        position: absolute;
        top: 5.1rem;
        right: .8rem;
      }
    }
  }
</style>
