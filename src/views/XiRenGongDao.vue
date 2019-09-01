<template>
  <div id="XiRenGongDao">
    <page page-name="XiRenGongDao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '5rem', left: '7rem' }" text="人工岛透视" @click.native="clickDot(1)"/>
        <dot :style="{ top: '5rem', left: '15rem' }" text="人工岛施工图集" @click.native="clickDot(5)"/>
        <dot :style="{ top: '7rem', left: '9rem' }" text="世界最大钢圆筒的海上之旅" @click.native="clickDot(3)"/>
        <dot :style="{ top: '5rem', left: '11.4rem' }" text="世界首创钢圆筒快速筑岛技术" @click.native="clickDot(4)"/>
        <dot :style="{ top: '6rem', left: '5rem' }" text="人工岛设计师专访" @click.native="clickDot(2)"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/QingZhouQiao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/HaiDiSuiDao')"/>
      </template>
    </page>
    <video
      v-show="show"
      ref="v"
      class="v"
      :src="require('../../public/video/dot/5-1.mp4')"
      preload="metadata"
      @ended="showDetail = true"
    >
      您的浏览器不支持 video 标签。
    </video>
    <div v-show="showDetail" class="details" :class="bgi">
      <dot :style="{ top: '1.4rem', left: '4.3rem' }" text="主体建筑" @click.native="checkDetail(1)"/>
      <dot :style="{ top: '2.3rem', left: '6.2rem' }" text="隧道入口" @click.native="checkDetail(2)"/>
      <dot :style="{ top: '3.1rem', left: '8.1rem' }" text="环岛公路" @click.native="checkDetail(5)"/>
      <!-- <dot :style="{ top: '3.8rem', left: '5.7rem' }" text="环岛公路" @click.native="checkDetail(4)"/> -->
      <dot :style="{ top: '5rem', left: '6.6rem' }" text="防波堤" @click.native="checkDetail(3)"/>
      <dot :style="{ top: '7rem', left: '7.5rem' }" text="钢圆筒" @click.native="checkDetail(6)"/>
      <back :style="{ bottom: '0.4rem', right: '0.4rem', width: '1rem', height: '1rem' }" @click.native="goback"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiRenGongDao',
  data () {
    return {
      show: false,
      showDetail: false,
      opacity: 0,
      bgi: '',
    }
  },
  methods: {
    goback () {
      this.$refs.v.currentTime = 0
      this.bgi = ''
      this.showDetail = false
      this.show = false
    },
    clickDot (index) {
      if (index === 1) {
        this.show = true
        this.$nextTick(() => {
          this.$refs.v.play()
        })
        return
      }
      const video = {
        url: require(`../../public/video/dot/5-${index}.mp4`),
      }
      this.opacity = 5
      this.$playVideo(video).then(() => {
        this.opacity = 0
      })
    },
    checkDetail (index) {
      this.bgi = `bg-${index}`
    },
  },
}
</script>

<style lang="scss" scoped>
.details,
.v {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 2;
}
.details {
  z-index: 3;
  @for $i from 1 to 7 {
    &.bg-#{$i} {
      background-image: url(../assets/img/5-1-#{$i}.png);
    }
	}
  background-size: 100% 100%;
}
</style>
