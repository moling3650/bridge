<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="(showVideo || showImages) ? 5 : 0">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '1.1rem', left: '6.3rem' }" text="风帆塔" @click.native="clickDot(1)"/>
        <dot :style="{ top: '4.2rem', left: '10rem' }" text="世界最长的钢铁大桥" @click.native="showImages = true"/>
        <dot :style="{ top: '3.8rem', left: '14.5rem' }" text="桥墩" @click.native="clickDot(3)"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push({ name: 'navigation', query: { loop: true } })"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/JiangHaiQiao')"/>
      </template>
    </page>
    <transition name="fade">
      <Carousel v-show="showImages" :images="images" @close="showImages = false"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'JiuZhouQiao',
  data () {
    return {
      showImages: false,
      showVideo: false,
      textList: [
        '0、港珠澳大桥凭借其长达15公里的钢箱梁桥面，成为目前世界上最长的钢铁大桥。图为港珠澳大桥桥梁部分',
        '1、钢箱梁制造分为板单元制造、箱梁段组拼、桥位吊装三个阶段，其中板单元是基本元件。图为河北山海关的板单元机械化生产车间。',
        '2、港珠澳大桥钢箱梁板单元制造实现了自动化制造与焊接技术，是世界首创。图为机器人自动化用火焰切割下料。',
      ],
    }
  },
  computed: {
    images () {
      return this.textList.map((text, index) => {
        return {
          url: require(`../assets/worldlong/${index + 1}.jpg`),
          text,
        }
      })
    },
  },
  methods: {
    clickDot (index) {
      const video = {
        url: require(`../../public/video/dot/1-${index}.mp4`),
      }
      this.showVideo = true
      this.$playVideo(video).then(() => {
        this.showVideo = false
      })
    },
  },
}
</script>
