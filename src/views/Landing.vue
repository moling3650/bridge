<template>
  <div id="Landing">
    <loader v-show="loadingVisiable" :is-loading="isLoading" @click-start="start"/>
    <page v-show="!loadingVisiable" ref="page" page-name="Start" no-loop can-skip @canplay="isLoading = false" @ended="$router.push(from)"/>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      loadingVisiable: true,
      isLoading: true,
      from: {
        name: this.$route.meta.from || 'home',
      },
    }
  },
  methods: {
    start () {
      this.loadingVisiable = false
      this.$refs.page.play()
    },
  },
}
</script>
