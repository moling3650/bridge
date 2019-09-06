<template>
  <div id="DongRenGongDao">
    <page page-name="DongRenGongDao" autoplay can-skip :opacity="opacity">
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <dot :style="{ top: '2.1rem', left: '6.3rem' }" text="东人工岛展览馆" @click.native="show('qr')"/>
        <dot :style="{ top: '1.1rem', left: '13.3rem' }" text="港珠澳大桥4K超清壁纸" @click.native="$redirect('/DynamicPicture')"/>
        <dot :style="{ top: '5.8rem', left: '9.5rem' }" text="港珠澳大桥建设大事记" @click.native="$redirect('/JianSheDaShiJi')"/>
        <nav-bar/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$redirect('/HaiDiSuiDao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$redirect('/End')"/>
      </template>
    </page>
    <div v-if="qrVisiable" class="qr-mask" @click="hide('qr')">
      <div class="qr">
        <img src="@/assets/img/QRcode.png" alt="浏览展厅">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DongRenGongDao',
  data () {
    return {
      opacity: 0,
      qrVisiable: false,
    }
  },
  methods: {
    show (key) {
      this.opacity = 5
      this.$audio.pause()
      this[`${key}Visiable`] = true
    },
    hide (key) {
      this.opacity = 0
      this.$audio.play()
      this[`${key}Visiable`] = false
    },
  },
}
</script>

<style lang="scss" scoped>

.qr-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  text-align: center;
  .qr {
    position: relative;
    display: inline-block;
    width: 5rem;
    height: 4.8rem;
    margin-top: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      position: absolute;
      bottom: 0.3rem;
      width: 100%;
      font-size: 0.24rem;
      color: #eeeeee;
    }
  }
}
</style>
