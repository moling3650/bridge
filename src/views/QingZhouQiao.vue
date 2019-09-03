<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '2.2rem', left: '9.3rem' }" text="中国结" @click.native="clickDot(1)"/>
        <dot :style="{ top: '9rem', left: '3rem' }" text="SS级护栏" @click.native="clickDot(2)"/>
        <dot :style="{ top: '9.3rem', left: '12rem' }" text="世界最大单体钢桥面沥青铺装工程" @click.native="clickDot(3)"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/ShengTaiBaoHu')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/XiRenGongDao')"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    clickDot (index) {
      const video = {
        url: require(`../../public/video/dot/4-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
  },
}
</script>
