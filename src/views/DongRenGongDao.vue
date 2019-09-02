<template>
  <div id="DongRenGongDao">
    <page page-name="DongRenGongDao" autoplay can-skip>
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar/>
        <dot :style="{ top: '2.1rem', left: '6.3rem' }" text="东人工岛展览馆" @click.native="showQRCode"/>
        <dot :style="{ top: '1.1rem', left: '13.3rem' }" text="港珠澳大桥4K超清壁纸"/>
        <dot :style="{ top: '5.8rem', left: '9.5rem' }" text="港珠澳大桥建设大事记" @click.native="$router.push('/JianSheDaShiJi')"/>
        <back :style="{ bottom: '0.2rem', right: '1.4rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/HaiDiSuiDao')"/>
        <next :style="{ bottom: '0.2rem', right: '0.2rem', width: '1rem', height: '1rem' }" @click.native="$router.push('/End')"/>
      </template>
    </page>
    <div v-if="qrVisiable" class="qr" @click="qrVisiable = false">
      <img src="@/assets/img/QRcode.png" alt="浏览展厅">
      <!-- 扫码预览港珠澳大桥展览馆(东人工岛) -->
    </div>
    <div v-if="qrVisiable" class="mask" :class="{ blur: true }"/>
  </div>
</template>

<script>
export default {
  name: 'DongRenGongDao',
  data () {
    return {
      qrVisiable: false,
    }
  },
  methods: {
    showQRCode () {
      this.qrVisiable = true
    },
  },
}
</script>

<style lang="scss" scoped>
.mask,
.qr {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
}
.qr {
  z-index: 12;
  text-align: center;
  img {
    display: inline-block;
    width: 5rem;
    height: 4.8rem;
    margin-top: 3rem;
  }
}
</style>
