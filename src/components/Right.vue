<template>
  <div class="right" v-bind="$attrs" @click="$emit('click')"/>
</template>

<script>
export default {
  name: 'Right',
}
</script>

<style lang="scss" scoped>
.right {
  position: absolute;
  display: block;
  width: 0.55rem;
  height: 1rem;
  z-index: 100;
  background-image: url(../assets/img/right.png);
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.2) translateX(0.08rem);
  }
}
</style>
