<template>
  <div class="Navigation">
    <page ref="page" page-name="Navigation" :start="start" can-skip autoplay>
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-link to="JiuZhouQiao" text="九洲航道桥" :style="{ marginTop: '27.5%', left: '13%' }"/>
        <nav-link to="JiangHaiQiao" text="江海航道桥" :style="{ marginTop: '12%', left: '27%' }"/>
        <nav-link to="ShengTaiBaoHu" text="生态保护" :style="{ marginTop: '25%', left: '32%' }"/>
        <nav-link to="QingZhouQiao" text="青州航道桥" :style="{ marginTop: '22%', left: '45%' }"/>
        <nav-link to="XiRenGongDao" text="西人工岛" :style="{ marginTop: '12%', left: '57%' }"/>
        <nav-link to="HaiDiSuiDao" text="海底隧道" :style="{ marginTop: '24%', left: '63%' }"/>
        <nav-link to="DongRenGongDao" text="东人工岛" :style="{ marginTop: '16%', left: '73%' }"/>
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
  data () {
    return {
      start: this.$route.query.loop ? 'LoopVideo' : 'Cutscenes',
    }
  },
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
