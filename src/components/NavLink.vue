<template>
  <router-link class="link" :to="`/${to}`">
    <img class="jpg" :src="require(`@/assets/img/NavLink-${to}.jpg`)" :alt="text" v-bind="$attrs">
    <img class="ring ring-1" src="@/assets/img/ring-1.png" alt="科技框1">
    <img class="ring ring-2" src="@/assets/img/ring-2.png" alt="科技框2">
    <div class="text">{{ text }}</div>
  </router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  position: absolute;
  width: 2rem;
  height: 2rem;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  & > .jpg {
    position: absolute;
    top: .3rem;
    left: .3rem;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
  }
  & > .ring {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  & > .ring-1 {
    animation: spin-left 3s linear infinite;
  }
  & > .ring-2 {
    animation: spin-right 3s linear infinite;
  }
  & > .text {
    position: absolute;
    display: inline-block;
    top: -.4rem;
    left: -1.25rem;
    width: 4rem;
    font-size: .28rem;
    font-weight: 200;
    letter-spacing: 0.05rem;
    color: #eee;
  }
}
@keyframes spin-left {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-90deg); }
  50% { transform: rotate(-180deg); }
  75% { transform: rotate(-270deg); }
  100% { transform: rotate(-360deg); }
}
@keyframes spin-right {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
@media screen and (max-width: 1440px) {
  .link {
    width: 1.4rem;
    height: 1.4rem;
    & > .jpg {
      top: .2rem;
      left: .2rem;
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
