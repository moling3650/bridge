<template>
  <div class="back" v-bind="$attrs" @click="$emit('back')"/>
</template>

<script>
export default {
  name: 'Back',
}
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  background-image: url(../assets/img/back.png);
  background-size: contain;
  cursor: pointer;
}
</style>
