<template>
  <div id="JianSheZhe">
    <back :style="{ top: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem', zIndex: 1000 }" @click.native="$router.push(from)"/>
    <iframe width="100%" height="100%" src="http://news.southcn.com/n/node_395653.htm" frameborder="0"/>
  </div>
</template>

<script>
export default {
  name: 'JianSheZhe',
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
#JianSheZhe {
  width: 19.2rem;
  height: 10.8rem;
}
</style>
