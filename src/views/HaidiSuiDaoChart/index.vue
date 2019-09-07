<template>
  <div class="mchart-container ">
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 101 }" @click.native="$redirect(from)"/>
    <div class="mchart core">
      <div class="lengtmaxbut" :class="{ curre: direction === 'left' }" @click="checkLeft">世界海底沉管隧道长度对比</div>
      <div class="depthmaxbut" :class="{ curre: direction === 'right' }" @click="checkRight">世界海底沉管隧道深度对比</div>
      <div id="munmin" ref="munmin">
        <div ref="numa" class="numa">{{ nums[0] }}</div>
        <div ref="numb" class="numb">{{ nums[1] }}</div>
        <div ref="numc" class="numc">{{ nums[2] }}</div>
        <div ref="numd" class="numd">{{ nums[3] }}</div>
        <div ref="nume" class="nume">{{ nums[4] }}</div>
      </div>
      <div id="linea" ref="linea">
        <p>日本东京湾海底公路隧道</p>
      </div>
      <div id="lineb" ref="lineb">
        <p>土耳其博斯普鲁斯海峡沉管隧道</p>
      </div>
      <div id="linec" ref="linec">
        <p>韩国巨加大桥海底沉管隧道</p>
      </div>
      <div id="lined" ref="lined">
        <p>丹麦-瑞典海峡大桥海底沉管隧道</p>
      </div>
      <div id="linee" ref="linee">
        <p>港珠澳大桥海底沉管隧道</p>
      </div>

      <div id="atipsball" ref="atipsball"/>
      <div id="btipsball" ref="btipsball"/>
      <div id="ctipsball" ref="ctipsball"/>
      <div id="dtipsball" ref="dtipsball"/>

      <div id="atipsline" ref="atipsline"/>
      <div id="btipsline" ref="btipsline"/>
      <div id="ctipsline" ref="ctipsline"/>
      <div id="dtipsline" ref="dtipsline"/>

      <div id="atipsmian" ref="atipsmian">
        <p>2018年10月前是亚洲最长海底沉管隧道</p>
      </div>
      <div id="btipsmian" ref="btipsmian">
        <p>2018年10月前是世界最长海底沉管隧道</p>
      </div>
      <div id="ctipsmian" ref="ctipsmian">
        <p>2018年10月通车成为世界最长海底沉管隧道，是第二名的1.6倍。</p>
      </div>
      <div id="dtipsmian" ref="dtipsmian">
        <p>为保证通行30万吨轮船，港珠澳大桥沉管隧道需要埋到海床以下20多米，是全世界埋进海床最深的沉管隧道。</p>
      </div>

      <div id="xline" ref="xline"/>
      <div id="yline" ref="yline"/>
      <div id="xlingnum" ref="xlingnum">
        <ul>
          <li v-for="i in 6" :key="i" :style="{ marginLeft }">
            <i/>
            <span>{{ i }}</span>
          </li>
        </ul>
      </div>
      <div class="core2"/>
    </div>
  </div>
</template>
<script>
import { TimelineMax } from 'gsap/TweenMax'

export default {
  name: 'HaidiSuiDaoChart',
  data () {
    return {
      from: {
        name: this.$route.meta.from || 'navigation',
        query: { loop: true },
      },
      nums: ['', '', '', '', ''],
      marginLeft: '2.15rem',
      direction: '',
      playing: false,
    }
  },
  mounted () {
    this.initElement()
    this.checkLeft()
  },
  methods: {
    initElement () {
      const q = new TimelineMax()
      q.to(this.$refs.xline, 1, { width: '12.5rem' }, 0.5)
      q.to(this.$refs.yline, 1, { height: '5.7rem' }, 0.5)
      q.to(this.$refs.yline, 1, { top: '1.1rem' }, 0.5)
      q.to(this.$refs.xlingnum, 1, { width: '13rem' }, 0.5)
      q.play()
    },
    checkLeft () {
      if (this.direction === 'left' || this.playing) {
        return
      }
      this.playing = true
      this.direction = 'left'
      // 世界最长的海底沉管隧道
      const tm = new TimelineMax()
      tm.to(this.$refs.munmin, 1, { width: 0 }, 0)
      tm.to(this.$refs.munmin, 1, { width: '1.3rem' }, 1)
      this.nums = ['1.035km', '1.387km', '3.24km', '3.51km', '5.664km']
      tm.to(this.$refs.linea, 0.8, { width: '2.6rem', top: '1.43rem' }, 1.2)
      tm.to(this.$refs.lineb, 0.8, { width: '2.8rem', top: '2.47rem' }, 1.4)
      tm.to(this.$refs.linec, 0.8, { width: '7.4rem', top: '3.55rem' }, 1.6)
      tm.to(this.$refs.lined, 0.8, { width: '8.0rem', top: '4.66rem' }, 1.8)
      tm.to(this.$refs.linee, 0.8, { width: '12.0rem', top: '5.74rem' }, 2)

      tm.to(this.$refs.atipsball, 0.3, { width: '.13rem', height: '.13rem' }, 2.2)
      tm.to(this.$refs.btipsball, 0.3, { width: '.13rem', height: '.13rem' }, 2.4)
      tm.to(this.$refs.ctipsball, 0.3, { width: '.13rem', height: '.13rem' }, 2.6)

      tm.to(this.$refs.atipsline, 0.3, { height: '1.0rem', top: '2.87rem' }, 2.2)
      tm.to(this.$refs.btipsline, 0.3, { height: '1.0rem', top: '4.0rem' }, 2.4)
      tm.to(this.$refs.ctipsline, 0.3, { height: '1.0rem', top: '5.07rem' }, 2.6)

      tm.to(this.$refs.atipsmian, 0.8, { width: '3.6rem', top: '2.86rem' }, 2.3)
      tm.to(this.$refs.btipsmian, 0.8, { width: '3.6rem', top: '3.99rem' }, 2.5)
      tm.to(this.$refs.ctipsmian, 0.8, { width: '5.7rem', top: '5.06rem', onComplete: () => {
        this.playing = false
      } }, 2.7)

      tm.to(this.$refs.dtipsball, 0.3, { width: 0, height: 0 }, 0.4)
      tm.to(this.$refs.dtipsline, 0.3, { height: 0, top: '3.78rem' }, 0.2)
      tm.to(this.$refs.dtipsmian, 0.8, { width: 0 }, 0)
      this.marginLeft = '2.15rem'
      tm.play()
    },
    checkRight () {
      if (this.direction === 'right' || this.playing) {
        return
      }
      this.playing = true
      this.direction = 'right'
      const tm = new TimelineMax()
      tm.to(this.$refs.linea, 0.8, { width: '5.0rem', top: '2.47rem' }, 0.6)
      tm.to(this.$refs.lineb, 0.8, { width: '12.0rem', top: '5.74rem' }, 0.6)
      tm.to(this.$refs.linec, 0.8, { width: '9.0rem', top: '4.66rem' }, 0.6)
      tm.to(this.$refs.lined, 0.8, { width: '4.4rem', top: '1.43rem' }, 0.6)
      tm.to(this.$refs.linee, 0.8, { width: '8.8rem', top: '3.55rem' }, 0.6)
      tm.to(this.$refs.atipsball, 0.3, { width: 0, height: 0 }, 0.4)
      tm.to(this.$refs.btipsball, 0.3, { width: 0, height: 0 }, 0.4)
      tm.to(this.$refs.ctipsball, 0.3, { width: 0, height: 0 }, 0.4)
      tm.to(this.$refs.atipsline, 0.3, { height: 0, top: '3.87rem' }, 0.2)
      tm.to(this.$refs.btipsline, 0.3, { height: 0, top: '5.0rem' }, 0.2)
      tm.to(this.$refs.ctipsline, 0.3, { height: 0, top: '6.07rem' }, 0.2)
      tm.to(this.$refs.atipsmian, 0.8, { width: 0 }, 0)
      tm.to(this.$refs.btipsmian, 0.8, { width: 0 }, 0)
      tm.to(this.$refs.ctipsmian, 0.8, { width: 0 }, 0)
      tm.to(this.$refs.dtipsball, 0.3, { width: '.13rem', height: '.13rem' }, 0.8)
      tm.to(this.$refs.dtipsline, 0.3, { height: '1.0rem', top: '2.78rem' }, 1)
      tm.to(this.$refs.dtipsmian, 0.8, { width: '6.0rem', onComplete: () => {
        this.playing = false
      } }, 1.2)
      tm.to(this.$refs.munmin, 1, { width: 0 }, 0)
      tm.to(this.$refs.munmin, 1, { width: '1.3rem' }, 1)
      tm.to(this.$refs.xlingnum, 0.3, { width: 0 }, 0)
      tm.to(this.$refs.xlingnum, 1, { width: '13.0rem' }, 0.5)
      tm.to(this.$refs.xlingnum, 0.8, { left: '1.3rem' }, 0.5)
      this.marginLeft = '1.9rem'
      this.nums = ['-25m', '-28m', '-46m', '-48m', '-61m']
    },
  },
}
</script>
<style lang='scss' sopped>
@import './scss/ncss.css';
.lengtmaxbut,
.depthmaxbut {
  z-index: 100;
}

  /*四个角效果*/
$borderColor: #60d8fd;
$coreWidth: 0.16rem;
$offset: -0.04rem;
.core {
  position: relative;
  border: 0.02rem solid $borderColor;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: $offset;
    width: $coreWidth;
    height: $coreWidth;
    border: 0.05rem solid $borderColor;
  }
  &:after {
    right: $offset;
    border-left-width: 0;
    border-top-width: 0;
  }
  &:before {
    left: $offset;
    border-right-width: 0;
    border-top-width: 0;
  }
}

.core2 {
  position: absolute;
  top: $offset;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  &:before,
  &:after  {
    content: "";
    display: block;
    position: absolute;
    width: $coreWidth;
    height: $coreWidth;
    border: 0.05rem solid $borderColor;
  }
  &:after {
    left: $offset;
    border-right-width: 0;
    border-bottom-width: 0;
  }
  &:before {
    right: $offset;
    border-left-width: 0;
    border-bottom-width: 0;
  }
}
</style>
