<template>
  <div id="Carousel">
    <div class="slider core">
      <ul class="container">
        <transition-group name="list-complete">
          <li v-for="item in items" :key="item.url">
            <img :src="item.url">
            <span class="info">{{ item.text }}</span>
          </li>
        </transition-group>
      </ul>
      <ul class="direction">
        <li v-show="index > 0" class="left" @click="index--"/>
        <li v-show="index < total - size" class="right" @click="index++"/>
      </ul>
      <div class="core2"/>
    </div>
    <back
      :style="{ top: '0.2rem', right: '0.2rem', width: '1.2rem', height: '1.2rem' }"
      @click.native="$emit('close')"
    />
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      size: 1,
      index: 0,
    }
  },
  computed: {
    total () {
      return this.images.length
    },
    items () {
      // const preIdex = (this.index + this.total - 1) % this.total
      return this.images.slice(this.index, this.index + this.size + 1)
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
  width: 15rem;
  min-height: 8rem;
  padding: 0.15rem;
  transform: translate3d(-50%, -50%, 0);
  background-color: #3a6aa2;
  // overflow: hidden;
  .container {
    position: relative;
    width: 11.5rem;
    margin: 0 auto;
    z-index: 1;
    white-space: nowrap;
    overflow: hidden;
    li {
      display: inline-block;
      width: 100%;
      transition: all 0.3s ease-out;
      img {
        float: left;
        width: 100%;
        height: 7rem;
        margin: 0.15rem 0;
      }
      span {
        float: left;
        width: 100%;
        font-size: 0.3rem;
        color: #fff;
        white-space: pre-wrap;
        text-align: left;
        line-height: 0.38rem;
        min-height: 0.76rem;
        letter-spacing: 0.026rem;
      }
    }
  }
}
.direction {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .left,
  .right {
    position: absolute;
    top: 3.5rem;
    display: block;
    width: 0.55rem;
    height: 1rem;
    z-index: 2;
    background-size: cover;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  .left {
    left: 0.5rem;
    background-image: url(../assets/img/left.png);
    &:hover {
      transform: scale(1.2) translateX(-0.08rem);
    }
  }
  .right {
    right: 0.5rem;
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
