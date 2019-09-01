<template>
  <div id="HaiDiSuiDao">
    <page page-name="HaiDiSuiDao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <dot :style="{ top: '5.2rem', left: '3rem' }" text="世界最长、最深的海底沉管隧道" @click.native="clickDot(1)"/>
        <dot :style="{ top: '5.7rem', left: '6.7rem' }" text="世界最重沉管" @click.native="clickDot(2)"/>
        <dot :style="{ top: '5.7rem', left: '10.7rem' }" text="世界首次实现沉管隧道滴水不漏" @click.native="clickDot(3)"/>
        <dot :style="{ top: '5.6rem', left: '15.6rem' }" text="世界最精准的沉管对接" @click.native="clickDot(4)"/>
        <dot :style="{ top: '4.4rem', left: '15.9rem' }" text="建设者专访：岛隧项目总工程师 林鸣" @click.native="clickDot(5)"/>
        <dot :style="{ top: '7.5rem', left: '13rem' }" text="建设者专访：混凝土超级配方打造者 张宝兰" @click.native="clickDot(6)"/>
        <nav-bar/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/XiRenGongDao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/DongRenGongDao')"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'HaiDiSuiDao',
  data () {
    return {
      opacity: 0,
    }
  },
  methods: {
    clickDot (index) {
      if (index < 5 && index !== 2) {
        return
      }
      const video = {
        url: require(`../../public/video/dot/6-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
  },
}
</script>
