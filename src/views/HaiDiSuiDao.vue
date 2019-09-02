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
    <transition name="fade">
      <MaxCard v-show="show" @close="close">
        <div>
          <h3>港珠澳大桥海底沉管对接</h3>
          <span class="left">
            港珠澳大桥海底沉管对接被称为“最精准深海之吻”。
            33节沉管在海平面以下13米至48米不等的深度进行海底无人对接，对接误差控制在2厘米以内，是目前世界上最精准的深海对接。而最终接头安装偏差更是从最初的17厘米降至2.5毫米，更是达到了毫米级的安装精度。
            <br>海底沉管对接，可以说是智慧与工艺的双重挑战。我们专门制作了一个沉管对接小游戏，您可以扫描二维码体验这一过程。
          </span>
          <div class="right">
            <img src="@/assets/img/haidi4.png" alt>
          </div>
        </div>
      </MaxCard>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HaiDiSuiDao',
  data () {
    return {
      opacity: 0,
      show: false,
    }
  },
  methods: {
    clickDot (index) {
      if (index === 4) {
        this.opacity = 5
        this.show = true
        return
      }
      if (~[2, 5, 6].indexOf(index)) {
        const video = {
          url: require(`../../public/video/dot/6-${index}.mp4`),
        }
        this.opacity = 5
        this.$playVideo(video).then(() => {
          this.opacity = 0
        })
      }
    },
    close () {
      this.show = false
      this.opacity = 0
    },
  },
}
</script>
