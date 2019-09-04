<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="(showVideo || showImages) ? 5 : 0">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '1.1rem', left: '6.3rem' }" text="风帆塔" @click.native="clickDot(1)"/>
        <dot :style="{ top: '4.2rem', left: '10rem' }" text="世界最长的钢铁大桥" @click.native="showImages = true"/>
        <dot :style="{ top: '3.8rem', left: '14.5rem' }" text="桥墩建造" @click.native="$router.push('/QiaoDun')"/>
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
  inject: {
    app: {
      default: () => {
        return null
      },
    },
  },
  data () {
    return {
      showImages: false,
      showVideo: false,
      textList: [
        '1、港珠澳大桥凭借其长达15公里的钢箱梁桥面，成为目前世界上最长的钢铁大桥。图为港珠澳大桥桥梁部分。',
        '2、钢箱梁制造分为板单元制造、箱梁段组拼、桥位吊装三个阶段，其中板单元是基本元件。图为河北山海关的板单元机械化生产车间。',
        '3、我国自主研发的反变形机器人自动焊接系统，提高了钢箱梁板单元的制造质量。图为机器人焊接板单元',
        '4、港珠澳大桥钢箱梁板单元制造实现了自动化制造与焊接技术，是世界首创。图为机器人自动化用火焰切割下料。',
        '5、板单元在山海关批量生产制造完成后，通过海上运输送到广东中山的钢箱梁总拼接基地进行组装。',
        '6、钢箱梁总拼接基地实现“车间化、机械化、自动化”，是为港珠澳大桥“量身定做”的现代化工厂。图为底板拼装。',
        '7、钢箱梁就是从一个板单元，一块板一块板地焊接成一个整体。图为钢箱梁正在拼装。',
        '8、板单元先拼装装为小节段，小节段再拼接为大节段。图为给钢箱梁“梳妆打扮”，打砂除锈，喷漆涂装。',
        '9、分段完成涂装后，再进行大节段组焊及预拼装。图为拼接完成的大节段。',
        '10、拥有968个轮子、重达3000吨的运梁车将大节段运出厂房。',
        '11、首段大节段装船发运。经过海上拖运，一直送到目的地，准备吊装。',
        '12、图为钢箱梁在海上运输。',
        '13、图为首跨钢箱梁在深海区的架设成功完成。',
        '14、整体吊装在原来桥梁建设中极少使用，而港珠澳大桥建设过程中已经成为“家常便饭”。图为海上吊装大节段。',
        '15、钢箱梁通过巨大的吊具吊装到桥墩上。',
        '16、2016年4月，851个钢箱梁已经全部安装在桥墩上，再次向世界展示了中国的工程实力。图为钢箱梁合龙中。',
        '17、从珠海望过去，钢箱梁架设成的港珠澳大桥在海中蜿蜒前进。',
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
      this.app.audio.pause()
      const video = {
        url: require(`../../public/video/dot/1-${index}.mp4`),
      }
      this.showVideo = true
      this.$playVideo(video).then(() => {
        this.showVideo = false
        this.app.audio.play()
      })
    },
  },
}
</script>
