<template>
  <router-link class="link" :to="`/${to}`">
    <img class="jpg" :src="require(`@/assets/img/NavLink-${to}.jpg`)" :alt="text" v-bind="$attrs">
    <img class="png" src="@/assets/img/ring.png" alt="科技框">
    <span class="text">{{ text }}</span>
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
  width: 200px;
  height: 200px;
  & > .jpg {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  & > .png {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: spin 1s linear infinite;
  }
  & > .text {
    position: absolute;
    top: -20%;
    left: 30%;
    font-size: 24px;
    color: #4ec6ff;
  }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
@media screen and (max-width: 1440px) {
  .link {
    width: 140px;
    height: 140px;
    & > .jpg {
      top: 20px;
      left: 20px;
      width: 100px;
      height: 100px;
    }
  }
}
</style>
