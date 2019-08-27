<template>
  <div class="Navigation">
    <page ref="page" page-name="Navigation" :start="start" can-skip autoplay>
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-link to="JiuZhouQiao" text="九州桥" :style="{ top: '44%', left: '10%' }"/>
        <nav-link to="JiangHaiQiao" text="江海桥" :style="{ top: '18%', left: '25%' }"/>
        <nav-link to="ShengTaiBaoHu" text="生态保护" :style="{ top: '42%', left: '32%' }"/>
        <nav-link to="QingZhouQiao" text="青州桥" :style="{ top: '35%', left: '45%' }"/>
        <nav-link to="DongRenGongDao" text="东人工岛" :style="{ top: '17%', left: '57%' }"/>
        <nav-link to="HaiDiSuiDao" text="海底隧道" :style="{ top: '45%', left: '63%' }"/>
        <nav-link to="XiRenGongDao" text="西人工岛" :style="{ top: '23%', left: '73%' }"/>
        <nav-bar/>
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
