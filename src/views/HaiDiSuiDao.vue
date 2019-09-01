<template>
  <div id="HaiDiSuiDao">
    <page page-name="HaiDiSuiDao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <dot :style="{ top: '5.7rem', left: '7rem' }" text="世界最长、最深的海底沉管隧道" @click.native="clickDot(1)"/>
        <dot :style="{ top: '5.7rem', left: '10rem' }" text="世界最重沉管" @click.native="clickDot(2)"/>
        <dot :style="{ top: '5.7rem', left: '13rem' }" text="世界首次实现沉管隧道滴水不漏" @click.native="clickDot(3)"/>
        <dot :style="{ top: '2rem', left: '13rem' }" text="世界最精准的沉管对接" @click.native="clickDot(4)"/>
        <dot :style="{ top: '3.5rem', left: '13rem' }" text="建设者访谈" @click.native="clickDot(5)"/>
        <nav-bar back-and-next/>
      </template>
    </page>
    <transition name="fade">
      <MaxCard v-if="show" @close="close"/>
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
        console.log('海底隧道')
        this.show = true
      }
    },
    close () {
      this.show = false
    },
  },
}
</script>
