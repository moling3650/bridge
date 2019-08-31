<template>
  <div id="Constructer">
    <div id="slider">
      <ul class="container">
        <transition-group name="fade" mode="out-in">
          <li v-for="item in items" :key="item.img">
            <img :src="item.img">
          </li>
        </transition-group>
      </ul>
      <div>
        <i class="wire"/>
      </div>
    </div>
    <ul class="direction">
      <li v-show="index > 0" class="left" @click="index--"/>
      <li v-show="index < sliders.length - size" class="right" @click="index++"/>
    </ul>
    <nav-bar/>
    <!-- <page page-name="End" no-loop autoplay @ended="$router.push({ name: 'navigation', query: { loop: true } })"/> -->
  </div>
</template>

<script>
export default {
  name: 'Constructer',
  data () {
    return {
      size: 3,
      index: 0,
      sliders: [
        { img: require('../assets/constructer/01.png') },
        { img: require('../assets/constructer/02.png') },
        { img: require('../assets/constructer/03.png') },
        { img: require('../assets/constructer/04.png') },
        { img: require('../assets/constructer/05.png') },
        { img: require('../assets/constructer/06.png') },
        { img: require('../assets/constructer/07.png') },
        { img: require('../assets/constructer/08.png') },
        { img: require('../assets/constructer/09.png') },
        { img: require('../assets/constructer/10.png') },
        { img: require('../assets/constructer/11.png') },
        { img: require('../assets/constructer/12.png') },
        { img: require('../assets/constructer/13.png') },
        { img: require('../assets/constructer/14.png') },
        { img: require('../assets/constructer/15.png') },
        { img: require('../assets/constructer/16.png') },
        { img: require('../assets/constructer/17.png') },
        { img: require('../assets/constructer/18.png') },
        { img: require('../assets/constructer/19.png') },
        { img: require('../assets/constructer/20.png') },
        { img: require('../assets/constructer/21.png') },
        { img: require('../assets/constructer/22.png') },
        { img: require('../assets/constructer/23.png') },
        { img: require('../assets/constructer/24.png') },
        { img: require('../assets/constructer/25.png') },
        { img: require('../assets/constructer/26.png') },
        { img: require('../assets/constructer/27.png') },
        { img: require('../assets/constructer/28.png') },
        { img: require('../assets/constructer/29.png') },
        { img: require('../assets/constructer/30.png') },
        { img: require('../assets/constructer/31.png') },
        { img: require('../assets/constructer/32.png') },
        { img: require('../assets/constructer/33.png') },
        { img: require('../assets/constructer/34.png') },
        { img: require('../assets/constructer/35.png') },
        { img: require('../assets/constructer/36.png') },
        { img: require('../assets/constructer/37.png') },
      ],
    }
  },
  computed: {
    items () {
      return this.sliders.slice(this.index, this.index + this.size)
    },
  },
  // methods: {
  //   // move (offset, direction) {
  //   //   if (!direction) {
  //   //     this.$refs.container.style.transform = `translateX(${0 -
  //   //       503 * this.num}px)`
  //   //     this.num++
  //   //   } else {
  //   //     this.num > 0 && this.num--
  //   //     this.$refs.container.style.transform = `translateX(${0 -
  //   //         503 * this.num}px)`
  //   //   }
  //   //   // transform: translateX(-600px);
  //   // },
  // },
}
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
#Constructer {
  width: 100%;
  height: 100%;
  text-align: center;
  // background-image: url(../../public/img/constructer/BG.jpg);
  background-image: url(../assets/constructer/Home-1-p.jpg);
  // background-image: url(../assets/constructer/01.png);
  background-size: 100%;
}
#slider {
  text-align: center;
  float: left;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 79%;
  overflow: hidden;
  margin: 0 10%;
  .container {
    overflow: hidden;
    transition: transform 300ms ease-out;
    z-index: 1;
    margin: 20px auto;
    width: 19000px;
    position: relative;
    white-space: nowrap;
        padding: 15px 0;
    li {
      float: left;
      margin: 0 25px;
      transition: all 1s linear;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .wire {
    bottom: 147px;
    left: 0;
    width: 1530px;
    height: 8px;
    position: absolute;
    background-image: url(../assets/constructer/wire.png);
    display: block;
    background-size: cover;
  }
}
.direction {
  .left {
    top: 40%;
    position: absolute;
    left: 5%;
    cursor: pointer;
    background-image: url(../assets/constructer/left.png);
    display: block;
    height: 80px;
    width: 80px;
    background-size: cover;
  }
  .right {
    cursor: pointer;
    top: 40%;
    position: absolute;
    right: 5%;
    background-image: url(../assets/constructer/right.png);
    display: block;
    height: 80px;
    width: 80px;
    background-size: cover;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
  transition: transform 300ms ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: transform 300ms ease-out;
  opacity: 0;
}
</style>
