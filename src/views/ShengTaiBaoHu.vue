<template>
  <div id="ShengTaiBaoHu">
    <page page-name="ShengTaiBaoHu" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
}
</script>
