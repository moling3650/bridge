<template>
  <div id="ShiJieZhiZui">
    <nav-bar/>
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 1000 }" @click.native="$router.push(from)"/>
  </div>
</template>

<script>
export default {
  name: 'ShiJieZhiZui',
  data () {
    return {
      from: {
        name: this.$route.meta.from || 'navigation',
        query: { loop: true },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
#ShiJieZhiZui {
  width: 19.2rem;
  height: 10.8rem;
  background-image: url(../../public/img/bg/world_record.jpg);
  background-size: 100%;
}
</style>
