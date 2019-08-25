<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
        <dot v-show="isLoop" :style="{ top: '13%', left: '33%' }" text="风帆塔" @click.native="clickDot"/>
        <dot v-show="isLoop" :style="{ top: '40%', left: '52%' }" text="世界最长的钢铁大桥"/>
        <dot v-show="isLoop" :style="{ top: '43%', left: '67%' }" text="桥墩"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'JiuZhouQiao',
  methods: {
    clickDot () {
      console.log('a')
    },
  },
}
</script>
