<template>
  <div id="XiRenGongDao">
    <page page-name="XiRenGongDao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'XiRenGongDao',
}
</script>
