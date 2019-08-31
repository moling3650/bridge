<template>
  <div id="DongRenGongDao">
    <page page-name="DongRenGongDao" autoplay can-skip>
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-bar back-and-next/>
        <dot :style="{ top: '2.1rem', left: '6.3rem' }" text="浏览展厅" @click.native="showQRCode"/>
      </template>
    </page>
    <div v-if="qrVisiable" class="qr" @click="qrVisiable = false">
      <img src="@/assets/img/QRcode.png" alt="浏览展厅">
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
