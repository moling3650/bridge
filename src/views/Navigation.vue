<template>
  <div class="Navigation">
    <page ref="page" page-name="Navigation" can-skip @canplay="play">
      <!-- <template slot-scope="{ isLoop }">
        <router-link v-show="isLoop" class="start" to="/">开始</router-link>
      </template> -->
    </page>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    play () {
      this.$refs.page.play(this.$route.query.loop)
    },
  },
}
</script>
