<template>
  <div class="Navigation">
    <page ref="page" page-name="Navigation" can-skip autoplay>
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-link to="JiuZhouQiao" text="九洲航道桥" :style="{ top: '5.28rem', left: '2.5rem' }"/>
        <nav-link to="JiangHaiQiao" text="江海航道桥" :style="{ top: '2.38rem', left: '5.3rem' }"/>
        <nav-link to="ShengTaiBaoHu" text="生态保护" :style="{ top: '5rem', left: '6.2rem' }"/>
        <nav-link to="QingZhouQiao" text="青州航道桥" :style="{ top: '4.2rem', left: '8.6rem' }"/>
        <nav-link to="XiRenGongDao" text="西人工岛" :style="{ top: '2.38rem', left: '11.3rem' }"/>
        <nav-link to="HaiDiSuiDao" text="海底隧道" :style="{ top: '4.6rem', left: '12rem' }"/>
        <nav-link to="DongRenGongDao" text="东人工岛" :style="{ top: '3.1rem', left: '14rem' }"/>
        <div class="text zuh">珠海</div>
        <div class="text hk">香港</div>
        <div class="text macau">澳门</div>
        <nav-bar always/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
.text {
  position: absolute;
  font-size: 0.48rem;
  color: #00a4c7;
  font-weight: bold;
  opacity: 0.8;
}
.zuh {
 top: 1.8rem;
 left: 3rem;
}
.macau {
  top: 6rem;
  left: 0.5rem;
}
.hk {
  top: 3rem;
  left: 17rem;
}
</style>
