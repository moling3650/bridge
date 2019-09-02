<template>
  <div id="End">
    <page page-name="End" no-loop autoplay @ended="isEnd = true ">
      <back v-show="isEnd" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.push({ name: 'navigation', query: { loop: true } })"/>
    </page>
  </div>
</template>

<script>
export default {
  name: 'End',
  data () {
    return {
      isEnd: false,
    }
  },
}
</script>
