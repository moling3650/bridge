<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="opacity" @ended="handleEnd">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <img v-show="showDesc" src="@/assets/img/desc.png" alt="desc" class="desc" @click="showDesc = false">
        <nav-bar/>
        <dot :style="{ top: '6.2rem', left: '3rem' }" text="世界最长跨海大桥" @click.native="$showFrame('http://newscenter.southcn.com/zt/20190902sjbri/index.html')"/>
        <dot :style="{ top: '1.1rem', left: '6.3rem' }" text="风帆塔" @click.native="showVideo('1-1')"/>
        <dot :style="{ top: '4.2rem', left: '10rem' }" text="世界最长的钢铁大桥" @click.native="showImages"/>
        <dot :style="{ top: '3.8rem', left: '14.5rem' }" text="桥墩建造" @click.native="$redirect('/QiaoDun')"/>
        <mini-map/>
      </template>
    </page>
    <transition name="fade">
      <Carousel v-show="imgsVisiable" :images="images" @close="hideImages"/>
    </transition>
  </div>
</template>

<script>
import { images } from '@/assets/worldlong/data'

export default {
  name: 'JiuZhouQiao',
  data () {
    return {
      showDesc: false,
      imgsVisiable: false,
      opacity: 0,
      images,
    }
  },
  methods: {
    handleEnd () {
      this.showDesc = true
    },
    showVideo (filename) {
      this.$audio.pause()
      const video = {
        url: require(`../../public/video/dot/${filename}.mp4`),
      }
      this.opacity = 5
      this.$video.play(video).then(() => {
        this.opacity = 0
        this.$audio.play()
      })
    },
    showImages () {
      this.$audio.pause()
      this.opacity = 5
      this.imgsVisiable = true
    },
    hideImages () {
      this.opacity = 0
      this.imgsVisiable = false
      this.$audio.play()
    },
  },
}
</script>
<style lang="scss" scoped>
.hint{
  position: absolute;
  top: 1.6rem;
  left: 6.9rem;
  cursor: pointer;
  font-size: 0.2rem;
  color: #ddd;
}
.desc {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 1000;
}
</style>
