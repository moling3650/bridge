<template>
  <div id="ZhiShiMoFang" ref="page">
    <div class="tech-container">
      <ul class="tech-list" :style="{ width: `${col * 206}px` }">
        <li v-for="(t, i) in filteredData" :key="t" class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
          <div class="picBox">
            <div class="show">
              <img :src="`http://www.gdggkf.com/zg/assets/tech/list_${(size + index + i) % 18 + 1}.png`">
            </div>
            <div class="hide">
              <h3>{{ t }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <i v-show="index > 0" class="left" @click="index -= 1"/>
    <i v-show="index < techList.length / size - 1" class="right" @click="index += 1"/>
    <nav-bar/>
  </div>
</template>

<script>
export default {
  name: 'ZhiShiMoFang',
  data () {
    return {
      techList: [
        '',
        '华龙一号',
        '脉冲式散裂\n中子源',
        '深圳国家\n基因库',
        '“天河二号”\n超级计算机',
        '全球最大水陆两栖飞机AG600',
        '大疆无人机',
        '华为',
        '大亚湾中微子\n实验室',
        '优必选Alpha\n机器人',
        '亿航自动驾驶飞行器',
        '“蓝鲸1号”\n钻井平台',
        '全球首艘极地\n重载甲板运输船',
        '富士康\n工业互联网',
        '±800千伏特高压直流工程',
        '极行者号无人艇',
        '深圳光启\n“旅行者”3号',
        '深圳前海\n供冷系统',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ],
      index: 0,
      col: 7,
      row: 3,
    }
  },
  computed: {
    size () {
      return this.row * this.col
    },
    filteredData () {
      return this.techList.slice(this.index * this.size, (this.index + 1) * this.size)
    },
  },
  mounted () {
    this._setSize()
  },
  methods: {
    _setSize () {
      const rect = this.$refs.page.getBoundingClientRect()
      this.col = parseInt((rect.width - 250) / 206)
      this.row = parseInt((rect.height - 350) / 206)
    },
    _getDirection (event) {
      const x = event.pageX - event.target.offsetLeft// (得到鼠标在框中的坐标)
      const y = event.pageY - event.target.offsetTop - 200// (得到鼠标在框中的坐标)
      const H = event.target.clientHeight
      const W = event.target.clientWidth
      const k = Math.floor(H / W)// 为了防止不能整除
      if ((k * x) >= y && (H - k * x) >= y) { // 这是判断从上方进入,这边简化处理不对等于情况做特别处理
        return 'top'
      }
      if ((k * x) < y && (H - k * x) < y) {
        return 'bottom'
      }
      if ((k * x) < y && (H - k * x) > y) {
        return 'left'
      }
      if ((k * x) > y && (H - k * x) < y) {
        return 'right'
      }
    },
    handleMouseEnter (event) {
      event.target.className = `in-${this._getDirection(event)}`
    },
    handleMouseLeave (event) {
      event.target.className = `out-${this._getDirection(event)}`
    },
  },
}
</script>

<style lang="scss" scoped>
#ZhiShiMoFang {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(../../public/img/bg/magic_cube.jpg);
  background-size: 100%;
  .left,
  .right {
    position: absolute;
    top: 50%;
    margin-top: -100px;
    display: block;
    width: 110px;
    height: 200px;
    cursor: pointer;
  }
  .left {
    left: 10px;
    background-image: url(../assets/img/left.png);
    background-size: 100% 100%;
  }
  .right {
    right: 10px;
    background-image: url(../assets/img/right.png);
    background-size: 100% 100%;
  }
}
.tech-container {
  position: relative;
  top: 200px;
  .tech-list {
    margin: 0 auto;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
  }
  li {
    position: relative;
    width: 200px;
    height: 200px;
    list-style: none;
    margin: 3px;
    display: inline-block;
    perspective: 400px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .picBox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-style: preserve-3d;
    transform-origin: 50% 50% -100px;
    animation: 200ms ease-out 0ms 1 normal forwards;
  }
  .show,
  .hide {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
  }
  .hide{
    color: #fff;
    background-color: #1ab7ea;
    text-align: center;
    height: 200px;
    display: flex;
    align-items: center;
    transform: translate3d(0,0,-1px);
    cursor: pointer;
    h3 {
      font-size: 21px;
      line-height: 1.5;
      padding: 10px;
      width: 180px;
      font-weight: normal;
    }
  }
  .in-top .hide,
  .out-top .hide {
    transform-origin: 0% 100%;
    transform: translate3d(0, -100%, 0) rotate3d(1,0,0,90deg);
  }
  .in-top .picBox {
    animation-name: in-top;
    animation-play-state: running;
  }
  .out-top .picBox {
    animation-name: out-top;
    animation-play-state: running;
  }

  .in-right .hide,
  .out-right .hide {
    transform-origin: 0% 0%;
    transform: translate3d(100%, 0, 0) rotate3d(0,1,0,90deg);
  }
  .in-right .picBox {
    animation-name: in-right;
    animation-play-state: running;
  }
  .out-right .picBox {
    animation-name: out-right;
    animation-play-state: running;
  }
  .in-bottom .hide,
  .out-bottom .hide {
    transform-origin: 0% 0%;
    transform: translate3d(0, 100%, 0) rotate3d(-1,0,0,90deg);
  }
  .in-bottom .picBox {
    animation-name: in-bottom;
    animation-play-state: running;
    }
  .out-bottom .picBox {
    animation-name: out-bottom;
    animation-play-state: running;
  }
  .in-left .hide,
  .out-left .hide {
    transform-origin: 100% 0;
    transform: translate3d(-100%,0,0) rotate3d(0,-1,0,90deg);
  }
  .in-left .picBox {
    animation-name: in-left;
    animation-play-state: running;
  }
  .out-left .picBox {
    animation-name: out-left;
    animation-play-state: running;
  }
}

@keyframes in-top {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(-1,0,0,90deg)}
}

@keyframes out-top {
    from {transform: rotate3d(-1,0,0,90deg)}
    to   {transform: rotate3d(0,0,0,0deg)}
}

@keyframes in-right {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(0,-1,0,90deg)}
}

@keyframes out-right {
    from  {transform: rotate3d(0,-1,0,90deg)}
    to    {transform: rotate3d(0,0,0,0deg)}
}

@keyframes in-bottom {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(1,0,0,90deg)}
}
@keyframes out-bottom {
    from  {transform: rotate3d(1,0,0,90deg)}
    to    {transform: rotate3d(0,0,0,0deg)}
}

@keyframes in-left {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(0,1,0,90deg)}
}
@keyframes out-left {
    from  {transform: rotate3d(0,1,0,90deg)}
    to    {transform: rotate3d(0,0,0,0deg)}
}
</style>
