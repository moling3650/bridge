<template>
  <div id="JiangHaiQiao">
    <page page-name="JiangHaiQiao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'JiangHaiQiao',
}
</script>
