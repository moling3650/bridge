<template>
  <a class="guide-btn" v-bind="$attrs" @click="$emit('click')">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'GuideButton',
}
</script>

<style lang="scss" scoped>
.guide-btn {
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  display: inline-block;
  padding: 0.15rem 0.25rem;
  border-radius: 0.1rem;
  font-size: 0.24rem;
  color: #fff;
  text-decoration: none;
  background-color: #2e77d3;
  cursor: pointer;
}
</style>
