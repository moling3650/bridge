<template>
  <div id="MaxCard" @click="close">
    <div class="main">
      <div class="MaxCardBorder"/>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaxCard',
  data () {
    return {}
  },
  methods: {
    close () {
      this.$emit('close', false)
    },
  },
}
</script>
<style lang="scss" scoped>
#MaxCard {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  .main {
    width: 8.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    background: #6fcaee;
    padding: 0.5rem;
    border-radius: 20px;
    background: radial-gradient(
      rgba(101, 172, 218, 0.6),
      rgba(101, 172, 218, 0.9),
      #6fcaee
    );
    .MaxCardBorder {
      border: 0.03rem solid #6fcaee;
      position: absolute;
      top: -0.15rem;
      left: -0.15rem;
      right: -0.15rem;
      bottom: -0.15rem;
      border-radius: 30px;
      z-index: -1;
    }
    h3 {
      font-size: 0.3rem;
      margin-bottom: 0.3rem;
      line-height: 0.45rem;
    }
    .left {
      float: left;
      width: 5.2rem;
      font-size: 0.25rem;
      line-height: 0.4rem;
    }
    .right {
      float: right;
      &>img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
</style>
