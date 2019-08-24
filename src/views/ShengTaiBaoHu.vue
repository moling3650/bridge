<template>
  <div id="ShengTaiBaoHu">
    <page page-name="ShengTaiBaoHu" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
}
</script>
