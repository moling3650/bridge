<template>
  <div id="Constructer">
    <div class="top-nav">
      <img src="../../assets/img/jianshedashiji_logo.png" alt="建设大事记">
    </div>
    <div id="slider">
      <ul class="container">
        <transition-group name="list-complete">
          <li v-for="i in items" :key="i">
            <img :src="require(`./img/${i}.png`)">
          </li>
        </transition-group>
      </ul>
      <div>
        <i class="wire"/>
      </div>
    </div>
    <ul class="direction">
      <left v-show="index > 0" :style="{ width: '1.1rem', height: '2rem', top: '4.3rem', left: '0.8rem'}" @click="index--"/>
      <right v-show="index < total - size" :style="{ width: '1.1rem', height: '2rem', top: '4.3rem', right: '0.8rem'}" @click="index++"/>
    </ul>
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.back()"/>
  </div>
</template>

<script>
export default {
  name: 'Constructer',
  data () {
    return {
      size: 3,
      index: 0,
    }
  },
  computed: {
    nums () {
      return new Array(37).fill(0).map((n, i) => i + 1)
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
  background-image: url(./img/bg.jpg);
  background-size: 100%;
  padding: 0.4rem 0;
}
.top-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.72rem;
  img {
    margin-top: 0.5rem;
    width: 8rem;
  }
  .top-nav-img {
    height: 1.55rem;
    width: 4.92rem;
    margin-right: 0.4rem;
  }
  .text-des {
    font-size: 0.8rem;
    color: #fff;
  }
}
#slider {
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 13.5rem;
  overflow: hidden;
  .container {
    position: relative;
    padding: 0.15rem 0;
    margin: 0.4rem auto;
    margin-left: -4.5rem;
    z-index: 1;
    white-space: nowrap;
    li {
      display: inline-block;
      width: 4rem;
      height: 5.12rem;
      margin: 0 0.25rem;
      transition: all 0.3s ease-out;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        transform: scale(1.1) translateY(-0.15rem);
      }
    }
  }
  .wire {
    position: absolute;
    bottom: 1.25rem;
    left: 0;
    display: block;
    width: 13.5rem;
    height: 0.08rem;
    background-image: url(./img/wire.png);
    background-size: 100%;
  }
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
}
</style>
