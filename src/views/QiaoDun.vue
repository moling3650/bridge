<template>
  <div id="QiaoDun">
    <video
      :src="require(`../../public/video/dot/1-3.mp4`)"
      autoplay
      loop
    />
    <div class="btn video-btn" @click="showVideo"/>
    <div class="btn atlas-btn" @click="showAtlas">图集atlas</div>

    <transition name="fade">
      <Carousel v-show="showImages" :images="images" @close="showImages = false"/>
    </transition>
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.push({ name: 'JiuZhouQiao', query: { loop: true } })"/>
  </div>
</template>

<script>
export default {
  name: 'QiaoDun',
  data () {
    return {
      showImages: false,
      textList: [
        '2013年2月21日，港珠澳大桥桥梁工程首件混凝土预制墩台完成整体预制。',
        '2013年2月22日，桥梁工程首个承台墩身在项目部中山基地预制完成。',
        '2013年4月11日晚，港珠澳大桥珠澳口岸连接桥第一个承台钢管复合桩钢桩插打成功。_',
        '2013年6月3日，港珠澳大桥首个承台墩身整体顺利安装到位。',
        '2013年6月20日上午12时，港珠澳大桥首个整体埋置式墩台成功安装。',
        '2013年8月26日，港珠澳大桥桥梁工程首个围堰下放到位。',
        '2014年10月8日,桥梁工程13个中间节墩身全部预制完成。',
        '2014年10月18日，桥梁工程承台墩身预制工程圆满完成。',
        '2014年12月14日下午，桥梁工程CB03标桩基施工全部完成。',
        '2015年1月16日，桥梁工程非通航孔桥承台墩身全部安装完成。',
        '2015年9月6日，桥梁工程完成最后一件上节墩身安装，主体工程220座墩台全线完工。',
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
    showVideo () {
      const video = {
        url: require(`../../public/video/dot/1-3-1.mp4`),
      }
      this.$playVideo(video)
    },
    showAtlas () {
      this.showImages = true
    },
  },
}
</script>

<style lang="scss" scoped>
#QiaoDun {
  width: 19.2rem;
  height: 10.8rem;
  video {
    width: 100%;
    height: 100%;
  }
  .btn {
    width: 3rem;
    height: 0.9rem;
    background-color: #fff;
    cursor: pointer;
  }
  .video-btn {
    position: absolute;
    top: 4.7rem;
    right: 3.2rem;
  }
  .atlas-btn{
    position: absolute;
    top: 5.7rem;
    right: 3.2rem;
    font-size: .5rem;
    text-align: center;
  }
}
</style>
