<template>
  <div id="Carousel">
    <div class="slider core">
      <i class="close" @click="close"/>
      <ul class="container">
        <transition-group name="list-complete">
          <li v-for="i in items" :key="i">
            <img :src="`${url}${i}.jpg`">
            <span>{{ url }}{{ i }} .jpg</span>
            <!-- <img src="../assets/worldlong/1.jpg"> -->
            <!-- <span class="info">1、钢箱梁制造分为板单元制造、箱梁段组拼、桥位吊装三个阶段，其中板单元是基本元件。图为河北山海关的板单元机械化生产车间。</span> -->

            <!-- <img :src="`../assets/worldlong/${i}.jpg`"> -->
            <!-- <div>{{ items }}</div> -->
            <!-- <img src="../assets/worldlong/1.jpg" alt=""> -->
          </li>
        </transition-group>
      </ul>
      <div class="core2"/>
    </div>
    <ul class="direction">
      <li v-show="index > 0" class="left" @click="index--"/>
      <li v-show="index < total - size" class="right" @click="index++"/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      size: 1,
      index: 0,
    }
  },
  computed: {
    nums () {
      return new Array(5).fill(0).map((n, i) => i + 1)
    },
    total () {
      return this.nums.length
    },
    items () {
      const preIdex = (this.index + this.total - 1) % this.total
      return [
        this.nums[preIdex],
        ...this.nums.slice(this.index, this.index + this.size + 1),
      ]
    },
  },
  created () {
    console.log(this.url)
  },
  methods: {
    close () {
      // this.$refs.player.dp.pause()
      // this.$refs.player.dp.seek(0)
      // this.show = false
      this.$emit('close', false)
      // this.callback()
    },
  },
}
</script>

<style lang="scss" scoped>
#Carousel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slider {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10rem;
      padding: 0.15rem;
  transform: translate3d(-50%, -50%, 0);
  background-color: #214858;
  // overflow: hidden;
  .close {
    position: absolute;
    top: -1rem;
    right: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    background-image: url(../assets/img/back.png);
    background-size: cover;
    cursor: pointer;
  }
  .container {
    position: relative;
    // padding: 0.15rem 0;
    margin: 0 auto;
    // margin-top: 4rem;
    z-index: 1;
    white-space: nowrap;
    width: 10rem;
    overflow: hidden;
    li {
      display: inline-block;
      width: 10rem;
      transition: all 0.3s ease-out;
      img {
        width: 10rem;
        height: 7rem;
        float: left;
      }
      span {
        float: left;
        width: 10rem;
        font-size: 0.3rem;
        color: #fff;
        white-space: pre-wrap;
        text-align: left;
            line-height: 0.38rem;
      }
    }
  }
}
.direction {
  .left,
  .right {
    position: absolute;
    top: 4.5rem;
    display: block;
    height: 2rem;
    width: 1.1rem;
    background-size: cover;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  .left {
    left: 5%;
    background-image: url(../assets/img/left.png);
    &:hover {
      transform: scale(1.2) translateX(-0.08rem);
    }
  }
  .right {
    right: 5%;
    background-image: url(../assets/img/right.png);
    &:hover {
      transform: scale(1.2) translateX(0.08rem);
    }
  }
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
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
  &:after {
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
