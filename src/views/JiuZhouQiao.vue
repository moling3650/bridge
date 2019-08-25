<template>
  <div id="JiuZhouQiao">
    <page page-name="JiuZhouQiao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'JiuZhouQiao',
}
</script>
