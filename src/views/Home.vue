<template>
  <div class="home">
    <loader :is-loading="false" @click-start="watchVideo"/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    watchVideo () {
      console.log('a')
    },
  },
}
</script>
