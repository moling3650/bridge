<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
        <dot v-show="isLoop" :style="{ marginTop: '10%', right: '50%' }" text="同心结"/>
        <dot v-show="isLoop" :style="{ marginTop: '48%', left: '15%' }" text="SS级护栏"/>
        <dot v-show="isLoop" :style="{ marginTop: '50%', right: '32%' }" text="世界最大地面沥青铺装"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
}
</script>
