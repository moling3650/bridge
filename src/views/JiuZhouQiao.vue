<template>
  <div id="JiuZhouQiao" :opacity="opacity">
    <page page-name="JiuZhouQiao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
        <dot v-show="isLoop" :style="{ top: '1.1rem', left: '6.3rem' }" text="风帆塔" @click.native="clickDot(1)"/>
        <dot v-show="isLoop" :style="{ top: '4.2rem', left: '10rem' }" text="世界最长的钢铁大桥" @click.native="clickDot(2)"/>
        <dot v-show="isLoop" :style="{ top: '3.8rem', left: '14.5rem' }" text="桥墩" @click.native="clickDot(3)"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'JiuZhouQiao',
  data () {
    return {
      showVPlayer: false,
      opacity: 0,
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        url: require(`../../public/video/JiuZhouQiao/1-b-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
  },
}
</script>
