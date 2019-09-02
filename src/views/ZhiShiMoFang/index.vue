<template>
  <div id="ZhiShiMoFang" ref="page">
    <video
      v-if="!showDetail"
      class="v"
      :src="require('../../../public/video/ZhiShiMoFang.mp4')"
      autoplay
      @ended="showDetail = true"
    >您的浏览器不支持 video 标签。</video>
    <template v-if="showDetail">
      <div class="top-nav">
        <img src="../../assets/img/mofang_logo.png" alt="知识魔方">
        <!-- <img class="logo" width="120px" height="120px" :src="require('./logo.png')" alt="topNav">
        <span class="text-des">知识魔方</span> -->
      </div>
      <template v-if="!dialogVisiable">
        <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.push({ name: 'navigation', query: { loop: true } })"/>
        <section class="content-display-wrapper">
          <div class="tech-container">
            <ul class="tech-list" :style="{ width: `${col * 206}px` }">
              <li
                v-for="(d, i) in filteredData"
                :key="i"
                class="out-right"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                @click="showDialog(d)"
              >
                <div class="picBox">
                  <div class="show">
                    <img :src="d.img">
                  </div>
                  <div class="hide">
                    <h3>{{ d.question }}</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <i v-show="index > 0" class="left" @click="index -= 1"/>
          <i v-show="index < data.length / size - 1" class="right" @click="index += 1"/>
        </section>
        <nav-bar/>
      </template>
      <transition name="fade">
        <div v-if="dialogVisiable" class="dialog">
          <div class="header">
            <i class="close" @click="dialogVisiable = false"/>
          </div>
          <div class="body">
            <h3 class="question">{{ item.question }}</h3>
            <div class="content">
              <img :src="item.img" alt class="photo">
              <div class="line"/>
              <div class="answer">
                <p v-for="(p, i) in item.answer" :key="i">{{ p }}</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import data from './data.js'
export default {
  name: 'ZhiShiMoFang',
  data () {
    return {
      dialogVisiable: false,
      showDetail: false,
      data: data,
      index: 0,
      col: 7,
      row: 3,
      item: {},
    }
  },
  computed: {
    size () {
      return this.row * this.col
    },
    filteredData () {
      return this.data
        .map((item, index) => {
          item.img = require(`./img/${index + 1}.jpg`)
          return item
        })
        .slice(this.index * this.size, (this.index + 1) * this.size)
    },
  },
  watch: {
    showDetail () {
      console.log(this.showDetail)
      if (window.reload) false
    },
  },
  mounted () {
    this._setSize()
  },
  methods: {
    showDialog (item) {
      this.dialogVisiable = true
      this.item = item
    },
    _setSize () {
      const rect = this.$refs.page.getBoundingClientRect()
      this.col = parseInt((rect.width - 250) / 206)
      this.row = parseInt((rect.height - 350) / 206)
    },
    _getDirection (event) {
      const x = event.pageX - event.target.offsetLeft // (得到鼠标在框中的坐标)
      const y = event.pageY - event.target.offsetTop - 200 // (得到鼠标在框中的坐标)
      const H = event.target.clientHeight
      const W = event.target.clientWidth
      const k = Math.floor(H / W) // 为了防止不能整除
      if (k * x >= y && H - k * x >= y) {
        // 这是判断从上方进入,这边简化处理不对等于情况做特别处理
        return 'top'
      }
      if (k * x < y && H - k * x < y) {
        return 'bottom'
      }
      if (k * x < y && H - k * x > y) {
        return 'left'
      }
      if (k * x > y && H - k * x < y) {
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
.v {
  position: absolute;
  top: 0.05rem;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0.05rem;
  left: 0;
  width: 19.2rem;
  height: 10.8rem;
  z-index: 2;
}
#ZhiShiMoFang {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(../../../public/img/bg/magic_cube.jpg);
  background-size: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.2rem;
  transition: all 0.3s ease;
  .top-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom: 0.72rem;
    img {
      width: 9.6rem;
    }

    // .top-nav-img {
    //   height: 1.55rem;
    //   width: 4.92rem;
    //   margin-right: 0.4rem;
    // }
    // .text-des {
    //   font-size: 0.85rem;
    //   color: #fff;
    //   letter-spacing: 0.1rem;
    //   margin-left: 0.3rem;
    // }
  }
  .content-display-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
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
    background-image: url(../../assets/img/left.png);
    background-size: 100% 100%;
  }
  .right {
    right: 10px;
    background-image: url(../../assets/img/right.png);
    background-size: 100% 100%;
  }
  .dialog {
    position: absolute;
    top: 20%;
    left: 15%;
    width: 70%;
    height: 70%;
    border: 2px solid #b5e5f4;
    background: radial-gradient(
      rgba(101, 172, 218, 0.6),
      rgba(101, 172, 218, 0.9),
      #508eb7
    );
    .header {
      height: 48px;
      background-color: #105e8b;
      .close {
        position: absolute;
        right: 9px;
        top: 9px;
        display: inline-block;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 10;
        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 14px;
          right: 4px;
          width: 20px;
          height: 2px;
          background: #eee;
        }

        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
    .body {
      margin: 20px 5%;
      margin-top: 0;
      position: absolute;
      top: 48px;
      bottom: 0;
      left: 0;
      right: 0;
      color: #eeeeee;
      .question {
        // height: 20px;
        margin: 20px auto;
        font-size: 0.34rem;
      }
      .content {
        // position: absolute;
        // top: 50px;
        // bottom: 10px;
        // right: 0;
        // left: 0;
        display: flex;
        flex-direction: row;
        .photo {
          width: 3rem;
          height: 3rem;
          vertical-align: top;
        }
        .line {
          height: 4rem;
          background: #fff;
          width: 3px;
          margin-left: 30px;
        }
        .answer {
          display: inline-block;
          width: 75%;
          height: 5rem;
          margin-left: 5%;
          padding-left: 5%;
          // border-left: 1px solid #eee;
          box-sizing: border-box;
          overflow: auto;
          font-size: 0.24rem;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 12px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 12px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.2);
          }
          &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            border-radius: 0;
            background: rgba(0, 0, 0, 0.1);
          }
          p {
            margin-bottom: 0.2rem;
            line-height: 1.4;
            text-indent: 0.48rem;
          }
          p:nth-child(1) {
            margin-top: 0;
          }
        }
      }
    }
  }
}
.tech-container {
  position: relative;
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
  .hide {
    color: #fff;
    background-color: #1ab7ea;
    text-align: center;
    height: 200px;
    display: flex;
    align-items: center;
    transform: translate3d(0, 0, -1px);
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
    transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 90deg);
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
    transform: translate3d(100%, 0, 0) rotate3d(0, 1, 0, 90deg);
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
    transform: translate3d(0, 100%, 0) rotate3d(-1, 0, 0, 90deg);
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
    transform: translate3d(-100%, 0, 0) rotate3d(0, -1, 0, 90deg);
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
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
}

@keyframes out-top {
  from {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes in-right {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, -1, 0, 90deg);
  }
}

@keyframes out-right {
  from {
    transform: rotate3d(0, -1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes in-bottom {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(1, 0, 0, 90deg);
  }
}
@keyframes out-bottom {
  from {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes in-left {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg);
  }
}
@keyframes out-left {
  from {
    transform: rotate3d(0, 1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}
</style>
