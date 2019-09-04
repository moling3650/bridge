<template>
  <div id="QiaoDun">
    <video
      :src="require(`../../public/video/dot/1-3.mp4`)"
      autoplay
      loop
      :style="{ filter: `blur(${show === 'main' ? '0px' : '5px' })` }"
    />
    <img class="bg" src="@/assets/img/1-3.png">
    <div class="btn video-btn" @click="showVideo"/>
    <div class="btn atlas-btn" @click="show = 'imgs'"/>
    <div class="btn story-btn" @click="show = 'story'"/>

    <transition name="fade">
      <Carousel v-show="show === 'imgs'" :images="images" @close="show = 'main'"/>
    </transition>
    <max-card v-show="show === 'story'" class="card">
      <h3>发现质量问题，一个奖1000块</h3>
      <p>“我跟工区讲，发现质量问题，一个奖1000块……我这一分钱还没奖出去。”</p>
      <p class="tar">——港珠澳大桥CB05标项目经理谭国顺</p>
      <p>作为港珠澳大桥工程全线年纪最大的工程师，谭国顺参建或主持建设东海大桥、杭州湾跨海大桥、青岛海湾大桥等众多世界著名的跨海桥梁工程。2012年，年逾60岁的谭国顺再次挂帅出征港珠澳大桥CB05标项目。</p>
      <p>港珠澳大桥CB05标有承台及62个底节墩身、13个中间节墩身和62个墩帽，其中首件制承台墩身预计将耗用混凝土867立方米，总重量约2500吨。</p>
      <p>2013年2月21日，中山市翠亨新区预制基地迎来了首件制承台墩身预制。为了提高生产效率，港珠澳大桥承台墩身预制采用工厂化流水线作业方式，在承台钢筋绑扎的同时，墩身钢筋也在绑扎台座上进行绑扎，再一次性整体吊装到承台钢筋台座上进行拼接。</p>
      <p>“我们是最早开始施工的，也是最先完成施工的。”谭国顺表示，在优化作业方式提升效率的同时，对工程质量也非常重视。2013年4月28日，港珠澳大桥技术专家组的6位院士和30多位专家到港珠澳大桥CB05标项目部中山预制基地调研。</p>
      <p>“一个承台墩身多重？”在承台墩身预制区，时任交通运输部总工程师周海涛问道。</p>
      <p>“大概2500吨！”CB05标项目经理谭国顺作答。</p>
      <p>“哦！没有质量问题？”</p>
      <p>“没有！”</p>
      <p>“那个是什么，裂缝？那儿！靠近承台上面！”</p>
      <p>“哦，那个是沙线，不是裂缝，这是在振捣、养护后出现的沙线。我跟工区讲发现质量问题，一个奖1000块，现在打了7个墩，工区技术员、监理、养护工人来来回回检查了好多遍，没发现问题，我这一分钱还没奖出去。”谭国顺笑着说。</p>
    </max-card>
    <back v-show="show === 'story'" :style="{ top: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 101 }" @click.native="show = 'main'"/>

    <back v-show="show === 'main'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.push({ name: 'JiuZhouQiao', query: { loop: true } })"/>
  </div>
</template>

<script>
export default {
  name: 'QiaoDun',
  data () {
    return {
      show: 'main',
      textList: [
        '',
        '2013年2月21日，港珠澳大桥桥梁工程首件混凝土预制墩台完成整体预制。',
        '2013年2月22日，桥梁工程首个承台墩身在项目部中山基地预制完成。',
        '2013年4月11日晚，港珠澳大桥珠澳口岸连接桥第一个承台钢管复合桩钢桩插打成功。',
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
          url: require(`../assets/atlas/${index}.jpg`),
          text,
        }
      })
    },
  },
  methods: {
    showVideo () {
      this.show = 'video'
      const video = {
        url: require(`../../public/video/dot/1-3-1.mp4`),
      }
      this.$video.play(video).then(() => {
        this.show = 'main'
      })
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
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    width: 3rem;
    height: 0.9rem;
    background-color: transparent;
    cursor: pointer;
  }
  .video-btn {
    top: 4.7rem;
    right: 3.2rem;
  }
  .atlas-btn {
    top: 6.2rem;
    right: 3.2rem;
  }
  .story-btn {
    top: 7.7rem;
    right: 3.2rem;
  }
  .card {
    h3 {
      font-size: 0.32rem;
      text-align: center;
    }
    p {
      margin-bottom: 0.06rem;
      font-size: 0.24rem;
      text-indent: 0.48rem;
      line-height: 1.2;
      &.tar {
        text-align: right;
        margin-bottom: 0.12rem;
      }
    }
  }
}
</style>
