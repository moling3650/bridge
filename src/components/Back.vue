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
  background-image: url(../assets/img/back.png);
  background-size: contain;
}
</style>
