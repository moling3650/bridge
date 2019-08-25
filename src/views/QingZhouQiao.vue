<template>
  <div id="QingZhouQiao">
    <page page-name="QingZhouQiao" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'QingZhouQiao',
}
</script>
