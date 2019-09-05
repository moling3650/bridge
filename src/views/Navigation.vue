<template>
  <div class="Navigation">
    <page ref="page" page-name="Navigation" can-skip autoplay>
      <template v-if="isLoop" slot-scope="{ isLoop }">
        <nav-link to="Roaming" text="大桥漫游" :style="{ top: '5.7rem', left: '0.95rem' }"/>
        <nav-link to="JiuZhouQiao" text="九洲航道桥" :style="{ top: '2.05rem', left: '3rem' }"/>
        <nav-link to="JiangHaiQiao" text="江海航道桥" :style="{ top: '1.3rem', left: '6.4rem' }"/>
        <nav-link to="ShengTaiBaoHu" text="生态保护" :style="{ top: '5.2rem', left: '4.75rem' }"/>
        <nav-link to="QingZhouQiao" text="青州航道桥" :style="{ top: '4.5rem', left: '7.85rem' }"/>
        <nav-link to="XiRenGongDao" text="西人工岛" :style="{ top: '1.6rem', left: '11.65rem' }"/>
        <nav-link to="HaiDiSuiDao" text="海底隧道" :style="{ top: '5.1rem', left: '12.15rem' }"/>
        <nav-link to="DongRenGongDao" text="东人工岛" :style="{ top: '2.2rem', left: '14.3rem' }"/>
        <img class="bg-text" src="@/assets/img/navigation_text.png" alt="背景图">
        <!-- <div class="text zuh">珠海</div>
        <div class="text hk">香港</div>
        <div class="text macau">澳门</div> -->
        <div class="thinks">
          特别鸣谢
          <span class="info">
            港珠澳大桥管理局：王彦林 唐丽娟 曾小娟 林杨
            <br>南方日报社：张由琼 徐杰
          </span>
        </div>
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
.bg-text {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 19.2rem;
  height: 10.8rem;
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
.thinks {
  position: absolute;
  bottom: 0.25rem;
  left: 0.25rem;
  font-size: 0.18rem;
  color: #00a4c7;
  z-index: 102;
  .info {
    display: none;
  }
  &:hover {
    .info {
      display: block;
      text-align: left;
      position: absolute;
      left: 0;
      bottom: 0.3rem;
      width: 4rem;
      line-height: 0.2rem;
      color: #ccc;
      font-size: 0.14rem;
    }
  }
}
</style>
