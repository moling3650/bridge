<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
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
export default {
  name: 'JiuZhouQiao',
  data () {
    return {
      imgsVisiable: false,
      opacity: 0,
      textList: [
        '',
        '钢箱梁制造分为板单元制造、箱梁段组拼、桥位吊装三个阶段，其中板单元是基本元件。图为河北山海关的板单元机械化生产车间。',
        '我国自主研发的反变形机器人自动焊接系统，提高了钢箱梁板单元的制造质量。图为机器人焊接板单元',
        '港珠澳大桥钢箱梁板单元制造实现了自动化制造与焊接技术，是世界首创。图为机器人自动化用火焰切割下料。',
        '板单元在山海关批量生产制造完成后，通过海上运输送到广东中山的钢箱梁总拼接基地进行组装。',
        '钢箱梁总拼接基地实现“车间化、机械化、自动化”，是为港珠澳大桥“量身定做”的现代化工厂。图为底板拼装。',
        '钢箱梁就是从一个板单元，一块板一块板地焊接成一个整体。图为钢箱梁正在拼装。',
        '板单元先拼装装为小节段，小节段再拼接为大节段。图为给钢箱梁“梳妆打扮”，打砂除锈，喷漆涂装。',
        '分段完成涂装后，再进行大节段组焊及预拼装。图为拼接完成的大节段。',
        '拥有968个轮子、重达3000吨的运梁车将大节段运出厂房。',
        '首段大节段装船发运。经过海上拖运，一直送到目的地，准备吊装。',
        '图为钢箱梁在海上运输。',
        '图为首跨钢箱梁在深海区的架设成功完成。',
        '整体吊装在原来桥梁建设中极少使用，而港珠澳大桥建设过程中已经成为“家常便饭”。图为海上吊装大节段。',
        '钢箱梁通过巨大的吊具吊装到桥墩上。',
        '2016年4月，851个钢箱梁已经全部安装在桥墩上，再次向世界展示了中国的工程实力。图为钢箱梁合龙中。',
        '从珠海望过去，钢箱梁架设成的港珠澳大桥在海中蜿蜒前进。',
      ],
    }
  },
  computed: {
    images () {
      return this.textList.map((text, index) => {
        return {
          url: require(`../assets/worldlong/${index + 1}.jpg`),
          text: `${index === 0 ? '' : `${index}. `}${text}`,
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
</style>
