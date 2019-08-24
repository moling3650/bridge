<template>
  <div id="DongRenGongDao">
    <page page-name="DongRenGongDao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'DongRenGongDao',
}
</script>
