
<template>
  <div class="left" v-bind="$attrs" @click="$emit('click')"/>
</template>

<script>
export default {
  name: 'Left',
}
</script>

<style lang="scss" scoped>
.left {
  position: absolute;
  display: block;
  width: 0.55rem;
  height: 1rem;
  z-index: 100;
  background-image: url(../assets/img/left.png);
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.2) translateX(-0.08rem);
  }
}
</style>
