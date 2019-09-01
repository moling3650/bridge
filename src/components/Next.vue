<template>
  <div class="next" v-bind="$attrs"/>
</template>

<script>
export default {
  name: 'Next',
}
</script>

<style lang="scss" scoped>
.next {
  position: absolute;
  background-image: url(../assets/img/next.png);
  background-size: contain;
}
</style>
