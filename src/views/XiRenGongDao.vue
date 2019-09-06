<template>
  <div id="XiRenGongDao">
    <page page-name="XiRenGongDao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '5rem', left: '7rem' }" text="人工岛透视" @click.native="show('subPage')"/>
        <dot :style="{ top: '5rem', left: '15rem' }" text="人工岛施工图集" @click.native="show('imgs')"/>
        <dot :style="{ top: '7rem', left: '9rem' }" text="世界最大钢圆筒的海上之旅" @click.native="showVideo('5-3')"/>
        <dot :style="{ top: '5rem', left: '11.4rem' }" text="世界首创钢圆筒快速筑岛技术" @click.native="showVideo('5-4')"/>
        <dot :style="{ top: '6rem', left: '5rem' }" text="人工岛设计师专访" @click.native="showVideo('5-2')"/>
        <mini-map/>
      </template>
    </page>
    <video
      v-show="subPageVisiable"
      ref="v"
      class="v"
      :src="require('../../public/video/dot/5-1.mp4')"
      preload="metadata"
      @ended="showDetail = true"
    >
      您的浏览器不支持 video 标签。
    </video>
    <div class="details-des"/>
    <div v-show="showDetail" class="details" :class="bgi">
      <dot :style="{ top: '1.4rem', left: '4.3rem' }" text="主体建筑" @click.native="checkDetail(2)"/>
      <dot :style="{ top: '2.3rem', left: '6.2rem' }" text="隧道入口" @click.native="checkDetail(5)"/>
      <dot :style="{ top: '3.1rem', left: '8.1rem' }" text="环岛公路" @click.native="checkDetail(4)"/>
      <dot :style="{ top: '5rem', left: '6.6rem' }" text="防波堤" @click.native="checkDetail(3)"/>
      <dot :style="{ top: '7rem', left: '7.5rem' }" text="钢圆筒" @click.native="checkDetail(6)"/>
      <back :style="{ bottom: '0.4rem', right: '0.4rem', width: '1rem', height: '1rem' }" @click.native="hide('subPage')"/>
    </div>
    <transition name="fade">
      <Carousel v-show="imgsVisiable" :images="images" @close="hide('imgs')"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'XiRenGongDao',
  data () {
    return {
      imgsVisiable: false,
      subPageVisiable: false,
      showDetail: false,
      opacity: 0,
      bgi: '',
      textList: [
        '港珠澳大桥人工岛施工过程',
        '1、港珠澳大桥人工岛采用的钢圆筒快速成岛法，与传统工艺相比，不但工期短，而且减少淤泥开挖量近千万立方米。图为钢圆筒板单元制作-卷板。',
        '2、港珠澳大桥人工岛建设采用的巨型钢圆筒是世界上最大的钢圆筒。图为钢圆筒的筒体制造-板单元竖向拼接。',
        '3、每一个钢圆筒有17层楼高，直径达22米，跟一个篮球场的面积相当。图中上下两部分合拢即组成一个钢圆筒。',
        '4、为了把钢圆筒顺利从上海运输到珠海，将7万吨到9万吨的远洋运输船改造成了钢圆筒的运输船，这也是将远洋运输船第一次运用到了大型工程上。图为2011年5月27日-西人工岛第二船圆筒运抵珠海。',
        '5、钢圆筒快速成岛法，具体来说，就是把巨型钢圆筒直接插入海底，然后在钢筒合围的中间填土，快速形成人工岛。2011年9月22日-东人工岛首个钢圆筒',
        '6、2011年5月31日-西人工岛钢圆筒筒内回填砂-。',
        '7、副格采用弧形钢板代替钢板桩，止水效果更优良。2011年-11月12日-东人工岛副格振沉场景。',
        '8、2012年5月4日-东人工岛岛内回填砂。',
        '9、2012年7月9日-东人工岛全景。',
        '10、2016年3月17日-东人工岛岛内建设。',
        '11、2017年3月22日-港珠澳大桥西人工岛房建工程。',
        '12、2017年10月18日-港珠澳大桥西人工岛风帽结构顺利封顶。',
        '13、2017年7月28日，西人工岛主体建筑顺利封顶。',
        '14、西人工岛，功能以桥梁的养护服务及办公为主。图为航拍西人工岛。',
      ],
    }
  },
  computed: {
    images () {
      return this.textList.map((text, index) => {
        return {
          url: require(`../assets/XiRenGongDao/${index}.jpg`),
          text,
        }
      })
    },
  },
  methods: {
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
    show (key) {
      this.opacity = 5
      this.$audio.pause()
      this[`${key}Visiable`] = true
      if (key === 'subPage') {
        this.checkDetail(1)
        this.$nextTick(() => {
          this.$refs.v.play()
        })
      }
    },
    hide (key) {
      this.opacity = 0
      this.$audio.play()
      this[`${key}Visiable`] = false
      if (key === 'subPage') {
        this.$refs.v.currentTime = 0
        this.bgi = ''
        this.showDetail = false
      }
    },
    checkDetail (index) {
      this.bgi = `bg-${index}`
    },
  },
}
</script>

<style lang="scss" scoped>
// .details-des {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 19.2rem;
//   height: 10.8rem;
//   z-index: 2;
//   background-image: url(/img/5-1-1.png);
// }
.details,
.v {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 3;
}
.details {
  z-index: 4;
  @for $i from 1 to 7 {
    &.bg-#{$i} {
      background-image: url(../assets/img/5-1-#{$i}.png);
    }
	}
  background-size: 100% 100%;
}
</style>
