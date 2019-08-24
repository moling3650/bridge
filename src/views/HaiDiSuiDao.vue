<template>
  <div id="HaiDiSuiDao">
    <page page-name="HaiDiSuiDao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'HaiDiSuiDao',
}
</script>
