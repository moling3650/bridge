<template>
  <div id="Roaming">
    <page page-name="Roaming" no-loop autoplay can-skip @ended="$router.back()"/>
  </div>
</template>

<script>
export default {
  name: 'Roaming',
  mounted () {
    this.$audioZ.pause()
    this.$audioD.pause()
  },
}
</script>
